

import styles from '@/styles/header.module.css';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.leftContent}>
                <img src="/icon-logo-main.png" alt="Icon" className={styles.icon} />
                <h1 className={styles.title}>Pool Space</h1>
            </div>
        </header>
    );
};

export default Header;
