import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';


export default function TakeQuiz() {

  const router = useRouter();
  const showPaper1 = router.query.showPaper1;
  const showPaper2 = router.query.showPaper2;
  const showPaper3 = router.query.showPaper3;
  const paperNames = router.query.paperNames;
  
  const [showScore, setShowScore] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState('');
  const [totalCorrect, setCorrect] = useState('');
  const [currPageNum, setPageNum] = useState(0);

  const [paper1Q1Value, setPaper1Q1Value] = useState('');
  const [paper1Q2Value, setPaper1Q2Value] = useState(' ');
  const [paper2Q1Value, setPaper2Q1Value] = useState('');
  const [paper2Q2Value, setPaper2Q2Value] = useState(' ');  
  const [paper3Q1Value, setPaper3Q1Value] = useState('');
  const [paper3Q2Value, setPaper3Q2Value] = useState(' ');

  const goHome = () => {
    window.location.href = "http://letsgobiotech.com"; 
  }

  function arrowClick(direction) {
    if (direction === "right" && currPageNum  <= 2)  { setPageNum(currPageNum + 1); }
    else if (direction == "left" && currPageNum >= 1) { setPageNum(currPageNum - 1); }
  }

  // handle paper 1 change 
  const handlePaper1Change = (event) => {
    const { name, value } = event.target;
    if (name === 'paper1-q1') {
      setPaper1Q1Value(value);
    } 
    else if (name === 'paper1-q2') {
      setPaper1Q2Value(value);
    }
  }
  // handle paper 2 change
  const handlePaper2Change = (event) => {
    const { name, value } = event.target;
    if (name === 'paper2-q1') {
      setPaper2Q1Value(value);
    }
    else if (name === 'paper2-q2') {
      setPaper2Q2Value(value);
    }
  }
  // handle paper 3 change
  const handlePaper3Change = (event) => { 
    const { name, value } = event.target;
    if (name === 'paper3-q1') {
      setPaper3Q1Value(value);
    }
    else if (name === 'paper3-q2') {
      setPaper3Q2Value(value);
    }
  }

// defining pages of the quiz 
  const introPage = 
    <div>
      <hr></hr>
      <h3>Ready to Practice?</h3>
      <p>Let's Go!</p>
    </div>;

  const questionPage =     
    <div>
      <hr></hr>
      <h3>Question {currPageNum}</h3>

      { showPaper1 === 'true' ?
      <div className={styles.quizHellYa}>
        <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
          <span className={styles.lgbText}><i><b>What is the primary goal of the initiative in terms of reducing methane emissions?</b></i></span><br />
          <input type="radio" id="paper1-q1-a" name="paper1-q1" value="paper1-q1-a" onChange={handlePaper1Change}/>
          <label htmlFor="paper1-a"><span className={styles.lgbText}>Developing devices to deliver bioactives to cattle stomachs</span></label><br />
          <input type="radio" id="paper1-q1-b" name="paper1-q1" value="paper1-q1-b" onChange={handlePaper1Change} />
          <label htmlFor="paper1-b"><span className={styles.lgbText}>Feeding cattle methane inhibitors or seaweed</span></label><br />
          <input type="radio" id="paper1-q1-c" name="paper1-q1" value="paper1-q1-c" onChange={handlePaper1Change} />
          <label htmlFor="paper1-q1-c"><span className={styles.lgbText}>Using CRISPR–Cas gene editing to directly edit microbes in the guts of livestock</span></label><br /> <br />
       
          <span className={styles.lgbText}><i><b>How does Doudna and Banfield's approach differ from previous attempts to reduce methane production in cattle?</b></i></span><br />
          <input type="radio" id="paper1-q2-a" name="paper1-q2" value="paper1-q2-a" onChange={handlePaper1Change}/>
          <label htmlFor="paper1-q2-a"><span className={styles.lgbText}>It focuses on isolating specific species of microbes in the gut.</span></label><br />
          <input type="radio" id="paper1-q2-b" name="paper1-q2" value="paper1-q2-b" onChange={handlePaper1Change} />
          <label htmlFor="paper1-q2-b"><span className={styles.lgbText}>It utilizes DNA-editing methods called DART and ET-seq</span></label><br />
          <input type="radio" id="paper1-q2-c" name="paper1-q2" value="paper1-q2-c" onChange={handlePaper1Change} />
          <label htmlFor="paper1-q2-c"><span className={styles.lgbText}>It involves the administration of methane inhibitors or seaweed.</span></label>
        </Typography> 
      </div>
      : ""
      }

      { showPaper2 === 'true' ? 
        <div className={styles.quizHellYa}>
          <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
            <span className={styles.lgbText}><i><b>Why are antimicrobial peptides (AMPs) considered an alternative to traditional antibiotics?</b></i></span><br />
            <input type="radio" id="paper2-q1-a" name="paper2-q1" value="paper2-q1-a" onChange={handlePaper2Change} />
            <label htmlFor="paper2-a"><span className={styles.lgbText}>They are less likely to elicit resistance.</span></label><br />
            <input type="radio" id="paper2-q1-b" name="paper2-q1" value="paper2-q1-b" onChange={handlePaper2Change} />
            <label htmlFor="paper2-b"><span className={styles.lgbText}>They are more effective against pathogens.</span></label><br />
            <input type="radio" id="paper2-q1-c" name="paper2-q1" value="paper2-q1-c" onChange={handlePaper2Change} />
            <label htmlFor="paper2-c"><span className={styles.lgbText}>They have a broader spectrum of activity.</span></label><br /> <br />

            <span className={styles.lgbText}><i><b>What approach do Ma and the team use to identify new antibiotics?</b></i></span><br />
            <input type="radio" id="paper2-q2-a" name="paper2-q2" value="paper2-q2-a" onChange={handlePaper2Change} />
            <label htmlFor="paper2-d"><span className={styles.lgbText}>Conducting large-scale clinical trials</span></label><br />
            <input type="radio" id="paper2-q2-b" name="paper2-q2" value="paper2-q2-b" onChange={handlePaper2Change} />
            <label htmlFor="paper2-e"><span className={styles.lgbText}>Utilizing high-throughput microbiome data analysis</span></label><br />
            <input type="radio" id="paper2-q2-c" name="paper2-q2" value="paper2-q2-c" onChange={handlePaper2Change} />
            <label htmlFor="paper2-f"><span className={styles.lgbText}>Developing natural language processing tools</span></label><br /> <br />
          </Typography>
        </div>
        :
        ""
      }

      { showPaper3 === 'true' ? 
        <div className={styles.quizHellYa}>
        <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
          <span className={styles.lgbText}><b>What has renewed interest in mRNA as a means of delivering therapeutic proteins?</b></span><br />
          <input type="radio" id="paper3-q1-a" name="paper3-q1" value="paper3-q1-a" onChange={handlePaper3Change} />
          <label htmlFor="paper3-a"><span className={styles.lgbText}>Early clinical trials of mRNA therapeutics</span></label><br />
          <input type="radio" id="paper3-q1-b" name="paper3-q1" value="paper3-q1-b" onChange={handlePaper3Change} />
          <label htmlFor="paper3-b"><span className={styles.lgbText}>The success of mRNA vaccines against COVID-19</span></label><br /> <br />
      
          <span className={styles.lgbText}><b>What is the potential of mRNA therapeutics beyond vaccines and immunostimulatory agents?</b></span><br />
          <input type="radio" id="paper3-q2-a" name="paper3-q2" value="paper3-q2-a" onChange={handlePaper3Change} />
          <label htmlFor="paper3-c"><span className={styles.lgbText}>Treatment of diverse conditions</span></label><br />
          <input type="radio" id="paper3-q2-b" name="paper3-q2" value="paper3-q2-b" onChange={handlePaper3Change} />
          <label htmlFor="paper3-d"><span className={styles.lgbText}>Enhancement of the immune system</span></label><br />
          <input type="radio" id="paper3-q2-c" name="paper3-q2" value="paper3-q2-c" onChange={handlePaper3Change} />
          <label htmlFor="paper3-d"><span className={styles.lgbText}>Prevention of rare disease</span></label><br />
        </Typography>
      </div>
      :
      ""
    }         
    </div>;

  const feedbackPage = 
    <div>
      <hr></hr>
      <h3><i>Keep Going! Great Job!</i></h3>
      <p>This is how you performed!</p>
      <p>You got x questions correct out of y total question</p>
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
    
    // correct answers to v6 quiz in order from q1 to qn
    const correctAnswersPaper1 = ['paper1-q1-c', 'paper1-q2-b'];
    const correctAnswersPaper2 = ['paper2-q1-a', 'paper2-q2-b'];
    const correctAnswersPaper3 = ['paper3-q1-b', 'paper3-q2-a'];

    let totalCorrect = 0;
    let totalQuestions = correctAnswersPaper1.length; 
    
    if (showPaper1 === 'true') {
      const userAnswers = [paper1Q1Value, paper1Q2Value];
      console.log(userAnswers);
      console.log(correctAnswersPaper1);
      totalCorrect = scorePaper(correctAnswersPaper1, userAnswers);
      console.log(totalCorrect);
    }

    if (showPaper2 === 'true')  {
      const userAnswers = [paper2Q1Value, paper2Q2Value];
      console.log(userAnswers);
      console.log(correctAnswersPaper2);
      totalCorrect = scorePaper(correctAnswersPaper2, userAnswers);
      console.log(totalCorrect);
    }

    if (showPaper3 === 'true') {
      const userAnswers = [paper3Q1Value, paper3Q2Value];
      console.log(userAnswers);
      console.log(correctAnswersPaper3);
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
          <Button onClick={() => arrowClick("left")}>&larr;</Button>
          <Button onClick={() => arrowClick("right")}>&rarr;</Button>

      </div>


      {/* {showPaper1 === 'true' && (
      <div className={styles.quizHellYa}>
        <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
          <h3><i>{paperNames[0]}</i></h3>
          <span className={styles.lgbText}><i><b>What is the primary goal of the initiative in terms of reducing methane emissions?</b></i></span><br />
          <input type="radio" id="paper1-q1-a" name="paper1-q1" value="paper1-q1-a" onChange={handlePaper1Change}/>
          <label htmlFor="paper1-a"><span className={styles.lgbText}>Developing devices to deliver bioactives to cattle stomachs</span></label><br />
          <input type="radio" id="paper1-q1-b" name="paper1-q1" value="paper1-q1-b" onChange={handlePaper1Change} />
          <label htmlFor="paper1-b"><span className={styles.lgbText}>Feeding cattle methane inhibitors or seaweed</span></label><br />
          <input type="radio" id="paper1-q1-c" name="paper1-q1" value="paper1-q1-c" onChange={handlePaper1Change} />
          <label htmlFor="paper1-q1-c"><span className={styles.lgbText}>Using CRISPR–Cas gene editing to directly edit microbes in the guts of livestock</span></label><br /> <br />
       
          <span className={styles.lgbText}><i><b>How does Doudna and Banfield's approach differ from previous attempts to reduce methane production in cattle?</b></i></span><br />
          <input type="radio" id="paper1-q2-a" name="paper1-q2" value="paper1-q2-a" onChange={handlePaper1Change}/>
          <label htmlFor="paper1-q2-a"><span className={styles.lgbText}>It focuses on isolating specific species of microbes in the gut.</span></label><br />
          <input type="radio" id="paper1-q2-b" name="paper1-q2" value="paper1-q2-b" onChange={handlePaper1Change} />
          <label htmlFor="paper1-q2-b"><span className={styles.lgbText}>It utilizes DNA-editing methods called DART and ET-seq</span></label><br />
          <input type="radio" id="paper1-q2-c" name="paper1-q2" value="paper1-q2-c" onChange={handlePaper1Change} />
          <label htmlFor="paper1-q2-c"><span className={styles.lgbText}>It involves the administration of methane inhibitors or seaweed.</span></label>
        </Typography>
      </div>
      )}

      <br />

      {showPaper2 === 'true' && (
        <div className={styles.quizHellYa}>
          <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
            <h3><i>{paperNames[1]}</i></h3>
            <span className={styles.lgbText}><i><b>Why are antimicrobial peptides (AMPs) considered an alternative to traditional antibiotics?</b></i></span><br />
            <input type="radio" id="paper2-q1-a" name="paper2-q1" value="paper2-q1-a" onChange={handlePaper2Change} />
            <label htmlFor="paper2-a"><span className={styles.lgbText}>They are less likely to elicit resistance.</span></label><br />
            <input type="radio" id="paper2-q1-b" name="paper2-q1" value="paper2-q1-b" onChange={handlePaper2Change} />
            <label htmlFor="paper2-b"><span className={styles.lgbText}>They are more effective against pathogens.</span></label><br />
            <input type="radio" id="paper2-q1-c" name="paper2-q1" value="paper2-q1-c" onChange={handlePaper2Change} />
            <label htmlFor="paper2-c"><span className={styles.lgbText}>They have a broader spectrum of activity.</span></label><br /> <br />

            <span className={styles.lgbText}><i><b>What approach do Ma and the team use to identify new antibiotics?</b></i></span><br />
            <input type="radio" id="paper2-q2-a" name="paper2-q2" value="paper2-q2-a" onChange={handlePaper2Change} />
            <label htmlFor="paper2-d"><span className={styles.lgbText}>Conducting large-scale clinical trials</span></label><br />
            <input type="radio" id="paper2-q2-b" name="paper2-q2" value="paper2-q2-b" onChange={handlePaper2Change} />
            <label htmlFor="paper2-e"><span className={styles.lgbText}>Utilizing high-throughput microbiome data analysis</span></label><br />
            <input type="radio" id="paper2-q2-c" name="paper2-q2" value="paper2-q2-c" onChange={handlePaper2Change} />
            <label htmlFor="paper2-f"><span className={styles.lgbText}>Developing natural language processing tools</span></label><br /> <br />
          </Typography>
        </div>
      )}

      <br />

      {showPaper3 === 'true' && (
        <div className={styles.quizHellYa}>
        <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
          <h3>{paperNames[2]}</h3>
          <span className={styles.lgbText}><b>What has renewed interest in mRNA as a means of delivering therapeutic proteins?</b></span><br />
          <input type="radio" id="paper3-q1-a" name="paper3-q1" value="paper3-q1-a" onChange={handlePaper3Change} />
          <label htmlFor="paper3-a"><span className={styles.lgbText}>Early clinical trials of mRNA therapeutics</span></label><br />
          <input type="radio" id="paper3-q1-b" name="paper3-q1" value="paper3-q1-b" onChange={handlePaper3Change} />
          <label htmlFor="paper3-b"><span className={styles.lgbText}>The success of mRNA vaccines against COVID-19</span></label><br /> <br />
      
          <span className={styles.lgbText}><b>What is the potential of mRNA therapeutics beyond vaccines and immunostimulatory agents?</b></span><br />
          <input type="radio" id="paper3-q2-a" name="paper3-q2" value="paper3-q2-a" onChange={handlePaper3Change} />
          <label htmlFor="paper3-c"><span className={styles.lgbText}>Treatment of diverse conditions</span></label><br />
          <input type="radio" id="paper3-q2-b" name="paper3-q2" value="paper3-q2-b" onChange={handlePaper3Change} />
          <label htmlFor="paper3-d"><span className={styles.lgbText}>Enhancement of the immune system</span></label><br />
          <input type="radio" id="paper3-q2-c" name="paper3-q2" value="paper3-q2-c" onChange={handlePaper3Change} />
          <label htmlFor="paper3-d"><span className={styles.lgbText}>Prevention of rare disease</span></label><br />
        </Typography>
      </div>
      )}  */}

       {/* {showScore && totalCorrect > 0 && (
        <div className={styles.quizHellYa}>
          <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
            <span className={styles.lgbText}>Great job on reading new & hard material!< br />
            You got {totalCorrect} correct out of {totalQuestions}!</span> <br />

            <br />
            
            <Link className={styles.greenSquare} href="/" >
                <h2><span className={styles.lgbText}>Let's Try a New One!</span></h2>
            </Link>

          </Typography>
        </div>
      )}

      {showScore && totalCorrect === 0 && (
        <div className={styles.quizHellYa}>
          <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
              <span className={styles.lgbText}>Great job on reading the paper and trying to understand something complicated! < br />
              You didn't get any of the questions correct, no worries! <br /> <br />
              Re-read the abstract &darr; and try again!<br />
              </span>
            <Link className={styles.greenSquare} href="/">
            <h2><span className={styles.lgbText}>Back to Paper Selection!</span></h2>
            </Link> <br />
          </Typography>
        </div>
      )}

      {!showScore && (
      <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem" }}>
        
        <Link className={styles.greenSquare} href="#" onClick={() => [ scoreFun() , setShowScore(true)]}>
            <h2><span className={styles.lgbText}>Finished? Let's See How You Did!</span></h2>
        </Link>
    
      </Typography>
      )} */}

   </div> 
 )
}
