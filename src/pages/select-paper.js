import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';


export default function SelectPaper() {

  const router = useRouter();

  // right now only show four papers to user (don't want to overwhelm human with options)
  const numPapersToDisplay = 3;
  const paperList = [];

  const topicSelected = router.query.topicSelected;
  const topicEmoji = router.query.topicEmoji;


  const goHome = () => {
    router.push('/');
  }

  const setPaperNames = () => {
      for (let i =0; i< numPapersToDisplay; i++) {
          var paperNum = i + 1;
          var paperLabel = topicSelected + " paper " + paperNum.toString();
          paperList.push(paperLabel);
      }

      return <div>
            {paperList.map((paper) => 
              <div>
                <Button variant="contained" color="success" size="large" href="https://balajis.com/p/the-purpose-of-technology"
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '15px 25px', }}>
                  { paper }
              </Button> 
              <br /> <br />
              </div> 
            )}
      </div>
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
      <title>Let's Go Biotech - Choose a Paper</title>
      <meta name="description" content="created by Rohan Cain Robinson" />
    </Head>

    <AppBar position="fixed" color="secondary">
      <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer} onClick={goHome}>
          🧬 Let's Go Biotech 
          </Typography>
      </Toolbar>
    </AppBar>

    <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
            <b><span className={styles.lgbHeader}><i>{ topicEmoji } Choose a { topicSelected }  paper you like!</i></span></b> 
        </Typography>

    <div className="#">
      {setPaperNames()}
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
