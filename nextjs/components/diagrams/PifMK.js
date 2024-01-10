import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js/auto';
import {color} from "chart.js/helpers";
import {white} from "next/dist/lib/picocolors";

const PifMK = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }

            const ctx = chartRef.current;
            chartRef.current.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [
                        'Альфа-Капитал',
                        'Первая',
                        'РСХБ Управление Активами',
                        'Тинькофф Капитал',
                        'Райффайзен Капитал',
                        'БКС',
                        'ВИМ Инвестиции ',
                        'ПРОМСВЯЗЬ',
                        'ААА Управление Капиталом',
                        'ДОХОДЪ',
                        'Ингосстрах - Инвестиции',
                        'МКБ Инвестиции',
                        'ТКБ Инвестмент Партнерс',
                        'Система Капитал',
                    ],
                    datasets: [{
                        label: 'Кол-во ПИФ',
                        data: [
                            44, 38, 29, 28, 27, 23, 19, 16, 15, 14, 13, 12, 11, 10
                        ],
                        backgroundColor: [
                            'rgba(255, 49, 49, 1)',
                        ],
                        borderColor: [
                            'rgba(255, 49, 49, 1)',
                        ],
                        borderWidth: 0,
                    }],
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            align: 'center',
                            labels: {
                                boxWidth: 20,
                                color: '#868686'
                            },
                        },
                        title: {
                            display: true,
                            text: 'Топ - 15 по количеству ПИФ:',
                            color: '#868686',
                            padding: {
                                top: 30,
                                bottom: 20,
                            },
                            font: {
                                weight: 'bolder',
                                size: 14,
                            },
                            align: 'start',
                        }

                    },

                    scales: {
                        x: {
                            grid: {
                                display: false
                            },
                            max: 45,
                            ticks: {
                                stepSize:10,
                            }
                        },
                        y: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                font: {
                                    size: 9
                                }
                            },
                        }
                    }
                },
            });
        }
    }, []);

    return (
        <div style={{margin: '0 auto'}}>
            <canvas ref={chartRef} width="400" height="525"></canvas>
        </div>
    );
};

export default PifMK;
