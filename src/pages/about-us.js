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
             <span className={styles.navBarText}>Let's Go Biotech</span> 
            </Typography>
        </Toolbar>
      </AppBar>
        <b>About Us</b> 
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 3
                }}>

              <p className={styles.aboutUsText}>
                         Let's Go Biotech is your portal to the fast-paced biotech industry. <br /> 
                         Save time by reading articles and papers curated by us.
                          <br />
              </p>

            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              href="/"
              sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
            >
              Home
            </Button> 
            
            <b>Check out our Socials</b>

        <div>
            <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                href="https://tiktok.com/@letsgobiotech"
                target="_blank"
                sx={{ fontWeight: 'bold', fontSize: '10px', padding: '15px 25px', }}
              >
                Tik Tok 
          </Button>


          <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                href="https://instagram.com/letsgobiotech"
                target="_blank"
                sx={{ fontWeight: 'bold', fontSize: '10px', padding: '15px 25px', }}
              >
                Instagram 
          </Button>
     

          <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                href="https://youtube.com/@letsgobiotech"
                target="_blank"
                sx={{ fontWeight: 'bold', fontSize: '10px', padding: '15px 25px', }}
              >
                YouTube 
          </Button>
        </div>

        

        </Box>
    </Box>
  );
}

