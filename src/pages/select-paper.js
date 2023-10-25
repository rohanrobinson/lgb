import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';


export default function SelectPaper() {

  const router = useRouter();

  const paperList = ['paper A', 'paper B', 'paper C', 'paper D'];

  const goHome = () => {
    router.push('/');
  }

  const topicSelected = router.query.topicSelected;

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

    <div className={styles.selectedTopic}>
      <p>Here are some { topicSelected } papers you may enjoy reading!</p>
    </div>

    <div className={styles.paperList}>
      <div>{paperList.map((paper)=> <span> &rarr; {paper}</span> )}</div>
    </div>

    
    
    
    
    </Box>
    )
}
