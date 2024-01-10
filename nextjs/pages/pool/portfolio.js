import Head from 'next/head';
import Header from '@/components/pool/header';
import styles from '@/styles/pif/blocks.module.css';
import React, {useState} from "react";
import UserDistrib from "@/components/diagrams/UserDistrib";
import PoolBoard from "@/components/pool/PoolBoard";

const Portfolio = () => {

    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Header/>

            <div className={styles.container}>
                <UserDistrib></UserDistrib>
            </div>

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

export default Portfolio;