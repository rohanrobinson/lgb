import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function AboutUs() {

    const goBackHome = () => {
        window.location.href = "http://localhost:3000";
    }
 
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Head>
        <title>Let's Go Biotech - About Us</title>
        <meta name="description" content="created by Rohan Cain Robinson" />
      </Head>

      <AppBar position="fixed" color="secondary">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer}  onClick={goBackHome}>
            🧬 LGB 
            </Typography>
        </Toolbar>
      </AppBar>

      <div className={styles.lgbInfo}>
        <Typography variant="h1" sx={{ mb: 4 }}>
        <b><span className={styles.lgbHeader}>🧬 Let's Go Biotech - About Us 🚀</span></b> 
        </Typography>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 3 
                }}>

      <Typography variant="body1" sx={{ mb: 2, fontSize: "2.0rem"  }}>
          <span>
            "The imagination of nature is far, far greater than the imagination of man." -Richard Feynman, Kickass Physicist
          </span> 
          
          <br />
          <br />
          
          <span>WHY DOES LETS GO BIOTECH EXIST. WELL, PEOPLE ARE DYING FROM PREVENTABLE DISEASE, THIS BEAUTIFUL GEM OF A PLANET WE'RE 
            ON IS GETTING WAY TOO HOT HOT HOT, AND THE WAY WE GROW AND GET FOOD TO PEOPLE IS NOT IDEAL. 
            THAT'S WHY WE'VE FEATURED KICKASS PAPERS HERE ON LETS GO BIOTECH THAT YOU CAN ENGAGE WITH IN A FUN WAY!
            BY UNDERSTANDING BIOLOGY WE CAN USE NATURE'S TOOLS TO SOLVE NECESSARY PROBLEMS! LET'S GET TO WORK!
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

