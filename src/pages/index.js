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
          <Typography variant="h4" sx={{ mb: 2, textAlign: 'center'}}>
            <span className={styles.lgbDescription}>Which topic interests you?</span>
          </Typography>
        </Box>
        <div>
          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/past-papers',
            query: {
               topicSelected: 'AI'
            }
        }}
          >
            <span className={styles.topicsTextLarge}>🧠 AI / Machine Learning</span>
          </Link> 

          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/past-papers',
            query: {
               topicSelected: 'Genomics'
            }
        }}
          >
            <span className={styles.topicsTextLarge}>🧫 Genomics / Bioinformatics</span>
          </Link>

          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/past-papers',
            query: {
              topicSelected: 'Robotics'
            }
          }}
          >
            <span className={styles.topicsTextLarge}>🤖 Robotics / Lab Automation</span>
          </Link>

          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/past-papers',
            query: {
              topicSelected: 'Therapeutics'
            }
          }}
          >
            <span className={styles.topicsTextLarge}>💊 Therapeutics / Diagnostics</span>
          </Link>

          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/past-papers', 
            query: {
              topicSelected: 'Space'
            }
          }}
          >
            <span className={styles.topicsTextLarge}>🚀 Space Biology</span>
          </Link>

        </div>
      </Box>
    );
}
