import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PifCom = () => {
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
                    labels: ['Комиссия'],
                    datasets: [
                        {
                            label: '0 - 1% от СЧА',
                            data: [53],
                            backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        },
                        {
                            label: '1 - 2% от СЧА',
                            data: [22],
                            backgroundColor: 'rgba(255, 49, 49, 0.8)',
                        },
                        {
                            label: '2 - 11% от СЧА',
                            data: [25],
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
                                boxWidth: 20,
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
                                display: false,
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
                                display: false,
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

export default PifCom;
