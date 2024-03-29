import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


export default function TakeQuiz() {

  const router = useRouter();
  const showPaper1 = router.query.showPaper1;
  const showPaper2 = router.query.showPaper2;
  const showPaper3 = router.query.showPaper3;
  const paperNames = router.query.paperNames;

  const showIntro = router.query.showIntro;
  const showAbstract = router.query.showAbstract;
  const showMethods = router.query.showMethods;
  const showResults = router.query.showResults;
  const showDiscussion = router.query.showDiscussion;

  const paper1Questions = ['What is the main purpose of the artificial-intelligence system discussed in the paper?', 'Why are smells unique among sensory information in terms of how they are processed by the brain?'];
  const paper1AnswerChoices = [['To analyze human brain functions', 'To design new odorants', 'To improve visual recognition'], ['They first pass through other brain regions before reaching the memory centers.', 'They are processed directly by the brain`s memory and emotional centers', 'They are only interpreted by the sensory organ, such as the nose.']];
  const paper2Questions = ['What is the primary function of triglycerides in animals and plants?', 'What does the recent study by McLelland reveal in relation to triglyceride synthesis?'];
  const paper2AnswerChoices = [['They serve as building blocks for cell membranes', ' They play a role in immune response regulation', 'They are used for transporting fatty acids and energy storage'], ['A new method for reducing triglyceride levels in the blood.', 'A previously unknown pathway for triglyceride synthesis in mammalian cells', 'The negative effects of triglycerides on plant cells.']];
  const paper3Questions = ['What challenge hampers the broader effectiveness of adoptive immunotherapies?', 'How did the researchers modify donor HSPCs to enhance the effectiveness of immunotherapies?'];
  const paper3AnswerChoices = [['Overexpression of tumour antigens', 'Absence of tumour-restricted antigens', 'Lack of immune response in patients'], ['They introduced genes from immune cells.', 'They edited epitopes to confer resistance to CAR T cells and antibodies', 'They induced genetic mutations in tumour cells']];

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


  const goHome = () => {
    router.push('/'); 
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
      {/* <hr></hr>
      <h3>Ready to Quiz Yourself?</h3>
      <h4>This Quiz has Two Questions</h4>
      <br /> */}
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
     
     
     
       ? <div><h3><i>Great Job!</i></h3><p>You got {totalCorrect} questions correct out of {totalQuestions} total questions</p>
       <Link
       
       href={{
        pathname: '/',
          }}
    passHref
       >
        <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large" 
                  sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px' }} 
        >
            Let's Go Back Home
      </Button>
     </Link>
     </div> 
     
     
     : <div><p>You didn't get any of them correct, let's try that again</p>
     
        <Link 
            href={{
                pathname: '/read-paper',
                query: {
                  showPaper1: showPaper1,
                  showPaper2: showPaper2,
                  showPaper3: showPaper3, 
                  paperNames: paperNames,
              }
                }}
            passHref
        >

        <Button
          variant="contained" 
          color="secondary" 
          size="large" 
          sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px' }} 
        >
          Read Paper Again
        </Button>
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

  let displayPaperParts = () => {
      let parts = "";

      if (showIntro === "true") {
        parts += " Introduction,";
      }

      if (showAbstract === "true") {
        parts += " Abstract,";
      }

      if (showMethods === "true") {
        parts += " Methods,";
      }

      if (showResults === "true") {
        parts += " Results,";
      }

      if (showDiscussion === "true") {
        parts += " Discussion,";
      }

      parts = parts.slice(0, parts.length-1);
      
      return parts;
      
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
    const correctAnswersPaper1 = ['option-2', 'option-2'];
    const correctAnswersPaper2 = ['option-3', 'option-2'];
    const correctAnswersPaper3 = ['option-2', 'option-2'];

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
        <h3><i>{displayQuizName()} (2 questions)</i></h3>
        <h4>You'll be quizzed over the {displayPaperParts()}</h4>
          <br />
          {displayQuizFlow()}     
       
       {
        currPageNum == 0
        ?
        (<div className={styles.quizArrows}>

          <Button 
              variant="contained" 
              color="secondary" 
              size="small" 
              sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
              onClick={() => arrowClick("right")}
            >
            Start Quiz
          </Button>

          <br />
          <br />

          <Link 
            href={{
                pathname: '/read-paper',
                query: {
                    showPaper1: showPaper1,
                    showPaper2: showPaper2,
                    showPaper3: showPaper3, 
                    paperNames: paperNames,
                }
            }}
            passHref
          >
            <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px' }}
            >
                Read Paper Again
            </Button>
        </Link>
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
