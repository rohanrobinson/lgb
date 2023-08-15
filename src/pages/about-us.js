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

        <b><a href="https://rohanrobinson.github.io" target="_blank">Our Purpose</a></b> 

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 3 
                }}>

              <p className={styles.aboutUsText}>
                         If we as human beings develop a true understanding of biology, we can <b>defeat all disease</b>, <b>sustain our planet</b>, and <b>expand to the stars</b>. <br />
                         Alot of knowledge about our world is found inside of research papers. <br /> 
                         Let's Go Biotech's mission is to make research papers easy to master so that you can build solutions to important problems.
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

