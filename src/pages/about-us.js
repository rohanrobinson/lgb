// About Us Page 

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import boyDNA from '../images/curious-boy-dna-helix-strands.jpg';
import girlDNA from '../images/awesome-girl-dna-helix-strands.jpg';

import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

export default function AboutUs() {

  const router = useRouter();

  const [showMenu, toggleMenu] = useState(false);

  const goHome = () => {
    router.push('/');
  }

  const goToSignUpPage = () => {
    router.push('/sign-up');
  }

  const goToAccountPage = () => {
    router.push('/user-profile');
  }

  const showMenuItems = () => {
    
    return(
      <div className={styles.menuItems}>
        {/* <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 0.5 }} onClick={goToAccountPage}>
          <span className={styles.navBarText}>Your Account</span>  
        </Typography> */}
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={goToSignUpPage}>
          <span className={styles.navBarText}>Sign Up</span>
        </Typography> */}
      </div>
    );
}

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Head>
        <title>Let's Go Biotech - About Us</title>
        <meta name="description" content="created by Rohan Cain Robinson" />
      </Head>
      <AppBar position="fixed" color="secondary">
                    <Toolbar>
                        <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 1 }}>
                        <span className={styles.navBarText} onClick={goHome}>Let's Go Biotech </span>
                        </Typography>
                        { !showMenu ?   ''  : showMenuItems()}
                        { !showMenu  ? <MenuIcon className={styles.navBarText} onClick={ () => toggleMenu(!showMenu) }></MenuIcon> : <span onClick={ () => toggleMenu(!showMenu) }><div><p className={styles.navBarText}><b>X</b></p></div></span>}
                    </Toolbar>
                </AppBar>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 3
                }}>

              <p className={styles.aboutUsText}>
                        <b>Our goal is simple:</b> <br />
                        Keep you smart so you can continue on the important quest of bringing needed cures to patients! < br/>
                        We provide the latest industry news and making quizzes that are fun to take!
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
        </div>
        </Box>
    </Box>
  );
}

