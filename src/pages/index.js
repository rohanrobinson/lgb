import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  const [showPaper1, setShowPaper1] = useState(false);
  const [showPaper2, setShowPaper2] = useState(false);
  const [showPaper3, setShowPaper3] = useState(false);

  const paperNames = ['AI predicts chemicals’ smells from their structures', 'Previously unknown pathway for lipid biosynthesis discovered', 'Epitope editing enables targeted immunotherapy of acute myeloid leukaemia' ];


  const seeAboutUs = () => { router.push('/about-us'); }

  useEffect( () => {
    
      let arr = paperNames.length;
      const defaultPaperNum = arr[(Math.floor(Math.random() * arr.length))];
  
      if (defaultPaperNum === 1) { setShowPaper1(true); }
      if (defaultPaperNum === 2) {  setShowPaper2(true); }
      if (defaultPaperNum === 3) { setShowPaper3(true); }

    }, []);


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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Let's Go Biotech 
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={seeAboutUs}>
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
          <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
            <b><span className={styles.lgbHeader}><i>The Best Way to Learn from Biotech Papers</i></span></b> 
          </Typography>
          <Typography variant="h4" sx={{ mb: 2, textAlign: 'center'}}>
            <span className={styles.lgbDescription}>Select a Paper</span>
          </Typography>
        </Box>
        
        <div>
          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{ pathname: '/paper-portion',
              query: { 
                showPaper1: true,
                showPaper2: false, 
                showPaper3: false, 
                paperNames: paperNames,
              }
           }}
          >
           &rarr; {paperNames[0]}
          </Link> <br />

          <Link
          
          variant="contained" 
          color="success" 
          size="large" 
          
          href={{ pathname: '/paper-portion',
              query: { 
                showPaper1: false,
                showPaper2: true, 
                showPaper3: false, 
                paperNames: paperNames,
              }
           }}
          
          
          >
           &rarr; {paperNames[1]}
          </Link> <br />


          <Link
          
          variant="contained" 
          color="success" 
          size="large" 
          
          href={{ pathname: '/paper-portion',
              query: { 
                showPaper1: false,
                showPaper2: false, 
                showPaper3: true, 
                paperNames: paperNames,
              }
           }}
          >
           &rarr; {paperNames[2]}
          </Link>
        </div>
      </Box>
    );
}
