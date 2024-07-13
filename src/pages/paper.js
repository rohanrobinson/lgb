import Head from 'next/head';
import styles from '../styles/Home.module.css';
import  { Box, AppBar, Toolbar, Button, Typography, TextField} from '@mui/material';
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
    const [isPaperSaved, togglePaperSaved] = useState(false);
    const [quizMode, toggleQuizMode] = useState(false);

    // navigation to other pages 
    // const goToSignUpPage = () => { router.push('/sign-up'); }
    const goToProfilePage = () => { router.push('/user-profile'); }
    const goToAboutUsPage = () => { router.push('/about-us')}
    const goHome = () => { router.push('/')}; 

    
    // const savePaper = () => {
    //     togglePaperSaved(!isPaperSaved);
    //     addUserPaperToDB();
    //   }

    // const unsavePaper = () => {
    //     togglePaperSaved(false);
    //     removeUserPaperFromDB();
    // }

    const showQuizInstructions = () => {
      return (
      <div>
          <p><b>Step 1:</b> &nbsp; Read the paper  &nbsp; <a href={paperURL} target="_blank">Link to full paper</a></p> <br />
          <p><b>Step 2:</b> &nbsp; Start the quiz &nbsp; <Button onClick={()=>console.log("Start Quiz Button")}>Start Quiz</Button></p> <br />
          <p><b>Step 3:</b> &nbsp; Answer all 5 multiple choice questonis and show you know what's up!</p>
      </div>
      );
    }

    
    
    const addUserPaperToDB = async () => {
      
      const userPaperData = {userName: userName, paperTitle: paperTitle}
      
      const response = await fetch(`/api/add-user-paper?name=${userPaperData.userName}&paperTitle=${userPaperData.paperTitle}`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json', 
          }, 
          body: JSON.stringify(userName, paperTitle),
        });
      
        if (!response.ok) {
          throw new Error('Failed to add user paper relation');
        }

    }

    
    const removeUserPaperFromDB = async () => {

      const userPaperData = {userName: userName, paperTitle: paperTitle}

      const response = await fetch(`/api/delete-user-paper?name=${userPaperData.userName}&paperTitle=${userPaperData.paperTitle}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userName, paperTitle),
      });

      if (!response.ok) {
        throw new Error('Failed to remove user paper relation');
      }
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
                          <span className={styles.navBarText} onClick={goHome}>Let's Go Biotech </span>
                          </Typography>
                          { !showMenu ?   ''  : showMenuItems()}
                          { !showMenu  ? <MenuIcon className={styles.navBarText} onClick={ () => toggleMenu(!showMenu) }></MenuIcon> : <span onClick={ () => toggleMenu(!showMenu) }><div><p className={styles.navBarText}><b>X</b></p></div></span>}
                      </Toolbar>
        </AppBar>
          <div><b>{paperTitle}</b></div>
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
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        size="large" 
                        onClick={() => toggleQuizMode(!quizMode)}
                        sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
                        >
                        Stop Quiz
                    </Button> 
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

