// CheckBox.js
import React from 'react';
import styles from '@/styles/pif/filterButton.module.css';
const CheckB = ({ label, checked, onChange, value }) => {
    return (
        <div className={styles.checkbox}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                value={value}
            />
            <label>{label}</label>
        </div>
    );
};

export default CheckB;
