import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                
                <li>
                    <Link href="/">Let's Go Biotech</Link>
                </li>
                <li>
                    <Link href="/about-us">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;




