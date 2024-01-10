import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/pool/header.module.css';

const Header = () => {
    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className={styles.leftContent}>
                <img src="/icon-logo-pool.png" alt="Icon" className={styles.icon} />
                <h1 className={styles.title}>Fond Space</h1>
            </div>
            <div className={styles.rightContent}>
                <Link href="/pool/showcase" passHref>
                    <div className={`${styles.button} ${router.pathname === '/pool/showcase' ? styles.active : ''}`}>
                        Витрина
                    </div>
                </Link>
                <Link href="/pool/portfolio" passHref>
                    <div className={`${styles.button} ${router.pathname === '/pool/portfolio' ? styles.active : ''}`}>
                        Портфель
                    </div>
                </Link>
                <Link href="/pool/profile" passHref>
                    <div className={`${styles.button} ${router.pathname === '/pool/profile' ? styles.active : ''}`}>
                        Профиль
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
