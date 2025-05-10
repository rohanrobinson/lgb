import { useRouter } from 'next/router';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { questions, answerChoices, correctAnswers } from '../data/quiz-data';
import passages from '../data/passages';


const Learn = () => {
    const router = useRouter();
    const { topic } = router.query;
    const [quizOn, toggleQuiz] = useState(false);

    
    const currentPassage = passages[topic] || "No passage available for this topic";


    const styles = {
      learningContainer: {
        textAlign: 'center',
        alignItems: 'center'
      },

      Button: {
        padding: '12px 24px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        fontFamily: "'Courier New', Courier, monospace",
        backgroundColor: 'darkmagenta',
        color: 'white',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          backgroundColor: '#45a049',
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)'
        },
        '&:active': {
          transform: 'translateY(0)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }
      }
    };

    function QuizExperience() {
      return(
          <div>
              <h1>{topic} Quiz</h1>
              <p>
                Question 1 
              </p>
              <button style={styles.Button} onClick={() => toggleQuiz(!quizOn)}>Back to the Passage</button>
          </div>
      )
  }

    return (
      <div style={styles.learningContainer}>
          <Navbar />
          {!quizOn ? (
        <>
          <h1>Hope you enjoy this passage on {topic}!</h1>
          <h4>It should take about 2 minutes!</h4>

          <p style={styles.passage}>
                {currentPassage}
          </p>
          <button style={styles.Button} onClick={() => toggleQuiz(!quizOn)}>
            I'm Ready for the Quiz!
          </button>
        </>
      ) : (
        <QuizExperience />
      )}
      <br />
      <br />
      <br />
      <button style={styles.Button}
      
      onClick={() => {
        router.push({
          pathname: '/',
        });
      }} 
      >
        Interested in a Different Topic?
      </button>
    </div>)
  }

export default Learn;