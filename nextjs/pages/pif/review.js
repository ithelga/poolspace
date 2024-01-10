import Head from 'next/head';
import Header from '@/components/pif/header';
import styles from '@/styles/pif/blocks.module.css';
import ButtonGroup from '@/components/pif/ButtonGroup';
import PifCategory from 'components/diagrams/PifCategory';
import PifMK from "@/components/diagrams/PifMK";
import PifType from "@/components/diagrams/PifType";
import PifNav from "@/components/diagrams/PifNav";
import PifCom from "@/components/diagrams/PifCom";
import PifTime from "@/components/diagrams/PifTime";
import PifPrice from "@/components/diagrams/PifPrice";
import React, {useState} from "react";

const Home = () => {
    const [clickedButton, setClickedButton] = useState(0);
    const firstButtons = [{label: 'Общее'}];

    return (
        <>
            <Head>
                <title>Pif Space</title>
            </Head>

            <Header/>

            <div className={styles.container}>
                <div className={styles.componentA}>
                    <h2 className={styles.titleA}>Показатели рынка ПИФ</h2>
                    <ButtonGroup buttons={firstButtons} value={clickedButton} setValue={setClickedButton}/>
                    <div className={styles.component2}>
                        <div className={styles.componentA1}>
                            <h2 className={styles.titleParam}>Статистика</h2>

                        <div className={styles.squareContainer}>
                            <div className={styles.square}>
                                <div className={styles.bigNumber}>568</div>
                                <div className={styles.smallText}>шт.</div>
                                <div className={styles.smallText}>количество ПИФ</div>
                            </div>
                            <div className={styles.square}>
                                <div className={styles.bigNumber}>35,6 </div>
                                <div className={styles.smallText}>млрд шт.</div>
                                <div className={styles.smallText}>количество паев</div>
                            </div>
                            <div className={styles.square}>
                                <div className={styles.bigNumber2}>31 348 ₽</div>
                                <div className={styles.smallText}>средняя</div>
                                <div className={styles.smallText}>стоимость пая</div>
                            </div>
                            <div className={styles.square}>
                                <div className={styles.bigNumber2}>7 563</div>
                                <div className={styles.smallText}>среднее количество</div>
                                <div className={styles.smallText}> владельцев паев</div>
                            </div>
                        </div>
                        </div>

                        <div className={styles.componentA2}>

                            <div className={styles.contDiagram}>
                                <h2 className={styles.titleParam}>Тип фонда</h2>
                                <div className={`${styles.componentDiagram} ${styles.diagramGroup}`}>
                                    <PifType></PifType>
                                </div>
                            </div>

                            <div className={styles.contDiagram}>
                                <h2 className={styles.titleParam}>Категория фонда</h2>
                                <div className={`${styles.componentDiagram} ${styles.diagramGroup}`}>
                                    <PifCategory></PifCategory>
                                </div>
                            </div>

                            <div className={styles.contDiagram}>
                                <h2 className={styles.titleParam}>Срок инвестиций</h2>
                                <div className={`${styles.componentDiagram} ${styles.diagramGroup}`}>
                                    <PifTime></PifTime>
                                </div>
                            </div>

                            <div className={styles.contDiagram}>
                                <h2 className={styles.titleParam}>Расчётная стоимость пая</h2>
                                <div className={`${styles.componentDiagram} ${styles.diagramGroup}`}>
                                    <PifPrice></PifPrice>
                                </div>
                            </div>

                            <div className={styles.contDiagram}>
                                <h2 className={styles.titleParam}>Стоимость чистых активов</h2>
                                <div className={`${styles.componentDiagram} ${styles.diagramGroup}`}>
                                    <PifNav></PifNav>
                                </div>
                            </div>

                            <div className={styles.contDiagram}>
                                <h2 className={styles.titleParam}>Комиссия УК</h2>
                                <div className={`${styles.componentDiagram} ${styles.diagramGroup}`}>
                                    <PifCom></PifCom>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.componentB}>
                    <h2 className={styles.titleParam}>Управляющие компании</h2>
                    <PifMK></PifMK>
                </div>
            </div>
        </>
    );
};

export default Home;