import Head from 'next/head';
import styles from '../styles/Home.module.css';
import  { Box, AppBar, Toolbar, Button, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect} from 'react';
import { useRouter } from 'next/router';

export default function Company() {

    //router reference
      const router = useRouter();
   
    // company properties 
    const companyName = router.query.name;
    const ceoName = router.query.ceoName;
    const companyFocus = router.query.companyFocus;
    const companyLocation = router.query.location;

    // needed hooks / state variables 
    const [showMenu, toggleMenu] = useState(false);


    // navigation  
    const goToSignUpPage = () => { router.push('/sign-up'); }
    const goToProfilePage = () => { router.push('/user-profile'); }
    const goToAboutUsPage = () => { router.push('/about-us')}
    const goHome = () => { router.push('/')};
  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <Head>
      <title>Let's Go Biotech - Company Analysis Page</title>
      <meta name="description" content="created by Rohan Cain Robinson" />
    </Head>
    <AppBar position="fixed" color="secondary">
                  <Toolbar>
                      <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 1 }}>
                      <span className={styles.navBarText} onClick={goHome}>Let's Go Biotech</span>
                      </Typography>
                      { !showMenu ?   ''  : showMenuItems()}
                      { !showMenu  ? <MenuIcon className={styles.navBarText} onClick={ () => toggleMenu(!showMenu) }></MenuIcon> : <span onClick={ () => toggleMenu(!showMenu) }><div><p className={styles.navBarText}><b>X</b></p></div></span>}
                  </Toolbar>
    </AppBar>
      <div><b>{companyName}</b></div>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 3
                  }}>
            <p>{ceoName} is the CEO</p> <br />
            <p>Their focus is creating {companyFocus}</p> <br/>
            <p>{companyName} is based in {companyLocation}</p>
      </Box>
  </Box>
);

}
