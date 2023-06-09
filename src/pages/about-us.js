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

        <b>About Let's Go Biotech</b> 

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 3 
                }}>

              <p className={styles.aboutUsText}>
                         We have to cure all disease and create a sustainable planet Earth for our kids! 
                         By understanding and implementing biotech knowledge we can do it! <a href="https://rohanrobinson.github.io" target="_blank">Rohan Cain Robinson</a>
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

