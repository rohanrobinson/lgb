import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function AboutUs() {

    const goHome = () => {
        window.location.href = "http://letsgobiotech.com";
    }
 
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Head>
        <title>Let's Go Biotech - About Us</title>
        <meta name="description" content="created by Rohan Cain Robinson" />
      </Head>

      <AppBar position="fixed" color="secondary">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer}  onClick={goHome}>
            🧬 LGB 
            </Typography>
        </Toolbar>
      </AppBar>

      <div className={styles.lgbInfo}>
        <Typography variant="h1" sx={{ mb: 4 }}>
        <b><span className={styles.lgbHeader}>🧬 Why does Let's Go Biotech Exist? 🚀</span></b> 
        </Typography>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 3 
                }}>

      <Typography  variant="body1" sx={{ mb: 2, fontSize: "2.0rem"  }}>
                <span className={styles.lgbDescription}> 
                  "The imagination of nature is far, far greater than the imagination of man." -Richard Feynman
                  Disease still exists. Climate Change is still real. People around the globe still need food.
                  Innovation in biotechnology is the way, we need better medicines, better batteries, better fertilizers, etc.
                  Let's Go Biotech aims to educate and inspire you to use the tool of biology to tackle important problems.
                </span>
      </Typography> 


            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              href="/"
              sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
            >
              Back Home
            </Button>
        </Box>
    </div>


    </Box>
  );
}

