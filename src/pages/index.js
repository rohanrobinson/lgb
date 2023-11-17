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
          <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
            <b><span className={styles.lgbHeader}><i>Keep updated with the Biotech Industry</i></span></b> 
          </Typography>
        </Box>

        <Input size='' placeholder="What's your name?" /> <br />

        <p><u>Which of the topics below interest you?</u></p>

          <Button onClick={() => console.log("selected therapeutics")}
          
          sx={{ fontSize: '15px', padding: '15px 25px', }}
          
          >Therapeutics</Button>

          <Button onClick={() => console.log("selected diagnostics")}
          
          sx={{ fontSize: '15px', padding: '15px 25px', }}
          
          >Diagnostics</Button>

          <Button onClick={() => console.log("selected devices")}
          
          sx={{ fontSize: '15px', padding: '15px 25px', }}

          >Devices</Button>

          <Button onClick={()=> console.log("selected software")}
          
          sx={{ fontSize: '15px', padding: '15px 25px', }}

          >Software & Digital Tools</Button>

        <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                href="/topic-selection"
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
              >
                Get Article Reccomendations   
          </Button>

        Check us out on Social Media!
        <hr></hr>

        <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                href="https://tiktok.com/@letsgobiotech"
                sx={{ fontWeight: 'bold', fontSize: '10px', padding: '15px 25px', }}
              >
                Tik Tok 
          </Button>

          <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                href="https://instagram.com/letsgobiotech"
                sx={{ fontWeight: 'bold', fontSize: '10px', padding: '15px 25px', }}
              >
                Instagram 
          </Button>
        
      </Box>
    );
}
