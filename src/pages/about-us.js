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
             Let's Go Biotech 
            </Typography>
        </Toolbar>
      </AppBar>

        <b>Why Let's Go Biotech Exists</b> 

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 3 
                }}>

              <p className={styles.aboutUsText}>
                         We have to cure all disease and create a sustainable planet Earth for our kids! 
                         By understanding and implementing biotech knowledge we can do it!
              </p>


            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              href="/"
              sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
            >
              Let's Go
            </Button>
        </Box>
    </Box>
  );
}

