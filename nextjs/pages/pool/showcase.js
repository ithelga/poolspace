import Head from 'next/head';
import Header from '@/components/pool/header';
import React, { useState, useEffect } from "react";
import styles from 'styles/pool/FondContainer.module.css';
import PoolDistrib from "@/components/diagrams/PoolDistrib";
import PoolBoard from "@/components/pool/PoolBoard";

const FondContainer = () => {
    const [fondsData, setFondsData] = useState([]);
    const profits = ['30%', '-', '40%', '20%', '50%', '15%']
    const particips = ['700', '100 000', '100', '50 000', '300', '100']

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8080/api/fonds/all');
                if (response.ok) {
                    const data = await response.json();
                    setFondsData(data);
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>Shop</title>
            </Head>

            <Header/>

           <FondDistrib></FondDistrib>
            <PoolDistrib></PoolDistrib>

            <div className={styles.flexContainer}>
                {fondsData.map((fond) => (
                    <FondBoard
                        key={fond.id}
                        fond={fond}
                        particips={particips}
                        profits={profits}
                    />
                ))}
            </div>

            <div className={styles.flexContainer}>
                {fondsData.map((fond) => (
                    <PoolBoard
                        key={fond.id}
                        fond={fond}
                        particips={particips}
                        profits={profits}
                    />
                ))}
            </div>

        </>
    );
};

export default FondContainer;
