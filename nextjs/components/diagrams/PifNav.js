
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PifNav = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy(); // Уничтожение предыдущего графика
            }

            const ctx = chartRef.current;
            chartRef.current.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['СЧА'],
                    datasets: [
                        {
                            label:  'Менее 250 млн ₽',
                            data: [54],
                            backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        },
                        {
                            label:  'От 250 млн ₽ до 1,5 млрд ₽',
                            data: [27],
                            backgroundColor: 'rgba(255, 49, 49, 0.8)',
                        },
                        {
                            label: 'Более 1,5 млрд ₽',
                            data: [19],
                            backgroundColor: 'rgba(255, 87, 87, 0.8)',
                        },
                    ],
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
                                boxWidth: 30,
                            },
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    const value = context.dataset.data;
                                    if (typeof value !== 'undefined') {
                                        label += value  + '%';
                                    }
                                    return label;
                                }
                            }
                        },
                    },
                    scales: {
                        x: {
                            stacked: true,
                            grid: {
                                display: false
                            },
                        },
                        y: {
                            stacked: true,
                            ticks: {
                                callback: function (value) {
                                    return value + '%';
                                },
                            },
                            grid: {
                                display: false
                            },
                        },
                    },
                },
            });
        }
    }, []);
    return (
        <div style={{ width: '200px', height: '160px' }}>
            <canvas ref={chartRef} width="200" height="160"></canvas>
        </div>
    );
};

export default PifNav;

