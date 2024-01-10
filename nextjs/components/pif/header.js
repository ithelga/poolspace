import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/pif/header.module.css';

const Header = () => {
    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className={styles.leftContent}>
                <img src="/icon-logo-pif.png" alt="Icon" className={styles.icon} />
                <h1 className={styles.title}>Pif Space</h1>
            </div>
            <div className={styles.rightContent}>
                <Link href="/pif/review" passHref>
                    <div className={`${styles.button} ${router.pathname === '/pif/review' ? styles.active : ''}`}>
                        Обзор
                    </div>
                </Link>
                <Link href="/pif/heatmap" passHref>
                    <div className={`${styles.button} ${router.pathname === '/pif/heatmap' ? styles.active : ''}`}>
                        Скринер
                    </div>
                </Link>
                <Link href="/pif/list" passHref>
                    <div className={`${styles.button} ${router.pathname === '/pif/list' ? styles.active : ''}`}>
                        Фонды
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
