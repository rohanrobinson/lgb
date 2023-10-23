import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function AboutUs() {

  const router = useRouter();

  const goHome = () => {
      router.push('/');
    }

  const seePastPapers = () => {
      router.push('/past-papers');
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

        <b><a href="https://rohanrobinson.github.io" target="_blank">Purpose</a></b> 

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 3 
                }}>

              <p className={styles.aboutUsText}>
                         Alot of knowledge about biology is found inside of research papers. <br /> 
                         We make these research papers less dry and fun to engage with. <br />
                         We do this, so that you (yes, you the reader) can build solutions to important problems facing our species and planet.
              </p>

            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              href="/"
              sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
            >
              Let's Get Started
            </Button>
        </Box>
    </Box>
  );
}

