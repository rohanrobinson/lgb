// User Profile Page

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Button, Typography} from '@mui/material';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function UserProfile() {

    const router = useRouter();

    const [name, setName] = useState('Geetha');
    const [role, setRole] = useState('Grandmother');
    const [email, setEmail] = useState('geeurcool@gmail.com');
    const [savedArticles, setSavedArticles] = useState([]);
    const [savedPapers, setSavedPapers] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    
    const goHome = () => {
        router.push('/');
    }

    const menuToggle = () => {
        setShowMenu(!showMenu);
      };

    const menuOptions = () => {
        return (
            <div>
                <li>About</li>
                <li>Sign Up</li>
                <li>Login</li>
            </div>
        )        
    }
    
    const goToAboutUsPage = () => {
        router.push('/about-us');
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
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer} onClick={goHome}>
                            <span className={styles.navBarText}>Let's Go Biotech</span>
                            </Typography>
                
                            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={goToAboutUsPage}>
                            <span className={styles.navBarText}>About</span>
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
                    
                                <div>
                                    <b><span><i><h2>Hello { name }, welcome to your Let's Go Biotech Account</h2></i></span></b> 
                                </div><br />

                                <div>
                                    <p>Your role: { role }</p>
                                    <p>Your email: { email }</p>


                                    { showMenu }

                                    <div>
                                        <b>Saved Articles</b>
                                        <p>Article Name X</p>  <p>Article Name Y</p>   <p>Article Name Z</p> 
                                    </div>

                                    <div>
                                        <b>Saved Papers</b>
                                        <p>Paper Name X</p>  <p>Paper Name Y</p>   <p>Paper Name Z</p>
                                    </div>
                                </div>
                            </Box>
            </Box>
        );
    }