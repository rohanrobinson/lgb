import Head from 'next/head';
import styles from '../styles/Home.module.css';
import  { Box, AppBar, Toolbar, Button, Typography, ButtonGroup} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { getQuestionsAndAnswers } from '../utilities/question-answers';

export default function Paper() {
    
    //router reference 
    const router = useRouter();
    
    // paper properties
    const paperTitle = router.query.paperTitle;
    const paperAuthor = router.query.paperAuthor;
    const paperURL = router.query.paperURL;
    const paperTopic = router.query.paperTopic;
    const userName = router.query.userName;

    // hooks / state variables
    const [showMenu, toggleMenu] = useState(false);
    const [questionNum, changeQuestionNum] = useState(-1);
    const [questionBank, setQuestions] = useState([]);
    const [answerBank, setAnswers] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);

    // navigation to other pages 
    const goToAboutUsPage = () => { router.push('/about-us')}
    const goHome = () => { router.push('/')}; 

    const loadQuestionsAndAnswers = () => {
     var qa =  getQuestionsAndAnswers(paperTitle);

     console.log("qa is");
     console.log(qa);
    }

    useEffect(() => {
      loadQuestionsAndAnswers();
  }, []);

    const showQuizInstructions = () => {
      
      return (
      <div>
       
       {
       questionNum == -1
          ?
        <div>
          <p><b>Step 1:</b> &nbsp; Read paper &rarr; <a href={paperURL} target="_blank">{ paperTitle }</a></p> <br />
          <p><b>Step 2:</b> &nbsp; &nbsp;             
              
              <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                sx={{ fontWeight: 'bold', fontSize: '18px', padding: '20px 30px', }}
                // onClick={()=>changeQuestionNum(questionNum + 1)}
                >
                Start Quiz  
              </Button>
            <p> &uarr; Quiz Feature Coming Soon! February 2025!</p>
          </p> <br /> 
          <Button 
                variant="contained"
                color="secondary" 
                onClick={goHome}
              >
                Go to Home
           </Button>

           <Button 
                variant="contained"
                color="secondary" 
                onClick={() => window.open('https://tiktok.com/@letsgobiotech', '_blank')}
              >
                Tik Tok
           </Button>


        </div>
        :
        ""
       }

      </div>
      );
    }

    const showQuizQuestions = () => {
        return (
          <div>
            <><h2>Question {questionNum + 1}</h2><p>{questionBank[questionNum]}</p>
            
            <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => changeQuestionNum(questionNum - 1)}
            sx={{ fontWeight: 'bold', fontSize: '18px', padding: '10px 20px', }}>Back</Button><ButtonGroup>
              <Button>{answerBank[questionNum]} </Button>
              <Button>{answerBank[1]}</Button>
              <Button>{answerBank[2]}</Button>
              <Button>{answerBank[3]}</Button>
            </ButtonGroup><Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => changeQuestionNum(questionNum + 1)}
              sx={{ fontWeight: 'bold', fontSize: '18px', padding: '10px 20px', }}>Next
            </Button></> 
            <br />
            <br /> 

            </div>
          )
        }

      // displays necessary menu items
       const showMenuItems = () => {
        return(
          <div className={styles.menuItems}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={goToAboutUsPage}>
              <span className={styles.navBarText}>About</span>
            </Typography>
          </div>
        );
  }

    
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Head>
          <title>Let's Go Biotech - Paper Analysis Page</title>
          <meta name="description" content="created by Rohan Cain Robinson" />
        </Head>
        <AppBar position="fixed" color="secondary">
                      <Toolbar>
                          <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 1 }}>
                          <span className={styles.navBarText} onClick={goHome}>Let's Go Biotech</span>
                          </Typography>
                          { !showMenu ?   ''  : showMenuItems()}
                          { !showMenu  ? <MenuIcon className={styles.navBarText} onClick={ () => toggleMenu(!showMenu) }></MenuIcon> : <span onClick={ () => toggleMenu(!showMenu) }><div><p className={styles.navBarText}><b>X</b></p></div></span>}
                      </Toolbar>
        </AppBar>
       {/* { !quizMode ? <div><b>{paperTitle}</b></div>  : "" } */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 3
          }}>

              {
                questionNum == -1
                ?
                showQuizInstructions()
                :
                ""
              }

              {
                questionNum > -1 && questionNum < questionBank.length
                ?
                showQuizQuestions()
                : 
                ""
              }

              {
                questionNum == questionBank.length 
                ? 
                <div>
                     <p>You've completed all the questions of the quiz!</p>
                     <p>Are you ready to submit?</p>
                     
              <Button 
                variant="contained" 
                color="secondary" 
                size="medium" 
                onClick={() => changeQuestionNum(0)}
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '15px 25px', }}
                > Review Quiz </Button> <br /> <br />

              <Button 
                variant="contained" 
                color="secondary" 
                size="medium" 
                onClick={() => changeQuestionNum(questionNum + 1)}
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '15px 25px', }}
                >Submit Quiz </Button>
              </div>
                :
                ""
              }

              {
                questionNum == questionBank.length + 1
                ?
                <div>
                  <p> 🧬 Thank you for completing this quiz, hopefully you learned something cool!</p> <br/> 
                  <p>Check out another paper! 🧬 </p>
                   &nbsp; &nbsp;  
                   <Button 
                      variant="contained" 
                      color="secondary" 
                      size="large" 
                      href="/"
                      sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
                      >
                      Home
                    </Button> 
                </div>
                :
                ""
              }
          </Box>
      </Box>
    );

}

