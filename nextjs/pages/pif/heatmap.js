import Head from 'next/head'
import {Inter} from 'next/font/google'
import Header from "@/components/pif/header";
import Heatmap from "@/components/pif/heatmap";
import styles from "@/styles/pif/blocks.module.css";
import ButtonGroup from "@/components/pif/ButtonGroup";
import React, {useEffect, useState} from 'react';
import Filter from "@/components/filters/Filter";
import RadioB from "@/components/filters/RadioButton";
import CheckB from "@/components/filters/CheckBox";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    const profitFKeys = ['за 1 месяц', 'за 3 месяца', 'с начала года', 'за 1 год', 'за 3 года', 'за 5 лет'];
    const riskFKeys = ['Бета', 'Волатильность'];
    const efficFKeys = ['Альфа', 'Шарпа'];
    const typeFKeys = ['ОПИФ', 'ЗПИФ', 'БПИФ', 'ИПИФ'];
    const timeFKeys = ['Краткосрочные', 'Среднесрочные', 'Долгосрочные'];
    const contribFKeys = ['до 1.000 ₽ ', '1.000₽ - 5.000 ₽', '5.000₽ - 50.000 ₽', '50.000 - 100.000 ₽', '100.000 - 500.000 ₽', '500.000 - 1.000.000 ₽', 'более 1.000.000 ₽'];
    const comFkeys = ['0 - 1%', '1 - 2%', '2 - 11%']
    const navFkeys = ['Низкая', 'Средняя', 'Высокая']
    const shareFkeys = ['до 10', '10 - 500', '500 - 5 500', 'более 5 500']


    const [profitFilter, setProfitFilter] = useState(profitFKeys[3]);
    const [riskFilter, setRiskFilter] = useState(riskFKeys[0]);
    const [efficFilter, setEfficFilter] = useState(efficFKeys[0]);

    const [timeFilter, setTimeFilter] = useState(timeFKeys);
    const [typeFilter, setTypeFilter] = useState(typeFKeys);
    const [contribFilter, setContribFilter] = useState(contribFKeys);
    const [comFilter, setComFilter] = useState(comFkeys);
    const [navFilter, setNavFilter] = useState(navFkeys);
    const [shareFilter, setShareFilter] = useState(shareFkeys);


    const [filters, setFilters] = useState({});
    const [clickedButton, setClickedButton] = useState(0);

    const firstButtons = [
        {label: 'Доходность'},
        {label: 'Риск'},
        {label: 'Эффективность'},
        {label: 'Популярность'},
        {label: 'Доступность'},
        {label: 'Мои критерии'},
        {label: 'Умный выбор'},
    ];

    const changeCheckFilter = (value, filter, setFilter) => {
        const currentIndex = filter.indexOf(value);
        const newFilter = [...filter];

        if (currentIndex === -1) newFilter.push(value);
        else newFilter.splice(currentIndex, 1);
        setFilter(newFilter);
    }


    const changeFilters = () => {
        const newFilters = {
            filter1: profitFilter,
            filter2: timeFilter,
            filter3: typeFilter,
            filter4: contribFilter,
            filter5: comFilter,
            filter6: navFilter,
            filter7: shareFilter,
            filter8: riskFilter,
            filter9: efficFilter,
        }

        console.log(newFilters)
        setFilters(newFilters);
    }


    useEffect(() => {
        console.log('useEffect')
        changeFilters();
    }, [profitFilter, timeFilter, typeFilter, contribFilter, comFilter, navFilter, shareFilter, riskFilter, efficFilter]);

    useEffect(() => {
        console.log('useEffect')
        setProfitFilter(profitFKeys[3]);
        setTimeFilter(timeFKeys);
        setTypeFilter(typeFKeys);
        setContribFilter(contribFKeys);
        setComFilter(comFkeys);
        setNavFilter(navFkeys);
        setShareFilter(shareFkeys);
    }, [clickedButton]);


    return (
        <>
            <Head>
                <title>Pif Space</title>
                <meta name="description" content="Pif Space"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <div className={styles.container}>
                <div className={styles.componentA}>
                    <h2 className={styles.titleA}>Тепловая карта</h2>
                    <ButtonGroup buttons={firstButtons} value={clickedButton} setValue={setClickedButton}/>
                    <div className={styles.component3}>
                        <Heatmap button={clickedButton} filters={filters}></Heatmap>
                    </div>
                </div>
                <div className={styles.componentB}>

                    <h2 className={styles.titleParam}>Фильтры</h2>

                    {clickedButton < 3 && (<div>
                            <div className={styles.titleFilter}>Уникальные параметры:</div>
                        {clickedButton === 0 && (<div>
                                <Filter title='Доходность' open={true}>
                                    {profitFKeys.map((key) => (
                                        <RadioB label={key} checked={profitFilter === key} onChange={(e) => setProfitFilter(e.target.value)} value={key}/>
                                    ))}
                                </Filter>
                        </div>
                        )}

                            {clickedButton === 1 && (<div>
                                    <Filter title='Риск' open={true}>
                                        {riskFKeys.map((key) => (
                                            <RadioB label={key} checked={riskFilter === key} onChange={(e) => setRiskFilter(e.target.value)} value={key}/>
                                        ))}
                                    </Filter>
                                </div>
                            )}

                            {clickedButton === 2 && (<div>
                                    <Filter title='Эффективность' open={true}>
                                        {efficFKeys.map((key) => (
                                            <RadioB label={key} checked={efficFilter === key} onChange={(e) => setEfficFilter(e.target.value)} value={key}/>
                                        ))}
                                    </Filter>
                                </div>
                            )}
                        </div>
                    )}

                    {clickedButton < 5 && (
                        <div>
                            <div className={styles.titleFilter}>Общие параметры:</div>
                            <Filter title='Тип инструмента' open={false}>
                                {typeFKeys.map((key) => (
                                    <CheckB label={key} checked={typeFilter.includes(key)} onChange={(e) => changeCheckFilter(e.target.value, typeFilter, setTypeFilter)} value={key}/>
                                ))}
                            </Filter>
                            <Filter title='Срок инвестиций' open={false}>
                                {timeFKeys.map((key) => (
                                    <CheckB label={key} checked={timeFilter.includes(key)} onChange={(e) => changeCheckFilter(e.target.value, timeFilter, setTimeFilter)} value={key}/>
                                ))}
                            </Filter>
                            <Filter title='Комиссия за управление' open={false}>
                                {comFkeys.map((key) => (
                                    <CheckB label={key} checked={comFilter.includes(key)} onChange={(e) => changeCheckFilter(e.target.value, comFilter, setComFilter)} value={key}/>
                                ))}
                            </Filter>
                            <Filter title='СЧА' open={false}>
                                {navFkeys.map((key) => (
                                    <CheckB label={key} checked={navFilter.includes(key)} onChange={(e) => changeCheckFilter(e.target.value, navFilter, setNavFilter)} value={key}/>
                                ))}
                            </Filter>
                            <Filter title='Количество владельцев' open={false}>
                                {shareFkeys.map((key) => (
                                    <CheckB label={key} checked={shareFilter.includes(key)} onChange={(e) => changeCheckFilter(e.target.value, shareFilter, setShareFilter)} value={key}/>
                                ))}
                            </Filter>
                            <Filter title='Минимальный взнос' open={false}>
                                {contribFKeys.map((key) => (
                                    <CheckB label={key} checked={contribFilter.includes(key)} onChange={(e) => changeCheckFilter(e.target.value, contribFilter, setContribFilter)} value={key}/>
                                ))}
                            </Filter>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
