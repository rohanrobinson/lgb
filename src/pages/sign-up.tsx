import React, { useState } from 'react';
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
  const [currentUserDetected, setCurrentUserDetected] = useState(false);

  const goHome = () => router.push('/');
  const goToAboutUsPage = () => router.push('/about-us');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === 'userName') setName(value);
    if (id === 'userRole') setRole(value);
    if (id === 'userEmail') setEmail(value);
    if (id === 'userPassword') setPassword(value);
  };

  const showMenuItems = () => (
    <div className={styles.menuItems}>
      <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 0.5 }} onClick={goHome}>
        <span className={styles.navBarText}>Home</span>
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={goToAboutUsPage}>
        <span className={styles.navBarText}>About</span>
      </Typography>
    </div>
  );

  const addUserToDB = async () => {
    const checkRes = await fetch(`/api/get-specific-user?name=${name}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const user = await checkRes.json();

    if (user.user.rowCount === 0) {
      const response = await fetch(
        `/api/add-user?name=${name}&role=${role}&email=${email}&password=${password}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, role, email, password }),
        }
      );
      if (!response.ok) throw new Error('Failed to add user data');
      setAccount(true);
    }

    if (user.user.rowCount > 0) {
      alert(`hi ${name}! it looks like you already have a Let's Go Biotech account. Try signing in!`);
      setCurrentUserDetected(true);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: 3, p: 3 }}>
      <Head>
        <title>Let's Go Biotech - Sign Up</title>
        <meta name="description" content="created by Rohan Cain Robinson" />
      </Head>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 1 }}>
            <span className={styles.navBarText} onClick={goHome}>Let's Go Biotech</span>
          </Typography>
          {!showMenu ? '' : showMenuItems()}
          {!showMenu
            ? <MenuIcon className={styles.navBarText} onClick={() => toggleMenu(!showMenu)} />
            : <span onClick={() => toggleMenu(!showMenu)}><p className={styles.navBarText}><b>X</b></p></span>}
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 4 }}>
        <div className={styles.headers}>
          <b><i><h2>Sign Up for a Let's Go Biotech Account</h2></i></b>
          <Input id="userName" placeholder="your name" onChange={handleInputChange} /><br />
          <Input id="userRole" placeholder="your role" onChange={handleInputChange} /><br />
          <Input id="userEmail" placeholder="your email" onChange={handleInputChange} /><br />
          <Input id="userPassword" placeholder="your password" onChange={handleInputChange} />
        </div><br />
        {currentUserDetected
          ? <div><p>Hey {name}! You already have an account!</p><Button variant="contained" color="secondary" href="/user-profile">Sign In</Button></div>
          : <Button variant="contained" color="secondary" size="large" onClick={addUserToDB}>Sign Up</Button>}
        {userAccountMade && <p>Thanks for signing up {name}!</p>}
      </Box>
    </Box>
  );
}
