import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { stringify } from 'querystring';



export default function TakeQuiz() {

  const router = useRouter();
  const showPaper1 = router.query.showPaper1;
  const showPaper2 = router.query.showPaper2;
  const showPaper3 = router.query.showPaper3;
  const paperNames = router.query.paperNames;

  const paper1Questions = ['What is the main focus of the study mentioned in the paragraph?', 'What is one of the key differences observed between pediatric and adult cancer cell lines in the study?'];
  const paper1AnswerChoices = [['Identifying new drug targets in pediatric cancers', 'Investigating the genetic complexity of adult cancers', 'Comparing mutational burden in pediatric and adult cancers'], ['Pediatric cancers have fewer genetic dependencies than adult cancers.', 'Pediatric cancers harbor more somatic mutations than adult cancers.', 'The vulnerabilities observed in pediatric cancers are distinct from those in adult cancers.']];
  const paper2Questions = ['What is a challenge in predicting the inhibitory effects of uORFs on protein translation?', 'What is the potential application of the methods described in the study?'];
  const paper2AnswerChoices = [['Secondary structure of uORFs', 'Downstream and upstream sequences in the 5` UTR', 'Expression levels of translation initiation factors'], ['Improving crop traits by manipulating pleiotropy', 'Enhancing translation initiation factors in plants', 'Extending the study to non-eukaryotic organisms']];
  const paper3Questions = ['What is the main advantage of MPS in drug development?', 'What is the focus of Body-on-a-chip (BOC) systems?'];
  const paper3AnswerChoices = [['Ability to predict animal response to drugs', 'Capability to model organ physiology and understand underlying mechanisms', 'Augmentation of clinical studies to test drug efficacy'], ['Predicting human response to pharmaceuticals', 'Evaluating the safety of chemicals, food ingredients, and cosmetics', 'Augmenting clinical studies for general chemical exposure']];


  const [showScore, setShowScore] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState('');
  const [totalCorrect, setCorrect] = useState('');
  const [currPageNum, setPageNum] = useState(0);

  const [paper1Q1Value, setPaper1Q1Value] = useState(false);
  const [paper1Q2Value, setPaper1Q2Value] = useState(false);
  const [paper2Q1Value, setPaper2Q1Value] = useState(false);
  const [paper2Q2Value, setPaper2Q2Value] = useState(false);  
  const [paper3Q1Value, setPaper3Q1Value] = useState(false);
  const [paper3Q2Value, setPaper3Q2Value] = useState(false);


  // eventually refactor this lol
  const goHome = () => {
    window.location.href = "http://letsgobiotech.com"; 
  }
  ////////////////////
  function arrowClick(direction) {
    if (direction === "right" && currPageNum  <= 2)
      { 
        setPageNum(currPageNum + 1); 

        if (currPageNum === 2) {
          
          scoreFun();

        }
      
      }
    else if (direction == "left" && currPageNum >= 1) 
      { setPageNum(currPageNum - 1); }

    // user wants to read paper 
    else if (direction == "left" && currPageNum == 0)
      { router.push(`/read-paper?showPaper1=${showPaper1}&showPaper2=${showPaper2}&showPaper3=${showPaper3}`); }

  }

  // handleAnswerChange function 
  const handleAnswerChange = (event) => {
      
      let currQuestion = event.target.name;
      let selectedAnswer = event.target.value;
      // branch based on which paper is being quizzed over
      if (showPaper1 === 'true') {
          // branch out based on which question in the quiz the user is on
          if (currQuestion === 'paper1-q1') {
            console.log("first paper first question");
            setPaper1Q1Value(selectedAnswer);
          }

          else if (currQuestion === 'paper1-q2') {
            console.log("first paper second question");
            setPaper1Q2Value(selectedAnswer);

          }
      }

      else if (showPaper2 === 'true') {
        // branch out based on which question in the quiz the user is on
          if (currQuestion === 'paper2-q1') {
            console.log("second paper first question");
            setPaper2Q1Value(selectedAnswer);
            }
          
          else if (currQuestion === 'paper2-q2') {
            console.log("second paper second question");
            setPaper2Q2Value(selectedAnswer);
            }
      }

      else if (showPaper3 === 'true') {
        // branch out based on which question in the quiz the user is on
            if (currQuestion === 'paper3-q1') {
              console.log("third paper first question");
              setPaper3Q1Value(selectedAnswer);
            }
                
            else if (currQuestion === 'paper3-q2') {
              console.log("third paper second question");
              setPaper3Q2Value(selectedAnswer);
            }
      }
  }

// defining pages of the quiz 
  const introPage = 
    <div className={styles.introPage}>
      <hr></hr>
      <h3>Ready to Quiz Yourself?</h3>
      <h4>This Quiz has Two Questions</h4>
      <br />
    </div>;


  const questionPage =     
    <div>
      <hr></hr>
      <h3>Question {currPageNum}</h3>

      { showPaper1 === 'true' && currPageNum == 1 ?
      <div className={styles.quizHellYa}>
        <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
          <span className={styles.lgbText}><i><b>{paper1Questions[0]}</b></i></span><br />
          <input type="radio" id="paper1-q1-a" name="paper1-q1" value="option-1" checked={paper1Q1Value === 'option-1'} onChange={handleAnswerChange}/>
          <label htmlFor="paper1-a"><span className={styles.lgbText}>{paper1AnswerChoices[0][0]}</span></label><br />
          <input type="radio" id="paper1-q1-b" name="paper1-q1" value="option-2" checked={paper1Q1Value === 'option-2'} onChange={handleAnswerChange} />
          <label htmlFor="paper1-b"><span className={styles.lgbText}>{paper1AnswerChoices[0][1]}</span></label><br />
          <input type="radio" id="paper1-q1-c" name="paper1-q1" value="option-3" checked={paper1Q1Value === 'option-3'} onChange={handleAnswerChange} />
          <label htmlFor="paper1-q1-c"><span className={styles.lgbText}>{paper1AnswerChoices[0][2]}</span></label><br /> <br />
        </Typography> 
      </div>
      : ""
      }       

      { showPaper1 == 'true' && currPageNum == 2 ?
      <div className={styles.quizHellYa}>
        <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
          <span className={styles.lgbText}><i><b>{paper1Questions[1]}</b></i></span><br />
          <input type="radio" id="paper1-q2-a" name="paper1-q2" value="option-1" checked={paper1Q2Value === 'option-1'} onChange={handleAnswerChange}/>
          <label htmlFor="paper1-q2-a"><span className={styles.lgbText}>{paper1AnswerChoices[1][0]}</span></label><br />
          <input type="radio" id="paper1-q2-b" name="paper1-q2" value="option-2" checked={paper1Q2Value === 'option-2'} onChange={handleAnswerChange} />
          <label htmlFor="paper1-q2-b"><span className={styles.lgbText}>{paper1AnswerChoices[1][1]}</span></label><br />
          <input type="radio" id="paper1-q2-c" name="paper1-q2" value="option-3" checked={paper1Q2Value === 'option-3'} onChange={handleAnswerChange} />
          <label htmlFor="paper1-q2-c"><span className={styles.lgbText}>{paper1AnswerChoices[1][2]}</span></label>
        </Typography>
      </div>
      : ""
      }
 
      { showPaper2 === 'true' && currPageNum == 1 ? 
        <div className={styles.quizHellYa}>
          <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
            <span className={styles.lgbText}><i><b>{paper2Questions[0]}</b></i></span><br />
            <input type="radio" id="paper2-q1-a" name="paper2-q1" value="option-1" checked={paper2Q1Value === 'option-1'} onChange={handleAnswerChange} />
            <label htmlFor="paper2-a"><span className={styles.lgbText}>{paper2AnswerChoices[0][0]}</span></label><br />
            <input type="radio" id="paper2-q1-b" name="paper2-q1" value="option-2" checked={paper2Q1Value === 'option-2'} onChange={handleAnswerChange} />
            <label htmlFor="paper2-b"><span className={styles.lgbText}>{paper2AnswerChoices[0][1]}</span></label><br />
            <input type="radio" id="paper2-q1-c" name="paper2-q1" value="option-3" checked={paper2Q1Value === 'option-3'} onChange={handleAnswerChange} />
            <label htmlFor="paper2-c"><span className={styles.lgbText}>{paper2AnswerChoices[0][2]}</span></label><br /> <br />
          </Typography>
        </div>
        :
        ""
      }

      { showPaper2 === 'true' && currPageNum == 2 ? 
        <div className={styles.quizHellYa}>
          <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
            <span className={styles.lgbText}><i><b>{paper2Questions[1]}</b></i></span><br />
            <input type="radio" id="paper2-q2-a" name="paper2-q2" value="option-1" checked={paper2Q2Value === 'option-1'} onChange={handleAnswerChange} />
            <label htmlFor="paper2-d"><span className={styles.lgbText}>{paper2AnswerChoices[1][0]}</span></label><br />
            <input type="radio" id="paper2-q2-b" name="paper2-q2" value="option-2" checked={paper2Q2Value === 'option-2'} onChange={handleAnswerChange} />
            <label htmlFor="paper2-e"><span className={styles.lgbText}>{paper2AnswerChoices[1][1]}</span></label><br />
            <input type="radio" id="paper2-q2-c" name="paper2-q2" value="option-3" checked={paper2Q2Value === 'option-3'}  onChange={handleAnswerChange} />
            <label htmlFor="paper2-f"><span className={styles.lgbText}>{paper2AnswerChoices[1][2]}</span></label><br /> <br />
          </Typography>
        </div>
        :
        ""
      }

      { showPaper3 === 'true' && currPageNum == 1 ? 
        <div className={styles.quizHellYa}>
        <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
          <span className={styles.lgbText}><b>{paper3Questions[0]}</b></span><br />
          <input type="radio" id="paper3-q1-a" name="paper3-q1" value="option-1" checked={paper3Q1Value === 'option-1'} onChange={handleAnswerChange}/>
          <label htmlFor="paper3-a"><span className={styles.lgbText}>{paper3AnswerChoices[0][0]}</span></label><br />
          <input type="radio" id="paper3-q1-b" name="paper3-q1" value="option-2" checked={paper3Q1Value === 'option-2'} onChange={handleAnswerChange} />
          <label htmlFor="paper3-b"><span className={styles.lgbText}>{paper3AnswerChoices[0][1]}</span></label><br />
          <input type="radio" id="paper3-q1-c" name="paper3-q1" value="option-3" checked={paper3Q1Value === 'option-3'} onChange={handleAnswerChange} />
          <label htmlFor="paper3-b"><span className={styles.lgbText}>{paper3AnswerChoices[0][2]}</span></label><br /> <br />
        </Typography>
      </div>
        :
          ""
      }      

      { showPaper3 === 'true' && currPageNum == 2 ? 
        <div className={styles.quizHellYa}>
        <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
          <span className={styles.lgbText}><b>{paper3Questions[1]}</b></span><br />
          <input type="radio" id="paper3-q2-a" name="paper3-q2" value="option-1" checked={paper3Q2Value === 'option-1'} onChange={handleAnswerChange} />
          <label htmlFor="paper3-c"><span className={styles.lgbText}>{paper3AnswerChoices[1][0]}</span></label><br />
          <input type="radio" id="paper3-q2-b" name="paper3-q2" value="option-2" checked={paper3Q2Value === 'option-2'} onChange={handleAnswerChange} />
          <label htmlFor="paper3-d"><span className={styles.lgbText}>{paper3AnswerChoices[1][1]}</span></label><br />
          <input type="radio" id="paper3-q2-c" name="paper3-q2" value="option-3" checked={paper3Q2Value === 'option-3'} onChange={handleAnswerChange} />
          <label htmlFor="paper3-d"><span className={styles.lgbText}>{paper3AnswerChoices[1][2]}</span></label><br />
        </Typography>
      </div>
      :
      ""
    }   

    </div>;

  const feedbackPage = 
    <div>
      <hr></hr>
     { totalCorrect > 0
     
     
     
       ? <div><h3><i>Great Job!</i></h3><p>You got {totalCorrect} questions correct out of {totalQuestions} total questions</p><Link 
       className={styles.greenSquare}
       variant="contained" 
       color="success" 
       size="large" 
       href={{ pathname: '/' }} >
       <b>Let's Go Back Home</b>
     </Link></div> 
     
     
     : <div><p>Ouch! looks like you didn't get any of them correct</p><Link 
            className={styles.greenSquare}
            variant="contained" 
            color="success" 
            size="large" 
            
            href={{ pathname: '/read-paper',
              query: {
                 showPaper1: showPaper1,
                 showPaper2: showPaper2,
                 showPaper3: showPaper3,
                 paperNames: paperNames,
               }
             }}
            
          >
            <b>Read Paper Again</b>
          </Link>
        </div>}
    </div>;

  let displayQuizName = () => {
      let selectedPaperName = "";

      if (showPaper1 === "true") { 
        selectedPaperName = paperNames[0];
      }

      if (showPaper2 === "true") {
        selectedPaperName = paperNames[1];
      }

      if (showPaper3 === "true") {
        selectedPaperName = paperNames[2];
      }

      return selectedPaperName;
  }

  let displayQuizFlow = () =>  { 
      let returnUI = ""
      
      if (currPageNum == 0) {
          returnUI = introPage;
      }

      if (currPageNum == 1 || currPageNum == 2) {
        returnUI = questionPage;
      }


      if (currPageNum == 3) {
        returnUI = feedbackPage;
      }
      
      return returnUI;
  }

  const scoreFun = () => {
    
    // eventually need to refactor to have correct answers automated 
    const correctAnswersPaper1 = ['option-1', 'option-3'];
    const correctAnswersPaper2 = ['option-1', 'option-1'];
    const correctAnswersPaper3 = ['option-2', 'option-1'];

    let totalCorrect = 0;
    let totalQuestions = correctAnswersPaper1.length; 
    
    if (showPaper1 === 'true') {
      const userAnswers = [paper1Q1Value, paper1Q2Value];
      totalCorrect = scorePaper(correctAnswersPaper1, userAnswers);
      console.log(totalCorrect);
    }

    if (showPaper2 === 'true')  {
      const userAnswers = [paper2Q1Value, paper2Q2Value];
      console.log(userAnswers, correctAnswersPaper2);
      totalCorrect = scorePaper(correctAnswersPaper2, userAnswers);
      console.log(totalCorrect);
    }

    if (showPaper3 === 'true') {
      const userAnswers = [paper3Q1Value, paper3Q2Value];
      console.log(userAnswers, correctAnswersPaper3);
      totalCorrect = scorePaper(correctAnswersPaper3, userAnswers);
      console.log(totalCorrect);
    }

     setTotalQuestions(totalQuestions);
     setCorrect(totalCorrect);

  }

  function scorePaper(correctAnswers, userAnswers) {
    let numQuestionsCorrect = 0
    for (let i = 0; i < correctAnswers.length; i++) {
        
        const correctAnswer = correctAnswers[i];
        const userAnswer = userAnswers[i];
        console.log(correctAnswer, userAnswer);
        if (correctAnswer === userAnswer) {
          numQuestionsCorrect += 1;
        }

    } 
    
    return numQuestionsCorrect; 
  }

 return (
   <div className={styles.container}>
      <Head>
        <title>Let's Go Biotech - Quiz</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer} onClick={goHome}>
            Let's Go Biotech 
          </Typography>
        </Toolbar>
      </AppBar>

      <br />
      <div>
        <h3><i>{displayQuizName()}</i></h3>
          <br />
          {displayQuizFlow()}
       
       {
        currPageNum == 0
        ?
        (<div className={styles.quizArrows}>
          <Button onClick={() => arrowClick("left")}>Read Paper Again</Button>
          <Button onClick={() => arrowClick("right")}>Start Quiz</Button>
        </div>)
        :
        (<div className={styles.quizArrows}> 
          <Button onClick={() => arrowClick("left")}><ArrowLeftIcon></ArrowLeftIcon></Button>
          <Button onClick={() => arrowClick("right")}> {currPageNum != 2 ? (<ArrowRightIcon></ArrowRightIcon>) : "Finished?"}</Button> 
        </div>)
       }

      </div>
   </div> 
 )
}
