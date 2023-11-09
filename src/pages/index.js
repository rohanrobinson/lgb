import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  
  const goToAboutUsPage = () => { router.push('/about-us'); }
    
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
            🧬 Let's Go Biotech 
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={goToAboutUsPage}>
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
            <b><span className={styles.lgbHeader}><i>Get Smart on Biotechnology</i></span></b> 
          </Typography>
        </Box>

          <p>We recommend interesting biotech articles to read and provide short quizzes to test your knowledge.</p> 

          <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                href="/topic-selection"
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
              >
                Start Here
          </Button>
      </Box>
    );
}
