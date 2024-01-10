import React, {useState, useEffect} from 'react';
import styles from '@/styles/pif/heatmap.module.css';

function HeatMap({button, filters}) {
    const [data, setData] = useState([]);
    const scaleProfit = Array.from([50, 10, 1, 0, -1, -10, -50]);
    const scalePopular = Array.from([10000, 1000, 500, 100, 10, 1, 0]);
    const scaleAvalible = Array.from([0, 1000, 5000, 50000, 100000, 500000, 1000000]);

    const scaleA = Array.from([3, 1, 0, -1, -3, -7, -10]);
    const scaleS = Array.from([0.5, 0.3, 0.1, 0, -0.1, -0.3, -0.5]);
    const scaleV = Array.from([-1,  0.5, 1, 2, 4, 8, 10]);


    const profitDict = {
        'за 1 месяц': 'profit_m1',
        'за 3 месяца': 'profit_m3',
        'с начала года': 'profit_ys',
        'за 1 год': 'profit_y1',
        'за 3 года': 'profit_y3',
        'за 5 лет': 'profit_y5'
    };

    const riskDict = {
        'Бета': 'beta',
        'Волатильность': 'volatility',
    };

    const efficDict = {
        'Альфа': 'alpha',
        'Шарпа': 'sharpe',
    };


    const typeDict = {
        'Открытый': "ОПИФ",
        'Закрытый': "ЗПИФ",
        'Интервальный': "ИПИФ",
        'Биржевой': "БПИФ",
    }

    const contribFKeys = ['до 1.000 ₽ ', '1.000₽ - 5.000 ₽', '5.000₽ - 50.000 ₽', '50.000 - 100.000 ₽', '100.000 - 500.000 ₽', '500.000 - 1.000.000 ₽', 'более 1.000.000 ₽'];
    const navFkeys = ['Низкая', 'Средняя', 'Высокая']
    const shareFkeys = ['до 10', '10 - 500', '500 - 5 500', 'более 5 500']
    const timeFKeys = ['Краткосрочные', 'Среднесрочные', 'Долгосрочные'];
    const comFkeys = ['0 - 1%', '1 - 2%', '2 - 11%']

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:5000/heatmap');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    const getColor = (value, scale) => {
        if (value >= scale[0]) {
            return {backgroundColor: '#31CD52'};
        } else if (value >= scale[1]) {
            return {backgroundColor: '#2E9D4E'};
        } else if (value >= scale[2]) {
            return {backgroundColor: '#36724C'};
        } else if (value >= scale[3]) {
            return {backgroundColor: '#414551'};
        } else if (value >= scale[4]) {
            return {backgroundColor: '#8A454A'};
        } else if (value >= scale[5]) {
            return {backgroundColor: '#BD3F42'};
        } else if (value >= scale[6]) {
            return {backgroundColor: '#F63536'};
        } else {
            return {backgroundColor: '#F94243'};
        }
    };


    const getColorBeta = (value) => {

        if (Math.abs(value) >= 0 && Math.abs(value) < 0.05) {
            return {backgroundColor: '#31CD52'};
        }

        else if (Math.abs(value) >= 0.05 && Math.abs(value) < 0.25) {
            return {backgroundColor: '#2E9D4E'};
        }
        else if (Math.abs(value) >= 0.25 && Math.abs(value) < 0.5) {
            return {backgroundColor: '#36724C'};
        }

        else if (Math.abs(value) >= 0.5 && Math.abs(value) < 1) {
            return {backgroundColor: '#414551'};
        }

        else if (Math.abs(value) >= 1 && Math.abs(value) < 1.05) {
            return {backgroundColor: '#8A454A'};
        }

        else if (Math.abs(value) >= 1.05 && Math.abs(value) < 1.1) {
            return {backgroundColor: '#BD3F42'};
        }
        else {
            return {backgroundColor: '#F63536'};
        }

    }


    const getColor2 = (value, scale) => {
        if (value <= scale[0]) {
            return {backgroundColor: '#31CD52'};
        } else if (value <= scale[1]) {
            return {backgroundColor: '#2E9D4E'};
        } else if (value <= scale[2]) {
            return {backgroundColor: '#36724C'};
        } else if (value <= scale[3]) {
            return {backgroundColor: '#414551'};
        } else if (value <= scale[4]) {
            return {backgroundColor: '#8A454A'};
        } else if (value <= scale[5]) {
            return {backgroundColor: '#BD3F42'};
        } else if (value <= scale[6]) {
            return {backgroundColor: '#F63536'};
        } else {
            return {backgroundColor: '#F94243'};
        }
    };

    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const getNavBool = (value) => {
        if (filters.filter6.length === navFkeys.length) return true;
        else {
            let navStr = ''
            if (value <= 260) navStr = navFkeys[0]
            else if (value > 260 && value <= 1690) navStr = navFkeys[1]
            else if (value > 1690) navStr = navFkeys[2]

            return filters.filter6.includes(navStr)
        }
    }

    const getContribBool = (value) => {
        if (filters.filter4.length === contribFKeys.length) return true;
        else {

            let contribStr = ''
            if (value <= 1000) contribStr = contribFKeys[0];
            else if (value <= 5000) contribStr = contribFKeys[1];
            else if (value <= 50000) contribStr = contribFKeys[2];
            else if (value <= 100000) contribStr = contribFKeys[3];
            else if (value <= 500000) contribStr = contribFKeys[4];
            else if (value <= 1000000) contribStr = contribFKeys[5];
            else if (value > 1000000) contribStr = contribFKeys[6];
            return filters.filter4.includes(contribStr)
        }
    }

    const getShareBool = (value) => {
        if (filters.filter7.length === shareFkeys.length) return true;
        else {
            let shareStr = ''
            if (value <= 10) shareStr = shareFkeys[0];
            else if (value <= 500) shareStr = shareFkeys[1];
            else if (value <= 5500) shareStr = shareFkeys[2];
            else if (value > 5500) shareStr = shareFkeys[3];
            return filters.filter7.includes(shareStr)
        }
    }

    const getTimeBool = (m1, m3, ys, y1, y3, y5) => {
        if (filters.filter2.length === timeFKeys.length) return true;
        else {
            let timeStr = ''
            if (y5 != null) timeStr = timeFKeys[2];
            else if (y1 !== null || y3 !== null) timeStr = timeFKeys[1];
            else if (ys !== null || m3 !== null || m1 !== null) timeStr = timeFKeys[0];

            return filters.filter2.includes(timeStr)
        }
    }

    const getComBool = (value) => {
        if (filters.filter5.length === comFkeys.length) return true;
        else {
            let comStr = ''
            if (value <= 1) comStr = comFkeys[0];
            else if (value <= 2) comStr = comFkeys[1];
            else if (value <= 11) comStr = comFkeys[2];

            return filters.filter5.includes(comStr)
        }
    }


    return (

        <div>
            {data.length > 0 && (
                <div className={styles.container}>

                    {button === 0 && <h2 className={styles.titleParam}>Доходность</h2>}
                    {button === 1 && <h2 className={styles.titleParam}>Риск</h2>}
                    {button === 2 && <h2 className={styles.titleParam}>Эффективность</h2>}
                    {button === 3 && <h2 className={styles.titleParam}>Популярность</h2>}
                    {button === 4 && <h2 className={styles.titleParam}>Доступность</h2>}
                    {button === 5 && <h2 className={styles.titleParam}>Мои критерии</h2>}
                    {button === 6 && <h2 className={styles.titleParam}>Умный выбор</h2>}

                    <div>
                        {button === 0 && (<div className={styles.rectangleMain}>Доходность: {filters.filter1}</div>)}
                        {button === 1 && (<div className={styles.rectangleMain}>Риск: {filters.filter8} </div>)}
                        {button === 2 && (
                            <div className={styles.rectangleMain}>Эффективность: {filters.filter9} </div>)}
                        {button === 3 && (
                            <div className={styles.rectangleMain}>Популярность - Количество пайщиков</div>)}
                        {button === 4 && (<div className={styles.rectangleMain}>Доступность - Минимальный взнос </div>)}
                        {button === 5 && (
                            <div className={styles.rectangleMain}>Мои критерии - Персональная подборка </div>)}
                        {button === 6 && (<div className={styles.rectangleMain}>Умный выбор - Оптимальные решения </div>)}


                        {button < 5 && Array.isArray(filters.filter3) && filters.filter3.length < 4 && (
                            <div className={styles.rectangle}>
                                {filters.filter3.length > 0
                                    ? `Тип: ${filters.filter3.join('; ')}`
                                    : 'Тип: не выбран'}
                            </div>
                        )}

                        {button < 5 && Array.isArray(filters.filter2) && filters.filter2.length < 3 && (
                            <div className={styles.rectangle}>
                                {filters.filter2.length > 0
                                    ? `Срок: ${filters.filter2.join('; ')}`
                                    : 'Срок: не выбран'}
                            </div>
                        )}


                        {button < 5 && Array.isArray(filters.filter5) && filters.filter5.length < 3 && (
                            <div className={styles.rectangle}>
                                {filters.filter5.length > 0
                                    ? `Комиссия УК: ${filters.filter5.join('; ')}`
                                    : 'Комиссия УК: не выбрана'}
                            </div>
                        )}

                        {button < 5 && Array.isArray(filters.filter6) && filters.filter6.length < 3 && (
                            <div className={styles.rectangle}>
                                {filters.filter6.length > 0
                                    ? `СЧА: ${filters.filter6.join('; ')}`
                                    : 'СЧА: не выбрана'}
                            </div>
                        )}

                        {button < 5 && Array.isArray(filters.filter7) && filters.filter7.length < 4 && (
                            <div className={styles.rectangle}>
                                {filters.filter7.length > 0
                                    ? `Кол-во владельцев: ${filters.filter7.join('; ')}`
                                    : 'Кол-во владельцев: не выбрано'}
                            </div>
                        )}

                        {button < 5 && Array.isArray(filters.filter4) && filters.filter4.length < 7 && (
                            <div className={styles.rectangle}>
                                {filters.filter4.length > 0
                                    ? `Мин.взнос: ${filters.filter4.join('; ')}`
                                    : 'Мин.взнос: не выбран'}
                            </div>
                        )}

                    </div>


                    {button === 0 && (
                        <div className={styles.squareContainer}>
                            {data.map((item, index) => {
                                let selectedField = profitDict[filters.filter1];

                                if (item[selectedField] != null &&
                                    (filters.filter3.includes(typeDict[item.type])) &&
                                    getNavBool(item.nav) && getContribBool(item.min_contrib)
                                    && getShareBool(item.share_holder) &&
                                    getTimeBool(item.profit_m1, item.profit_m3, item.profit_ys, item.profit_y1, item.profit_y3, item.profit_y5)
                                    && getComBool(item.commission)
                                )

                                    return (
                                        <div key={index} className={`${styles.square}`}
                                             style={getColor(parseFloat(item[selectedField]), scaleProfit)}>
                                            <p>{item.name}</p>
                                            <p>{item[selectedField]}</p>
                                        </div>
                                    );
                            })}
                        </div>
                    )}

                    {button === 1 && (
                        <div className={styles.squareContainer}>
                            {data.map((item, index) => {
                                let selectedField = riskDict[filters.filter8];

                                if (item[selectedField] != null &&
                                    (filters.filter3.includes(typeDict[item.type])) &&
                                    getNavBool(item.nav) && getContribBool(item.min_contrib)
                                    && getShareBool(item.share_holder) &&
                                    getTimeBool(item.profit_m1, item.profit_m3, item.profit_ys, item.profit_y1, item.profit_y3, item.profit_y5)
                                    && getComBool(item.commission)
                                )

                                    return (
                                        <div key={index} className={`${styles.square}`}

                                             style={riskDict[filters.filter8] === "beta" ? getColorBeta(item[selectedField]) :
                                                 getColor2(parseFloat(item[selectedField]), scaleV)}>
                                            <p>{item.name}</p>
                                            <p>{item[selectedField]}</p>
                                        </div>
                                    );

                            })}
                        </div>
                    )}


                    {button === 2 && (
                        <div className={styles.squareContainer}>
                            {data.map((item, index) => {
                                let selectedField = efficDict[filters.filter9];

                                if (item[selectedField] != null &&
                                    (filters.filter3.includes(typeDict[item.type])) &&
                                    getNavBool(item.nav) && getContribBool(item.min_contrib)
                                    && getShareBool(item.share_holder) &&
                                    getTimeBool(item.profit_m1, item.profit_m3, item.profit_ys, item.profit_y1, item.profit_y3, item.profit_y5)
                                    && getComBool(item.commission)
                                )

                                    return (
                                        <div key={index} className={`${styles.square}`}
                                             style={getColor(parseFloat(item[selectedField]), efficDict[filters.filter9] === "alpha" ? scaleA : scaleS)}>
                                            <p>{item.name}</p>
                                            <p>{item[selectedField]}</p>
                                        </div>
                                    );

                            })}
                        </div>
                    )}


                    {button === 3 && (
                        <div className={styles.squareContainer}>
                            {data.map((item, index) => {

                                if (item.share_holder != null &&
                                    (filters.filter3.includes(typeDict[item.type])) &&
                                    getNavBool(item.nav) && getContribBool(item.min_contrib)
                                    && getShareBool(item.share_holder) &&
                                    getTimeBool(item.profit_m1, item.profit_m3, item.profit_ys, item.profit_y1, item.profit_y3, item.profit_y5)
                                    && getComBool(item.commission)
                                )

                                    return (
                                        <div key={index} className={`${styles.square}`}
                                             style={getColor(parseFloat(item.share_holder), scalePopular)}>
                                            <p>{item.name}</p>
                                            <p>{item.share_holder}</p>
                                        </div>
                                    );
                            })}
                        </div>
                    )}

                    {button === 4 && (
                        <div className={styles.squareContainer}>
                            {data.map((item, index) => {

                                if (item.min_contrib != null &&
                                    (filters.filter3.includes(typeDict[item.type])) &&
                                    getNavBool(item.nav) && getContribBool(item.min_contrib)
                                    && getShareBool(item.share_holder) &&
                                    getTimeBool(item.profit_m1, item.profit_m3, item.profit_ys, item.profit_y1, item.profit_y3, item.profit_y5)
                                    && getComBool(item.commission)
                                )

                                    return (
                                        <div key={index} className={`${styles.square}`}
                                             style={getColor2(parseFloat(item.min_contrib), scaleAvalible)}>
                                            <p>{item.name}</p>
                                            <p>{formatNumberWithCommas(item.min_contrib)} ₽</p>
                                        </div>
                                    );
                            })}
                        </div>
                    )}


                </div>
            )}
        </div>
    );

}

export default HeatMap;
