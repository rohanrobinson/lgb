import { useRouter } from 'next/router';
import { useState } from 'react';
import { questions, answerChoices, correctAnswers } from '../data/quiz-data';
import { moreQuestions, moreAnswerChoices, moreCorrectAnswers } from '../data/quiz-data';
import Navbar from '../components/Navbar';

const QuizExperience = () => {
    
    const router = useRouter();
    
    const { topic, passageType } = router.query;

    // Add this check to prevent rendering until topic and data are available
    if (!router.isReady) {
        return <div>Loading...</div>;
    }

    console.log('topic', topic, 'passageType', passageType);
    // Determine which question set to use based on passageType
    const currentQuestions = passageType === 'more' ? moreQuestions : questions;
    const currentAnswerChoices = passageType === 'more' ? moreAnswerChoices : answerChoices;
    const currentCorrectAnswers = passageType === 'more' ? moreCorrectAnswers : correctAnswers;

    // Additional safety check for the current question set
    if (!currentQuestions[topic] || !currentAnswerChoices[topic] || !currentCorrectAnswers[topic]) {
        return <div>Error: Question data not available for this topic.</div>;
    }

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [userAnswers, setUserAnswers] = useState({});
    const [showCorrectAnswers, setShowCorrectAnswers] = useState({});

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        setUserAnswers(prev => ({
            ...prev,
            [currentQuestion]: answer
        }));
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === currentCorrectAnswers[topic][currentQuestion]) {
            setScore(prev => prev + 1);
        }

        if (currentQuestion < currentQuestions[topic].length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(userAnswers[currentQuestion + 1] || null);
        } else {
            setShowResults(true);
        }
    };

    const handleRedoQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setScore(0);
        setShowResults(false);
        setUserAnswers({});
    };

    const toggleAnswer = (index) => {
        setShowCorrectAnswers(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
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
        },
        reviewSection: {
            margin: '20px auto',
            maxWidth: '800px',
            textAlign: 'left',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            border: '4px solid darkmagenta',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        },
        incorrectAnswer: {
            marginBottom: '20px',
            padding: '15px',
            backgroundColor: '#fff',
            borderRadius: '5px',
            borderLeft: '4px solid #ff6b6b'
        },
        divider: {
            border: 0,
            height: '1px',
            background: '#ddd',
            margin: '15px 0'
        }
      };

      if (showResults) {
        return (
            <div style={styles.learningContainer}>
                <Navbar  />
                <h2>Congrats! 🥳 You've completed the Quiz over {topic}!
                    Your score: {score} out of {currentQuestions[topic].length}
                </h2>

                <div style={styles.reviewSection}>
                    <h3>You answered the following questions incorrectly:</h3>
                    {Object.entries(userAnswers).filter(([index, answer]) => 
                        answer !== currentCorrectAnswers[topic][parseInt(index)]
                    ).map(([index, answer]) => {
                        const questionIndex = parseInt(index);
                        const correctAnswer = currentCorrectAnswers[topic][questionIndex];
                        
                        return (
                            <div key={index} style={styles.incorrectAnswer}>
                                <p><strong>Question {questionIndex + 1}:</strong> {currentQuestions[topic][questionIndex]}</p>
                                <p>Your answer: <span style={{color: 'red'}}>{answer}</span></p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <button 
                                        onClick={() => toggleAnswer(index)}
                                        style={{
                                            padding: '5px 10px',
                                            backgroundColor: '#f0f0f0',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '0.9em',
                                            fontFamily: "'Courier New', Courier, monospace"
                                        }}
                                    >
                                        {showCorrectAnswers[index] ? 'Hide' : 'Show'} Correct Answer
                                    </button>
                                    {showCorrectAnswers[index] && (
                                        <p style={{ margin: 0 }}>Correct answer: <span style={{color: 'green'}}>{correctAnswer}</span></p>
                                    )}
                                </div>
                                <hr style={styles.divider} />
                            </div>
                        );
                    })}
                    {Object.keys(userAnswers).filter(index => 
                        userAnswers[index] === currentCorrectAnswers[topic][parseInt(index)]
                    ).length === currentQuestions[topic].length && (
                        <p>Perfect! You got all answers correct! 🎉</p>
                    )}
                </div>

                <button 
                    style={styles.nextButton}
                    onClick={handleRedoQuiz}
                >
                    Redo {topic}
                </button>

                <br />

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
                <h2>Question {currentQuestion + 1} of {currentQuestions[topic].length}</h2>
                <p style={styles.question}>{currentQuestions[topic][currentQuestion]}</p>
                
                <div style={styles.answerOptions}>
                    {currentAnswerChoices[topic][currentQuestion].map((answer, index) => (
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
                        {currentQuestion < currentQuestions[topic].length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </button>
                )}
            </div>

            <br />

            <button style={styles.Button} 
                onClick={() => {
                    router.push({
                        pathname: '/Learn',
                        query: { topic: topic, passageType: passageType },
                    });
                }}>
                Back to the Passage
            </button>
        </div>
    );
}

export default QuizExperience;