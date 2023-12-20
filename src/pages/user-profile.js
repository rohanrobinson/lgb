// User Profile Page

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Button, Typography, Input} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function UserProfile() {

    const router = useRouter();

    const [name, setName] = useState('very smart person');
    const [role, setRole] = useState('Force for good');
    const [email, setEmail] = useState('testemail555@letsgobiotech.com');
    const [password, setPassword] = useState('');
    const [isUserLoggedIn, setUserLoginStatus] = useState(false);
    const [showMenu, toggleMenu] = useState(true);


    const [savedArticles, setSavedArticles] = useState([]);
    const [savedPapers, setSavedPapers] = useState([]);

    const goHome = () => {
        router.push('/');
    }

    const handleLoginInputs = (event) => {
        // figure out which type of input was changed and change that specific input 
        if (event.target.id === 'userName') {
            console.log(event.target.value);
            setName(event.target.value);
        }
    
        if (event.target.id === 'userPassword') {
            console.log(event.target.value);
            setPassword(event.target.value);
        }
    }

    const goToSignUpPage = () => { router.push('/sign-up'); }

    const goToAboutUsPage = () => { router.push('/about-us'); }

    // IMPORTANT FUNCTION TO WRITE, IT'LL INTERACT WITH THE DATABASE
    const checkUserInDb = (event) => {
        console.log("implement functionality that makes sure user is in db");
    }
    ///////////////////////

    const showMenuItems = () => {
    
        return(
          <div className={styles.menuItems}>
            <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 0.5 }} onClick={goToSignUpPage}>
              <span className={styles.navBarText}>Sign Up</span>  
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={goToAboutUsPage}>
              <span className={styles.navBarText}>About</span>
            </Typography>
          </div>
        );
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
                  <title>Let's Go Biotech - User Profile Page</title>
                  <meta name="description" content="created by Rohan Cain Robinson" />
                </Head>
                <AppBar position="fixed" color="secondary">
                    <Toolbar>
                        <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 1 }}>
                        <span className={styles.navBarText}>Let's Go Biotech </span>
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

                        { !isUserLoggedIn ?
                            
                            (<div className={styles.headers}>
                                    <b><span><i><h2>Login to your Let's Go Biotech Account</h2></i></span></b> 
                                    <Input id="userName" placeholder="your username" onChange={handleLoginInputs}/> <br />
                                    <Input id="userPassword" placeholder="your password" onChange={handleLoginInputs} /> <br />
                                <Button onClick={() => (setUserLoginStatus(!isUserLoggedIn))}>Login</Button>

                            </div>) :

                            (
                                <div>
                                    <b><span><i><h2>Hello { name }, welcome to your Let's Go Biotech Account</h2></i></span></b> 
                                    <br />

                                    <div>
                                        <p>Your role: { role }</p>
                                        <p>Your email: { email }</p>



                                        <div>
                                            <b>Saved Articles</b>
                                            <p>Article Name X</p>  <p>Article Name Y</p>   <p>Article Name Z</p> 
                                        </div>

                                        <div>
                                            <b>Saved Papers</b>
                                            <p>Paper Name X</p>  <p>Paper Name Y</p>   <p>Paper Name Z</p>
                                        </div>
                                    </div>
                                    <Button onClick={() => (setUserLoginStatus(!isUserLoggedIn))}>Log Out</Button>
                                </div>



                            )

                            }
                    

                            </Box>

                        



            </Box>
        );
    }