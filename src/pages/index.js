import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Button, Typography, Input } from '@mui/material';
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
          <title>Let's Go Biotech - Home Page</title>
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
            <b><span><i>Stay Updated with the Fast Pace of Biotechnology</i></span></b> 
        </Box>

        <Input size='' placeholder="Hey! What's your name?" /> <br />

        <p>Which of the topics below interest you?</p>

        <div className=''>
            <Button 
                  variant="contained" 
                  color="secondary" 
                  size="medium" 
                  href="/topic-selection"
                  sx={{ fontWeight: 'bold', fontSize: '12px', padding: '10px 25px', }}
                >
                  Gene Editing   
            </Button>

            <Button 
                  variant="contained" 
                  color="secondary" 
                  size="medium" 
                  href="/topic-selection"
                  sx={{ fontWeight: 'bold', fontSize: '12px', padding: '10px 25px', }}
                >
                  Artificial Intelligence  
            </Button>

            <Button 
                  variant="contained" 
                  color="secondary" 
                  size="medium" 
                  href="/topic-selection"
                  sx={{ fontWeight: 'bold', fontSize: '12px', padding: '10px 25px', }}
                >
                  Brain Machine Interfaces 
            </Button>

            <Button 
                  variant="contained" 
                  color="secondary" 
                  size="medium" 
                  href="/topic-selection"
                  sx={{ fontWeight: 'bold', fontSize: '12px', padding: '10px 25px', }}
                >
                  Startups 
            </Button>

        </div>

        <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                href="/topic-selection"
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }}
              >
                Get Article Reccomendations   
          </Button>
      </Box>
    );
}
