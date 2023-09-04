import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function PaperPortion() {

    const router = useRouter();
    const showPaper1 = router.query.showPaper1;
    const showPaper2 = router.query.showPaper2;
    const showPaper3 = router.query.showPaper3;
    const paperNames = router.query.paperNames;

    const [showIntro, setShowIntro] = useState(false);
    const [showAbstract, setShowAbstract] = useState(false);  
    const [showMethods, setShowMethods] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [showDiscussion, setShowDiscussion] = useState(false);

    const goBackHome= () => { router.push('/'); }
    const seeAboutUs = () => { router.push('/about-us'); }
    
    const partToggle = (direction, partOfPaper) => {
      
        if (direction === "on") {
          if (partOfPaper === "Introduction") {
              setShowIntro(true);
          }

          if (partOfPaper === "Abstract") {
              setShowAbstract(true);
          }
          if (partOfPaper === "Methods") {
              setShowMethods(true);
          }
          if (partOfPaper === "Results") {
              setShowResults(true);
          }
          if (partOfPaper === "Discussion") {
              setShowDiscussion(true);
          }
        }

        else if (direction === "off") {

          if (partOfPaper === "Introduction") {
              setShowIntro(false);
          }

          if (partOfPaper === "Abstract") {
              setShowAbstract(false);
          }
          if (partOfPaper === "Methods") {
              setShowMethods(false);
          }
          if (partOfPaper === "Results") {
              setShowResults(false);
          }
          if (partOfPaper === "Discussion") {
              setShowDiscussion(false);
          }
        }
    }

 
    const showChosenPaper = () => {
        let paperToShow = "";
        if (showPaper1 === 'true') {
            paperToShow = paperNames[0];
        }
        
        if (showPaper2 === 'true') {
            paperToShow = paperNames[1];
        }

        if (showPaper3 === 'true') {
            paperToShow = paperNames[2];
        }

        return paperToShow;

    }

    return (
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer}  onClick={goBackHome}>
              Let's Go Biotech 
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer}  onClick={seeAboutUs}>
              About Us
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
           <h3>Choose the parts of <i><u>{showChosenPaper()}</u></i> that you want to read!</h3> <br />


            <div className={styles.btnPapers}>
               {
                showIntro
                  ?
                  (<Button 
                    color="success"
                    onClick={() => partToggle("off","Introduction")}>Introduction
                  </Button>)
                  :
                (<Button 
                  color="error"
                  onClick={() => partToggle("on", "Introduction")}>Introduction
                </Button>)

               } <br />

            {
                showAbstract
                  ?
                  (<Button 
                    color="success"
                    onClick={() => partToggle("off", "Abstract")}>Abstract
                  </Button>)
                  :
                (<Button 
                  color="error"
                  onClick={() => partToggle("on", "Abstract")}>Abstract 
                </Button>)

               } <br />

            {   
                showMethods
                  ?
                  (<Button 
                    color="success"
                    onClick={() => partToggle("off","Methods")}>Methods
                  </Button>)
                  :
                (<Button 
                  color="error"
                  onClick={() => partToggle("on", "Methods")}>Methods
                </Button>)

               } <br />

            {   
                showResults
                  ?
                  (<Button 
                    color="success"
                    onClick={() => partToggle("off", "Results")}>Results
                  </Button>)
                  :
                (<Button 
                  color="error"
                  onClick={() => partToggle("on", "Results")}>Results
                </Button>)

               } <br />
                           {   
                showDiscussion
                  ?
                  (<Button 
                    color="success"
                    onClick={() => partToggle("off", "Discussion")}>Discussion
                  </Button>)
                  :
                (<Button 
                  color="error"
                  onClick={() => partToggle("on", "Discussion")}>Discussion
                </Button>)

               }


            </div>


        <Link
          href={{ pathname: '/read-paper',
                  query: { 
                    showPaper1: showPaper1,
                    showPaper2: showPaper2, 
                    showPaper3: showPaper3, 
                    paperNames: paperNames,
                    showIntro: showIntro, 
                    showAbstract: showAbstract, 
                    showMethods: showMethods,
                    showResults: showResults,
                    showDiscussion: showDiscussion, 
                  }
           }}
          >
                  <Button
                    variant="contained" 
                    color="secondary" 
                    size="large" 
                    sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px' }} 
                  >
                        Read Selected Parts
                  </Button>
          </Link>

          <a href="/">
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              &larr; <b>I want to read a Different Paper</b>
            </Typography>
          </a>


        </Box>
      </Box>
    );
}