// RadioButton.js
import React from 'react';
import styles from '@/styles/pif/filterButton.module.css';

const RadioB = ({ label, checked, onChange, value }) => {
    return (
        <div className={styles.radioButton}>
            <input
                type="radio"
                checked={checked}
                onChange={onChange}
                value={value}
            />
            <label>{label}</label>
        </div>
    );
};

export default RadioB;
