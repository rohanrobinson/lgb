import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Button, Typography, Input } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function UserProfile() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [newUserDetected, setNewUserDetected] = useState(false);
  const [showMenu, toggleMenu] = useState(false);

  const goHome = () => router.push({ pathname: '/', query: { username: name } });
  const goToSignUpPage = () => router.push('/sign-up');
  const goToAboutUsPage = () => router.push('/about-us');

  const handleLoginInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'userName') setName(event.target.value);
    if (event.target.id === 'userPassword') setPassword(event.target.value);
  };

  const checkUserInDb = async (userName: string) => {
    const response = await fetch(`/api/get-specific-user?name=${userName}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Failed to get specific user');
    const user = await response.json();

    if (user.user.rowCount > 0) {
      const passwordMatch = password === user.user.rows[0]['password'];
      if (passwordMatch) {
        goHome();
      } else {
        alert(`hi ${userName}, incorrect password. Try again!`);
      }
    } else {
      alert(`hi ${userName}, you don't have an account yet. Click Sign Up!`);
      setNewUserDetected(true);
    }
    return user;
  };

  const showMenuItems = () => (
    <div className={styles.menuItems}>
      <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 0.5 }} onClick={goToSignUpPage}>
        <span className={styles.navBarText}>Sign Up</span>
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={goToAboutUsPage}>
        <span className={styles.navBarText}>About</span>
      </Typography>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: 3, p: 3 }}>
      <Head>
        <title>Let's Go Biotech - Sign In</title>
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
        <Input id="userName" placeholder="your name" onChange={handleLoginInputs} /><br />
        <Input id="userPassword" placeholder="your password" onChange={handleLoginInputs} /><br />
        <Button variant="contained" color="secondary" onClick={() => checkUserInDb(name)}>Sign In</Button>
        {newUserDetected && (
          <div>
            <b>Hi {name}, let's get you signed up!</b><br />
            <Button variant="contained" color="secondary" href="/sign-up">Sign Up</Button>
          </div>
        )}
      </Box>
    </Box>
  );
}
