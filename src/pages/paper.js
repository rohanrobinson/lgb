import Head from 'next/head';
import styles from '../styles/Home.module.css';
import  { Box, AppBar, Toolbar, Button, Typography, ButtonGroup} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect} from 'react';
import { useRouter } from 'next/router';

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
    const [quizMode, toggleQuizMode] = useState(false);
    const [questionNum, changeQuestionNum] = useState(0);

    // navigation to other pages 
    const goToAboutUsPage = () => { router.push('/about-us')}
    const goHome = () => { router.push('/')}; 

    

    const questionBank = ["Interesting Question", "Interesting Question", "Interesting Question", "Interesting Question", "Interesting Question"]
    const answerBank = {1: ['A.', 'B.', 'C.', 'D.'], 2: ['A.', 'B.', 'C.', 'D.'], 3: ['A.', 'B.', 'C.', 'D.'], 4: ['A', 'B', 'C', 'D'], 5: ['A', 'B', 'C', 'D']}

    const showQuizInstructions = () => {
      return (
      <div>
         { questionNum < 5 ? <h2> It's Time to take a Quiz!</h2> : "" }
       
       {
       questionNum == 0
          ?
        <div>
          <p><b>Step 1:</b> &nbsp; Read paper &rarr; <a href={paperURL} target="_blank">{ paperTitle }</a></p> <br />
          <p><b>Step 2:</b> &nbsp; &nbsp;             
              
              <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                sx={{ fontWeight: 'bold', fontSize: '18px', padding: '20px 30px', }}
                onClick={()=>changeQuestionNum(questionNum + 1)}
                >
                Start Quiz
              </Button>
          </p> <br /> 
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
            <><h2>Question {questionNum}</h2><p>{questionBank[questionNum - 1]}</p><Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => changeQuestionNum(questionNum - 1)}
            sx={{ fontWeight: 'bold', fontSize: '18px', padding: '10px 20px', }}>Back</Button><ButtonGroup>
              <Button>{answerBank[questionNum][0]} </Button>
              <Button>{answerBank[questionNum][1]}</Button>
              <Button>{answerBank[questionNum][2]}</Button>
              <Button>{answerBank[questionNum][3]}</Button>
            </ButtonGroup><Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => changeQuestionNum(questionNum + 1)}
              sx={{ fontWeight: 'bold', fontSize: '18px', padding: '10px 20px', }}>Next
            </Button></>
            </div>
          )
        }

      // displays necessary menu items
       const showMenuItems = () => {
        return(
          <div className={styles.menuItems}>
            {/* <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 0.5 }} onClick={goToSignUpPage}>
              <span className={styles.navBarText}>Sign Up</span>  
            </Typography> */}
            {/* <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 0.5 }} onClick={goToProfilePage}>
              <span className={styles.navBarText}>Your Account</span>  
            </Typography> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={goToAboutUsPage}>
              <span className={styles.navBarText}>About</span>
            </Typography>
          </div>
        );
  }

    // user interface
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
       { !quizMode ? <div><b>{paperTitle}</b></div>  : "" }
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 3
          }}>

              {
                quizMode 
                  ? 
                  <div>
                    
                    {showQuizInstructions()}

                  </div>
                  
                  :

                  <div>
                    <p> by {paperAuthor}</p>
                    <p>Topic &rarr; {paperTopic}</p>
                    <p><a href={paperURL} target="_blank">Link to full paper</a></p>

                    <Button 
                        variant="contained" 
                        color="secondary" 
                        size="large" 
                        onClick={() => toggleQuizMode(!quizMode)}
                        sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
                        >
                        Take Quiz
                    </Button> 
                </div>
              }

              {
                questionNum > 0 && questionNum < questionBank.length + 1
                ?
                showQuizQuestions()
                : 
                ""
              }

              {
                questionNum == questionBank.length + 1 
                ?
                <div>
                  <p> 🧬 Thank you for completing the quiz, hopefully you learned something cool!</p> <br/> 
                  <p>Check out another paper! 🧬 </p>
                   &nbsp; &nbsp;  
                </div>
                :
                ""
              }


              <br />
              <br />

              <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                href="/"
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
                >
                Home
              </Button> 
              
          </Box>
      </Box>
    );

}

