import Navbar from '../components/Navbar';
import styles from '../styles/AboutUs.module.css';

export default function AboutUs() {
  return (
    <div className={styles.aboutUsMessage}>
      <Navbar />
      <p>
        <b>Our Goal is Simple:</b> <br />
        Help you discover the most interesting companies pushing the boundaries of biology, medicine, and health technology.
      </p>
      <br />
      Created by{' '}
      <a href="https://rohanrobinson.io" target="_blank" rel="noopener noreferrer">
        Rohan Robinson
      </a>
    </div>
  );
}
