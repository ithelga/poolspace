// Компонент ButtonGroup

import styles from '@/styles/pif/buttonGroup.module.css';

const ButtonGroup = ({ buttons, value, setValue }) => {

    return (
        <div className={styles.buttonGroup}>
            {buttons.map((button, index) => (
                <button
                    key={index}
                    className={`${styles.button} ${value === index ? styles.clicked : ''}`}
                    onClick={() => setValue(index)}
                >
                    {button.label}
                </button>
            ))}
        </div>
    );
};

export default ButtonGroup;
