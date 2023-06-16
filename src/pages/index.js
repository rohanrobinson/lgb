import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';


export default function Home() {

    const seeAboutUs = () => {
        window.location.href = "http://letsgobiotech.com/about-us";
    }

    return(
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        gap: 3,
        p: 3,
      }}>
        <Head>
          <title>Let's Go Biotech - Home Base</title>
          <meta name="description" content="created by Rohan Cain Robinson" />
        </Head>
      
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Let's Go Biotech 
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={seeAboutUs}>
              About 
            </Typography>
          </Toolbar>
        </AppBar>
      
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 1,
          mt: 4,
        }}>
          <Typography variant="h1" sx={{ mb: 4, textAlign: 'center' }}>
            <b><span className={styles.lgbHeader}> Keep up with the latest Biotechnology Research  </span></b> 
          </Typography>
          <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
            <span className={styles.lgbDescription}>Read some papers and take a short quiz</span>
          </Typography>
        </Box>
      
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 3,
          mt: 3,
            }}>
          <Button 
            variant="contained" 
            color="success" 
            size="large" 
            href="/select-paper"
            sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
          >
            Get Started
          </Button>
      
        </Box>
        
          <Typography variant="body1" sx={{ mb: 5, textAlign: 'center', mt: 3 }}>
            (no need to provide email or create an account) <br/>
          </Typography>
        </Box>
    );
}
