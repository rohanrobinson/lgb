import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button, Input } from '@mui/material';
import { useRouter } from 'next/router';

export default function SaveInfo() {

  const router = useRouter();

  const goHome = () => {
    router.push('/');
  }

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [userAccountMade, setAccount] = useState(false);
 
  const handleNameChange = (event) => {
      setName(event.target.value);
  }

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  }

  const handleTest = () => { 
    
    if (userAccountMade) {
      setAccount(false);
    }
    else {
      setAccount(true);
    }
  }

  const addUserToDB = async () => {
    try {

      //make JSON object to represent new User 
      const userData = {userName: name, userRole: role}

      // Make a POST request to your API endpoint
      const response = await fetch('/api/add-user', {
      
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      
      });

      if (!response.ok) {
        throw new Error('Failed to add user data');
      }

      else { 
        setAccount(true);
      }
      
      const data = await response.json();
      const users = data.users;
      
    } catch (error) {
      console.error(error);

    }
  };

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
    
      <p><i><b>Save What You've Read</b></i></p>   

      <br />
        
      <div>
            <b>Make a Let's Go Biotech Account</b>

            <br />

            <Input placeholder="your name" onChange={handleNameChange}/> <br />

            <Input placeholder="your role" onChange={handleRoleChange} /> <br />

            <Input placeholder="your email" /> <br />

            <Input placeholder="your password" />
      </div>


      <br />

      <Button
                variant="contained" 
                color="secondary" 
                size="large" 
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }}
                onClick={addUserToDB}
      >
        Sign Up
      </Button>

      <br />

      <div>
        { !userAccountMade ? 
        
          <p></p>
          
          :
          
          <p>Nice to have you {name}, we're happy to have you here at Let's Go Biotech!</p>
        }
      </div>

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

