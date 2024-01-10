import React from 'react';
import { useState } from 'react';
import styles from '@/styles/pif/filterButton.module.css';

const Filter = ({ children, title, open }) => {
    const [isOpen, setIsOpen] = useState(open);

    const toggleFilter = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.filterContainer}>
            <div className={`${styles.titleContainer} ${isOpen ? styles.open : ''}`} onClick={toggleFilter}>
                <div className={styles.titleParam}>{title}</div>
                <div className={`${styles.icon} ${isOpen ? 'open' : ''}`}>
                    <img src="/icon_check.png" alt="Icon" />
                </div>
            </div>
            {isOpen && <div className={styles.content}>{children}</div>}
        </div>
    );
};

export default Filter;
