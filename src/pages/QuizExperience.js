import { useRouter } from 'next/router';
import { useState } from 'react';
import { questions, answerChoices, correctAnswers } from '../data/quiz-data';
import Navbar from '../components/Navbar';

 const QuizExperience = () => {
    
    const router = useRouter();
    
    const { topic } = router.query;

    // Add this check to prevent rendering until topic is available
    if (!router.isReady || !topic) {
        return <div>Loading...</div>;
    }

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [userAnswers, setUserAnswers] = useState({}); // Add this to track all answers


    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        // Update the userAnswers object with the current answer
        setUserAnswers(prev => ({
            ...prev,
            [currentQuestion]: answer
        }));
    };

    const handleNextQuestion = () => {
        // Update score based on the current answer
        if (selectedAnswer === correctAnswers[topic][currentQuestion]) {
            setScore(prev => prev + 1);
        }

        if (currentQuestion < questions[topic].length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            // Set the selected answer to the previously selected answer for this question, if any
            setSelectedAnswer(userAnswers[currentQuestion + 1] || null);
        } else {
            setShowResults(true);
        }
    };

    const styles = {
        learningContainer: {
          textAlign: 'center',
          alignItems: 'center'
        },
  
        Button: {
          padding: '12px 24px',
          fontSize: '1.1rem',
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
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            textAlign: 'center'
        },
        question: {
            fontSize: '1.5rem',
            marginBottom: '20px',   
            color: '#333'
        },
        answerOptions: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '20px'
        },
        answerButton: {
            padding: '10px 20px',
            fontSize: '1rem',
            border: '2px solid plum',
            borderRadius: '5px',
            backgroundColor: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: "'Courier New', Courier, monospace",

        },
        selectedAnswer: {
            // backgroundColor: '#4CAF50',
            backgroundColor: 'darkmagenta',
            color: 'white'
        },
        nextButton: {
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: 'darkmagenta',
            fontFamily: 'Courier New, Courier, monospace',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px'
        },
        results: {
            fontSize: '1.5rem',
            marginTop: '20px'
        }
      };

      if (showResults) {
        return (
            <div style={styles.container}>
                <Navbar />
                <h2>Congrats! 🥳 You've completed the Quiz over {topic}</h2>
                <p style={styles.results}>
                    Your score: {score} out of {questions[topic].length}
                </p>
                <button 
                    style={styles.nextButton}
                    onClick={() => router.push('/')}
                >
                    Return to Topics
                </button>
            </div>
        );
    }

    
    return (
        <div style={styles.learningContainer}>
            <Navbar />
            <h1>{topic} Quiz</h1>
            <div style={styles.container}>
                <h2>Question {currentQuestion + 1} of {questions[topic].length}</h2>
                <p style={styles.question}>{questions[topic][currentQuestion]}</p>
                
                <div style={styles.answerOptions}>
                    {answerChoices[topic][currentQuestion].map((answer, index) => (
                        <button
                            key={index}
                            style={{
                                ...styles.answerButton,
                                ...(selectedAnswer === answer && styles.selectedAnswer)
                            }}
                            onClick={() => handleAnswerClick(answer)}
                        >
                            {answer}
                        </button>
                    ))}
                </div>

                {selectedAnswer && (
                    <button 
                        style={styles.nextButton}
                        onClick={handleNextQuestion}
                    >
                        {currentQuestion < questions[topic].length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </button>
                )}
            </div>

            <br />

            <button style={styles.Button} 
                onClick={() => {
                    router.push({
                        pathname: '/Learn',
                        query: { topic: topic },
                    });
                }}>
                Back to the Passage
            </button>
        </div>
    );
}

export default QuizExperience;