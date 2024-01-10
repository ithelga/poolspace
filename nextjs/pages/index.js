import Head from 'next/head';
import Header from '@/components/header';
import styles from '@/styles/mainContainer.module.css';
import React from "react";
import Link from 'next/link';
const Home = () => {

    return (
        <>
            <Head>
                <title>Pif Space</title>
            </Head>

            <Header/>



                <div className={styles.container}>
                    <div className={styles.centerTitle}>
                        Механизм коллективного инвестирования
                    </div>
                    <div className={styles.centerText}>
                         способ расширения инвестиционных стратегий частных инвесторов
                    </div>
                    <div className={styles.squaresContainer}>
                        <div className={styles.square}>
                            <Link href="/pool/showcase">
                                <div className={styles.squareDiv}>
                                    <img src="/icon-big-pif.png" alt="Image 2" className={styles.image} />
                                    <p style={{ color: '#9378FF' }}>FOND SPACE</p>
                                    <br />
                                    <p>Частные <br />инвестиционные <br />фонды</p>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.square}>
                            <Link href="/pif/review">
                                <div className={styles.squareDiv}>
                                    <img src="/icon-big-pool.png" alt="Image 1" className={styles.image} />
                                    <p style={{ color: '#FF3131' }}>PIF SPACE</p>
                                    <br />
                                    <p>Паевые <br />инвестиционные <br />фонды</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default Home;