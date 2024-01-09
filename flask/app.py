import os

from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@hostname/db_name'  # Заменить на реальные
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)

def data_export(data):
    file_path = 'data.txt'

    if os.path.exists(file_path):
        os.remove(file_path)

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write('ID;name;type;profit;risk;effect;share_holder;min_contrib\n')
        for row in data:
            file.write(f"{row.id};{row.pif_name};{row.pif_type_name};{row.y1};{row.beta};{row.sharpe};{row.share_holder};{row.min_contrib}\n")

def format_data_as_json(data):
    formatted_data = []

    for row in data:
        json = {
            'id': row.id,
            'name': row.pif_name,
            'nav': row.nav,
            'type': row.pif_type_name,
            'volatility': row.volatility,
            'share_holder': row.share_holder,
            'min_contrib': row.min_contrib,
            'commission': row.commission,
            'beta': row.beta,
            'alpha': row.alpha,
            'sharpe': row.sharpe,
            'profit_y1': row.y1,
            'profit_y3': row.y3,
            'profit_y5': row.y5,
            'profit_ys': row.ys,
            'profit_m1': row.m1,
            'profit_m3': row.m3,
        }
        formatted_data.append(json)

    return formatted_data

class Pif(db.Model):
    __tablename__ = 'pifs'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    nav = db.Column(db.Float)
    volatility = db.Column(db.Float)
    share_holder = db.Column(db.Integer)
    min_contrib = db.Column(db.Integer)
    profit = db.Column(db.String(50))
    type = db.Column(db.Integer, db.ForeignKey('pif_types.id'))
    pif_type = db.relationship('PifType', backref='pifs')
    commission = db.Column(db.Float)
    beta = db.Column(db.Float)
    alpha = db.Column(db.Float)
    sharpe = db.Column(db.Float)


    @classmethod
    def get_ordered_data(cls, order_by_param, sort_order):

        sort_columns = {
            'name': cls.name,
            'type': cls.type,
            'volatility': cls.volatility,
            'beta': cls.beta,
            'alpha': cls.alpha,
            'sharpe': cls.sharpe,
            'share_holder': cls.share_holder,
            'min_contrib': cls.min_contrib,
            'commission': cls.commission,
            'profit_m1': func.json_extract_path_text(cls.profit, 'm1').cast(db.Float),
            'profit_m3': func.json_extract_path_text(cls.profit, 'm3').cast(db.Float),
            'profit_ys': func.json_extract_path_text(cls.profit, 'ys').cast(db.Float),
            'profit_y1': func.json_extract_path_text(cls.profit, 'y1').cast(db.Float),
            'profit_y3': func.json_extract_path_text(cls.profit, 'y3').cast(db.Float),
            'profit_y5': func.json_extract_path_text(cls.profit, 'y5').cast(db.Float)
        }

        query = db.session.query(
            cls.id,
            cls.name.label('pif_name'),
            PifType.name.label('pif_type_name'),
            cls.nav,
            cls.volatility,
            cls.beta,
            cls.alpha,
            cls.sharpe,
            cls.share_holder,
            cls.min_contrib,
            cls.commission,
            func.json_extract_path_text(cls.profit, 'm1').label('m1'),
            func.json_extract_path_text(cls.profit, 'm3').label('m3'),
            func.json_extract_path_text(cls.profit, 'ys').label('ys'),
            func.json_extract_path_text(cls.profit, 'y1').label('y1'),
            func.json_extract_path_text(cls.profit, 'y3').label('y3'),
            func.json_extract_path_text(cls.profit, 'y5').label('y5')
        ).join(
            PifType, cls.type == PifType.id
        )

        if order_by_param in sort_columns:
            column = sort_columns[order_by_param]
            if sort_order == 'desc':
                query = query.order_by(column.desc())
            else:
                query = query.order_by(column)

        return query.all()

class PifType(db.Model):
    __tablename__ = 'pif_types'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))


@app.route('/heatmap')
def heatmap():
    data = Pif.get_ordered_data('name','asc')
    data_export(data)
    formatted_data = format_data_as_json(data)
    return jsonify(formatted_data)

@app.route('/piflist')
def piflist():
    sort_by_param = request.args.get('sort_by')
    sort_order = request.args.get('sort_order')
    if not sort_by_param:
        print("NOT sort_order")
        data = Pif.get_ordered_data('name', 'asc')
    else: data = Pif.get_ordered_data(sort_by_param, sort_order)
    formatted_data = format_data_as_json(data)
    return jsonify(formatted_data)


if __name__ == '__main__':
    app.run(debug=True)

