import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function SelectPaper() {

  const router = useRouter();
  const [paperSelected, setPaperSelected] = useState(0);

  // right now only show four papers to user (don't want to overwhelm user with options)
  const numPapersToDisplay = 3;
  const articleTable = {
      1: "Base Editing to Lower Cholesterol",
      2: "Creating a Synthetic Yeast Genome",
      3: "Regulators of Human T Cells",
  };

  const topicSelected = router.query.topicSelected;
  const topicEmoji = router.query.topicEmoji;


  const goHome = () => {
    router.push('/');
  }

  const displayPaperNumSelected = () => {
    return (
      <div>
        <Button variant="contained" color="success" size="large" href="https://www.nature.com/articles/d41586-023-03543-z" target="_blank"
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '15px 25px', }}
                onClick={()=> setPaperSelected(1)}
                >
                Base Editing to Lower Cholesterol
        </Button> 
        <Button variant="contained" color="success" size="large" href="https://newatlas.com/biology/yeast-50-percent-synthetic-dna/" target="_blank"
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '15px 25px', }}
                onClick={()=> setPaperSelected(2)}
                >
                Creating a Synthetic Yeast Genome
        </Button> 
        <Button variant="contained" color="success" size="large" href="https://google.com" target="_blank"
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '15px 25px', }}
                onClick={()=> setPaperSelected(3)}
                >
                Regulators of Human T Cells
        </Button> 

        <br />

        <br />

          <div>
              <b>After reading { articleTable[paperSelected] } </b>      
          </div>

      </div>
    );
  }


  return (    
  <Box sx={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '100vh' 
  }}>
    <Head>
      <title>Let's Go Biotech - Choose an Article</title>
      <meta name="description" content="created by Rohan Cain Robinson" />
    </Head>

    <AppBar position="fixed" color="secondary">
      <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer} onClick={goHome}>
          🧬 Let's Go Biotech 
          </Typography>
      </Toolbar>
    </AppBar>

    <p><i>Which article peeks your interest?</i></p> 

    <div className="papersToDisplay">
      { displayPaperNumSelected() }
    </div>

    <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                href="/topic-selection"
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
              >
        Back
    </Button>

  </Box>
    )
}
