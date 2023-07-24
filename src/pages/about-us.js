import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function AboutUs() {

    const goHome = () => {
        window.location.href = "http://letsgobiotech.com";
    }

    const seePastPapers = () => {
        window.location.href = "http://letsgobiotech.com/past-papers";
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
             Let's Go Biotech 
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={seePastPapers}>
              Past Papers
            </Typography>
        </Toolbar>
      </AppBar>

        <b>Why are we here?</b> 

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 3 
                }}>

              <p className={styles.aboutUsText}>
                         Let's learn Biotech to cure disease, sustain Earth, and expand outward. 
                         
              </p>


            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              href="/"
              sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
            >
              Let's Go Back Home
            </Button>

            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              target="_blank" 
              href="https://letsgobiotech.beehiiv.com"
              sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
            >
              Check out our Newsletter 
            </Button>

        </Box>
    </Box>
  );
}

