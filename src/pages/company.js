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
    const companyName = router.query.companyName;
    const dateStarted = router.query.dateStarted;
    const productCategory = router.query.productCategory;
    const headquarterLocation = router.query.headquarterLocation;
    const userName = router.query.userName;


    // needed hooks / state variables 
    const [showMenu, toggleMenu] = useState(false);
    const [isCompanySaved, toggleCompanySaved] = useState(false);


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
      <div><b>{companyName} Company Analysis Page</b></div>
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      gap: 3
              }}>


            <p>Year Founded  &rarr; {dateStarted}</p>
            <p>Main Product &rarr; {productCategory}</p>
            <p>Headquarter Location &rarr; {headquarterLocation}</p>

            
            {
              isCompanySaved
              ?
            <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  onClick={()=>saveCompany()}>
                    UnSave Company
            </Button>
              :
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={()=>saveCompany()}>
                    Save Company
            </Button>
            }

          <Button 
            variant="contained" 
            color="secondary" 
            size="large" 
            href="/"
            sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
          >
            Back
          </Button> 
          
      </Box>
  </Box>
);

}
