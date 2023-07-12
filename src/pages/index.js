import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Home() {

  const [showPaper1, setShowPaper1] = useState(false);
  const [showPaper2, setShowPaper2] = useState(false);
  const [showPaper3, setShowPaper3] = useState(false);



  const paperNames = ['Can Microbes Save the Planet?', 'Applying Machine Learning to Antibiotic Discovery', 'Unlocking the Promise of mRNA therapeutics' ];

    const seeAboutUs = () => {
        window.location.href = "http://letsgobiotech.com/about-us";
    }

    const paperSelected = (event, paperNum) => {
      if (paperNum === "paper1") {
          console.log("paper 1 selected");
          setShowPaper3(false);
          setShowPaper2(false);
          setShowPaper1(true);
          console.log(showPaper1, showPaper2, showPaper3);
  
        }
  
      else if (paperNum === "paper2") {

        setShowPaper1(false);
        setShowPaper3(false);
        setShowPaper2(true);

        }
  
      else if (paperNum === "paper3") {
  
          setShowPaper1(false);
          setShowPaper2(false);
          setShowPaper3(true);

        }
  
      else {
         console.log('You have tried to select multiple paper, ha, you can choose one, pick wisely... :)');
      }
    }


    useEffect(() => {
    
      let arr = [1, 2, 3];
  
      const defaultPaperNum = arr[(Math.floor(Math.random() * arr.length))];
  
      if (defaultPaperNum === 1) {
     //   setNumSelected(1);
        setShowPaper1(true);
      }
  
      if (defaultPaperNum === 2) {
       // setNumSelected(2);
        setShowPaper2(true);
      }
  
      if (defaultPaperNum === 3) {
     //   setNumSelected(3);
        setShowPaper3(true);
      }

      console.log(defaultPaperNum);
  
    }, []);


    return(
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        gap: 3,
        p: 3,
      }}>
        <Head>
          <title>Let's Go Biotech - Home Base</title>
          <meta name="description" content="created by Rohan Cain Robinson" />
        </Head>
      
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Let's Go Biotech 
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={seeAboutUs}>
              About
            </Typography>
          </Toolbar>
        </AppBar>
      
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 1,
          mt: 4,
        }}>
          <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
            <b><span className={styles.lgbHeader}>Master Biotech Papers</span></b> 
          </Typography>
          {/* <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
            <span className={styles.lgbDescription}>Read the latest papers, test yourself and level up!</span>
          </Typography> */}
          <Typography variant="h3" sx={{ mb: 2, textAlign: 'center'}}>
            <span className={styles.lgbDescription}>Get Started by Choosing a Paper Below</span>
          </Typography>
        </Box>

        <div className={styles.btnPapers}>
        {
              
              showPaper1

              ?
              
              (<Button 
                onClick={(event) => paperSelected(event, "paper1")}
                variant="contained"
                color="success"
              >
                {paperNames[0]}
              </Button>)
              :
              (<Button 
                onClick={(event) => paperSelected(event, "paper1")}
                variant="outlined"
                color="error"
              > 
              {paperNames[0]}
            </Button>) 
        }

            &nbsp; &nbsp; &nbsp;
        
        {
            showPaper2 

            ?

            (<Button 
              onClick={(event) => paperSelected(event, "paper2")}
              variant="contained"
              color="success"
            >
            {paperNames[1]} 
          </Button>)

            :

            (<Button 
              onClick={(event) => paperSelected(event, "paper2")}
              variant="outlined"
              color="error"
          >
            {paperNames[1]}
          </Button>)

         }
            &nbsp; &nbsp; &nbsp;
        {
            showPaper3 

            ? 

            (<Button 
              onClick={(event) => paperSelected(event, "paper3")}
              variant="contained"
              color="success"
          >
           {paperNames[2]} 
          </Button>)

            :

            (<Button 
              onClick={(event) => paperSelected(event, "paper3")}
              variant="outlined"
              color="error"
          >
          {paperNames[2]} 
          </Button>)

         }

      </div>
      
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 3,
          mt: 3,
        }}>
          <Link 
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
            <b>Read Paper</b>
          </Link>
        
          </Box>
      </Box>

    );
}
