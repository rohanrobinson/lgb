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
 
  const handleNameChange = (event) => {
      setName(event.target.value);
  }

  const handleRoleChange = (event) => {
    setRole(event.target.value);
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
    
      <p><i><b>Save Your Progress</b></i></p>   

      <br />
        
      <div>
            <b>Make an account to track your learning!</b>

            <br />

            <br />

            <Input placeholder="your name" onChange={handleNameChange}/> <br />

            <Input placeholder="your role" onChange={handleRoleChange} />
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

