import {useState, useEffect} from 'react';
import React from 'react';
import styles from '@/styles/pif/piflist.module.css';
import Header from "@/components/pif/header";
function List() {
    const [data, setData] = useState([]);
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [underlinedColumn, setUnderlinedColumn] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:5000/piflist');
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

    const toggleSortOrder = (column) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortOrder('asc');
        }

        setUnderlinedColumn(column);
    };

    const sortedData = [...data].sort((a, b) => {
        const valueA = a[sortBy];
        const valueB = b[sortBy];

        if (valueA < valueB) {
            return sortOrder === 'asc' ? -1 : 1;
        }
        if (valueA > valueB) {
            return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
    });

    return (
        <div>
            <Header/>
            <div className={styles.container}>
            <div className={styles.container2}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th onClick={() => toggleSortOrder('name')}
                            className={underlinedColumn === 'name' ? styles.underline : ''}> Название
                        </th>
                        <th onClick={() => toggleSortOrder('type')}
                            className={underlinedColumn === 'type' ? styles.underline : ''}>Тип
                        </th>
                        <th onClick={() => toggleSortOrder('nav')}
                            className={underlinedColumn === 'nav' ? styles.underline : ''}>СЧА
                        </th>


                        <th onClick={() => toggleSortOrder('alpha')}
                            className={underlinedColumn === 'alpha' ? styles.underline : ''}>Альфа
                        </th>
                        <th onClick={() => toggleSortOrder('beta')}
                            className={underlinedColumn === 'beta' ? styles.underline : ''}>Бета
                        </th>
                        <th onClick={() => toggleSortOrder('sharpe')}
                            className={underlinedColumn === 'sharpe' ? styles.underline : ''}>Шарпа
                        </th>
                        <th onClick={() => toggleSortOrder('volatility')}
                            className={underlinedColumn === 'volatility' ? styles.underline : ''}>Волатильн.
                        </th>
                        <th onClick={() => toggleSortOrder('share_holder')}
                            className={underlinedColumn === 'share_holder' ? styles.underline : ''}>Пайщики
                        </th>
                        <th onClick={() => toggleSortOrder('min_contrib')}
                            className={underlinedColumn === 'min_contrib' ? styles.underline : ''}>Мин.взнос
                        </th>

                        <th onClick={() => toggleSortOrder('profit_m1')}
                            className={underlinedColumn === 'profit_m1' ? styles.underline : ''}>Доходн. за 1 мес.
                        </th>
                        <th onClick={() => toggleSortOrder('profit_m3')}
                            className={underlinedColumn === 'profit_m3' ? styles.underline : ''}>Доходн. за 3 мес.
                        </th>
                        <th onClick={() => toggleSortOrder('profit_ys')}
                            className={underlinedColumn === 'profit_ys' ? styles.underline : ''}>Доходн. c нач. года
                        </th>
                        <th onClick={() => toggleSortOrder('profit_y1')}
                            className={underlinedColumn === 'profit_y1' ? styles.underline : ''}>Доходн. за 1 год
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    {sortedData.map((record, index) => (
                        <tr key={index}>
                            <td>{record.name}</td>
                            <td>{record.type}</td>
                            <td>{record.nav}</td>
                            <td>{record.alpha}</td>
                            <td>{record.beta}</td>
                            <td>{record.sharpe}</td>
                            <td>{record.volatility}</td>
                            <td>{record.share_holder}</td>
                            <td>{record.min_contrib}</td>

                            <td>{record.profit_m1 !== null ? `${record.profit_m1}%` : '-'}</td>
                            <td>{record.profit_m3 !== null ? `${record.profit_m3}%` : '-'}</td>
                            <td>{record.profit_ys !== null ? `${record.profit_ys}%` : '-'}</td>
                            <td>{record.profit_y1 !== null ? `${record.profit_y1}%` : '-'}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}

export default List;
