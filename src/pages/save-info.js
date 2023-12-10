import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button, Input } from '@mui/material';
import { useRouter } from 'next/router';

export default function SaveInfo() {

  const router = useRouter();
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [nameRolePairs, setPairs] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userAccountMade, setAccount] = useState(false);

  const goHome = () => {
    router.push('/');
  }

  const handleInputChange = (event) => {
    // figure out which type of input was changed and change that specific input 
    if (event.target.id === 'userName') {
      setName(event.target.value);
    }

    if (event.target.id === 'userRole') {
      setRole(event.target.value);
    }

    if (event.target.id === 'userEmail') {
      setEmail(event.target.value);
    }

    if (event.target.id === 'userPassword') {
      setPassword(event.target.value);
    }
  }

  // const addUserToDB = async () => {
  //   try {

  //     //make a JSON object to represent new User 
  //     const userData = {userName: name, userRole: role, userEmail: email, userPassword: password, userId: 42 }

  //     console.log(userData);
      
  //     //Make a POST request to your API endpoint
  //     const response = await fetch('/api/add-user', {
      
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(userData),
      
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to add user data');
  //     } 

  //     else { 
  //       setAccount(true);
  //     }
      
  //     const data = await response.json();
  //     const users = data.users;
      
  //   } catch (error) {
  //     console.error(error);

  //   }
  // };

  const getUsersFromDB = async () => {
    
    try {
      const response = await fetch('/api/get-users');

      if (!response.ok) {
        throw new Error('Failed to get users');
      }

      const data = await response.json();
      const users = data.users;

      const userNames = users.rows.map((user) => user.name);
      const userRoles = users.rows.map((user) => user.role);

      const nameRolePairs = [];
      for (let i =0; i<userNames.length; i++) {
        nameRolePairs.push([userNames[i], userRoles[i]]);
      }
      console.log(nameRolePairs);
      setPairs(nameRolePairs);

    }

    catch (error) {
      console.error(error);
    }

  }

  return (
    <Box sx={{  display: 'flex',  flexDirection: 'column',  alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Head><title>Let's Go Biotech - Make Account</title><meta name="description" content="created by Rohan Cain Robinson" /></Head>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer} onClick={goHome}>
            🧬 Let's Go Biotech
            </Typography>
        </Toolbar>
      </AppBar>
    
      <p><i><b>Save What You've Read</b></i></p><br />
      
      <div>
            <b>Make a Let's Go Biotech Account</b><br />
            <Input id="userName" placeholder="your name" onChange={handleInputChange}/> <br />
            <Input id="userRole" placeholder="your role" onChange={handleInputChange} /> <br />
            <Input id="userEmail" placeholder="your email" onChange={handleInputChange} /> <br />
            <Input id="userPassword" placeholder="your password" onChange={handleInputChange} />
      </div><br />

      <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }} onClick={getUsersFromDB}>Create Account</Button><br />

      <div>
        { !userAccountMade ? "" : <p>Nice to have you {name}, we're happy to have you here at Let's Go Biotech!</p> }
      </div> <br />
   
      <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }} href="/topic-selection">Back</Button>
    </Box>
  );
}

