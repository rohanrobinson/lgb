import { useRouter } from 'next/router';
import styles from '../styles/Learn.module.css';
import Navbar from '../components/Navbar';

export default function Learn() {
    const router = useRouter();
    const { topic } = router.query;


    return (
      <div className={styles.learningContainer}>
        <Navbar />
        Hey you! Glad you're interested in learning about {topic}

        <h3>Read the passage below on {topic}. It should take about 2 minutes to read.</h3>

        <h4>After you're done we'll give you a short quiz to test your knowledge.</h4>

        <p><i>Passage goes here</i></p>

        <button>I'm Ready for Quiz!</button>

      </div>
    );
  }