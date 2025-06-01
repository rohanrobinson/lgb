import { useRouter } from 'next/router';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { questions, answerChoices, correctAnswers } from '../data/quiz-data';
import passages from '../data/passages';
import { morePassages } from '../data/passages';


const Learn = () => {
    const router = useRouter();
    const { topic } = router.query;
    const [passageType, setPassageType] = useState("original");
    const [currentPassage, setPassage] = useState(passages[topic] || "No passage available for this topic");

    const styles = {
      learningContainer: {
        textAlign: 'center',
        alignItems: 'center'
      },
      StartButton: {
        fontFamily: "'Courier New', Courier, monospace",
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
        },
        backgroundColor: 'darkgreen',
        padding: '12px 24px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
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
      },

      passage: {
        padding: '20px',
        margin: '20px auto',
        maxWidth: '800px',
        border: '4px solid darkmagenta',
        borderRadius: '10px',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        lineHeight: '1.6',
        fontSize: '1.1rem',
        textAlign: 'left'
      }
    };

    const changePassage = () => { 
      if (passageType === "original") {
        setPassageType("more");
        setPassage(morePassages[topic]);
      } else {
        setPassageType("original");
        setPassage(passages[topic]);
      }
    }

    return (
      <div style={styles.learningContainer}>
          <Navbar />
        <>
          <h1>{topic} Passage</h1>

          <button style={styles.Button} 
              onClick={() => changePassage()}>
              Show another passage
          </button>

          <p style={styles.passage}>
                {currentPassage} 
          </p>

          <button 
            style={styles.StartButton} 
            onClick={() => {
              if (passageType === "original") {
                router.push({
                  pathname: '/QuizExperience',
                  query: { topic: topic }
                });
              } else {
                router.push({
                  pathname: '/QuizExperience',
                  query: { topic: topic, passageType: 'more' }
                });
              }
            }}
          >
            Start Quiz
          </button>
        </>
      
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