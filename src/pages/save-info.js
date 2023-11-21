import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button, Input } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SaveInfo() {

  const router = useRouter();

  const goHome = () => {
    router.push('/');
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh' 
    }}>
      <Head>
        <title>Let's Go Biotech - Save User Info</title>
        <meta name="description" content="created by Rohan Cain Robinson" />
      </Head>

      <AppBar position="fixed" color="secondary">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer} onClick={goHome}>
            🧬 Let's Go Biotech
            </Typography>
        </Toolbar>
      </AppBar>
    
      <p><i><b>Save Your Progress</b></i></p>   

      <br />
        
      <div>
            <b>Make an account to track your learning!</b>

            <br />

            <br />

            <Input placeholder="your name" /> <br />

            <Input placeholder="email" /> <br />

            <Input placeholder="password" />
      </div>

      <br />

      <br />

      <Button
                variant="contained" 
                color="secondary" 
                size="large" 
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }}
                
      >
        Sign Up
      </Button>

      <br />
   
      <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }}
                href="/topic-selection"
        >
            Back 
      </Button>

    </Box>
  );
}

