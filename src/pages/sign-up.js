// Sign Up Page 
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button, Input } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

export default function SignUp() {

  const router = useRouter();
  
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showMenu, toggleMenu] = useState(false);

  const [userAccountMade, setAccount] = useState(false);

  const goHome = () => {
    router.push('/');
  }

  const goToAboutUsPage = () => {
    router.push('/about-us');
  }

  const goToAccountPage = () => {
    router.push('/user-profile');
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

  const showMenuItems = () => {
    
    return(
      <div className={styles.menuItems}>
        <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 0.5 }} onClick={goToAccountPage}>
          <span className={styles.navBarText}>Your Account</span>  
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={goToAboutUsPage}>
          <span className={styles.navBarText}>About</span>
        </Typography>
      </div>
    );
}

  function validateUserInput(userData) {
      console.log();
      console.log(userData);
      console.log("-------");
  }

  const addUserToDB = async () => {
      try {   

        //make a JSON object to represent new User 
        const userData = {userName: name, userRole: role, userEmail: email, userPassword: password}

        validateUserInput(userData);
        
        //Make a POST request to your API endpoint
        const response = await fetch(`/api/add-user?name=${name}&role=${role}&email=${email}&password=${password}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(name, role, email, password),
        });

        if (!response.ok) {
          throw new Error('Failed to add user data');
        } 

        else {
          setAccount(true);
        }

    }
    
    catch (error) {
      console.error(error);
    };

}

  return (
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
        <title>Let's Go Biotech - Home Page</title>
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
        gap: 1,
        mt: 4,
      }}>

      <div className={styles.headers}>
                <b><span><i><h2>The Time is Now!</h2></i></span></b> 
                <p>Sign Up for a Let's Go Biotech Account</p>
                <Input id="userName" placeholder="your name" onChange={handleInputChange}/> <br />
                <Input id="userRole" placeholder="your role" onChange={handleInputChange} /> <br />
                <Input id="userEmail" placeholder="your email" onChange={handleInputChange} /> <br />
                <Input id="userPassword" placeholder="your password" onChange={handleInputChange} />
      </div><br />

      <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }} onClick={addUserToDB}>Sign Up</Button><br />


     { userAccountMade ?<div><p>Thanks for signing up {name}! Email me at rohan@letsgobiotech.com if you have any questions! </p></div> : <div></div> }



  </Box>
  
  </Box>
  );
}

