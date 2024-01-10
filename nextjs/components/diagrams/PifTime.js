import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PifTime = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy(); // Уничтожение предыдущего графика
            }

            const ctx = chartRef.current;
            chartRef.current.chart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: [
                        'Краткосрочный',
                        'Среднесрочный',
                        'Долгосрочный',
                    ],
                    datasets: [{
                        labels: 'Срок инвестиций в ПИФ',
                        data: [284, 170, 114],
                        backgroundColor: [
                            'rgba(52, 52, 52, 1)',
                            'rgba(255, 49, 49, 1)',
                            'rgba(255, 87, 87, 1)',
                        ],
                        borderColor: [
                            'rgba(52, 52, 52, 1)',
                            'rgba(255, 49, 49, 1)',
                            'rgba(255, 87, 87, 1)',
                        ],
                        borderWidth: 0,
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            align: 'start',
                            labels: {
                                boxWidth: 20,
                            },
                        },
                        tooltip: {
                            bodyFontStyle: 'normal',
                            callbacks: {
                                label: function(context) {
                                    let label = context.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    const value = context.parsed;
                                    if (typeof value !== 'undefined') {
                                        label += Math.round(value * 100 / 568)  + '%';
                                    }
                                    return label;
                                }
                            }
                        }
                    },
                },
            });
        }
    }, []);

    return (
        <div style={{ width: '200px', height: '175px' }}>
            <canvas ref={chartRef} width="200" height="175"></canvas>
        </div>
    );
};

export default PifTime;
