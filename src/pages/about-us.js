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
             Let's Go Biotech 🧬
            </Typography>
        </Toolbar>
      </AppBar>

      <div className={styles.lgbInfo}>
        <Typography variant="h1" sx={{ mb: 4 }}>
        <b><span className={styles.lgbHeader}>🧬 About Us 🚀</span></b> 
        </Typography>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 3 
                }}>

      <Typography  variant="body1" sx={{ mb: 2, fontSize: "2.0rem"  }}>
                <span className={styles.lgbHeader}> 
                  Are you overwhelmed with all the latest research? I sure am! <br />

                   As a biotech enthusiast I feel like there's way too much papers than I have time to read! <br />

                   And even when I do read through a whole paper, like one over CRIPSR I still don't know if I actually learned anything.  <br />

                   That's why I created Let's Go Biotech, so that I can have the latest papers at my papers and properly test my knowledge on them!  <br />

                   If this resonates with you than try out a paper on our platform and take a quiz!  <br />

                   Good luck! If we want to cure all disease and create a sustainable Earth for our kids, it's up to us!   <br />
                   
                   LET'S GO!

                </span>
      </Typography> 


            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              href="/"
              sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
            >
              Home
            </Button>
        </Box>
    </div>


    </Box>
  );
}

