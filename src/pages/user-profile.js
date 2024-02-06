// User Profile Page
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Button, Typography, Input} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function UserProfile() {

    const router = useRouter();

    const [name, setName] = useState('very smart person');
    const [email, setEmail] = useState('testemail555@letsgobiotech.com');
    const [password, setPassword] = useState('');
    const [isUserLoggedIn, setUserLoginStatus] = useState(false);
    const [newUserDetected, setNewUserDetected] = useState(false);
    const [showMenu, toggleMenu] = useState(false);


    const [savedArticles, setSavedArticles] = useState([]);
    const [savedPapers, setSavedPapers] = useState([]);

    const goHome = () => {
        router.push('/');
    }

    const handleLoginInputs = (event) => {
        // figure out which type of input was changed and change that specific input 
        if (event.target.id === 'userName') {
            setName(event.target.value);
        }
    
        if (event.target.id === 'userPassword') {
            setPassword(event.target.value);
        }
    }

    const goToSignUpPage = () => { router.push('/sign-up'); }

    const goToAboutUsPage = () => { router.push('/about-us'); }

    function checkPassword(givenPassword, actualPassword) {

        if (givenPassword === actualPassword) {
            return true;
        }

        else {
            return false;
        }

    }

    const checkUserInDb = async (name) => {

        
            const response = await fetch(`/api/get-specific-user?name=${name}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            console.log(response);

            if (!response.ok) {
                throw new Error('Failed to get specific user');
            }
    
            const user = await response.json();
            

            let passwordCheck;
            if (user.user.rowCount > 0) {
                 passwordCheck = checkPassword(password, user.user.rows[0]['password']);
            }
            
            if (user.user.rowCount > 0 && passwordCheck === true) {

                console.log(`trigger a function that displays user data for ${name}`);
                console.log(`number of user rows from db is ${user.user.rowCount} `);
                setUserLoginStatus(true);
            }
            
            else if (user.user.rowCount > 0 && passwordCheck === false) {
                alert(`hi ${name} it looks like you did not type in the right password for your Let's Go Biotech Account.` + `\n` + `Try again, you got this!` );
                console.log(`hi ${name} it looks like you did not type in the right password for your Let's Go Biotech Account.`);
            }

            else {

                alert(`hi ${name}, it seems like you do not have an account with Let's Go Biotech. No Worries, click Sign Up and we'll get you going fast!`);
                setNewUserDetected(true);
            }

            // else {
            //     // setNewUserDetected(true);

            //     if (user.user.rowCount === 0) {
            //         // console.log(`hi ${name} it looks like you don't have a Let's Go Biotech Account, Please Sign Up for one!`);
            //         alert("user not found in database");
            //     }

            //     else if (user.user.rowCount > 0 && passwordCheck === false) { 
            //         // console.log(`hi ${name} it looks like you did not type in the right password for your Let's Go Biotech Account.`);
                    
            //     }
            // }

            return user;
        //} 
        
        // catch (error) {
        //     console.error('Error getting user:', error);
        // }
    }




    //////////////////////////////////////////////

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

                        { !isUserLoggedIn ?
                            
                            (<div>
                                    <b><span><i><h2>Login to your Let's Go Biotech Account</h2></i></span></b> 
                                    <Input id="userName" placeholder="your username" onChange={handleLoginInputs}/> <br />
                                    <Input id="userPassword" placeholder="your password" onChange={handleLoginInputs} /> <br /> <br />
                                <Button onClick={ () => checkUserInDb(name) }>Login</Button>
                            </div>) :

                            (
                                <div>
                                    <b><span><i><h2>Hello { name }, welcome to your Let's Go Biotech Account</h2></i></span></b> 
                                    <br />

                                    <div>
                                        <p>Your email: { email }</p>

                                        <div>
                                            <b>Saved Articles</b> <br />
                                            <p>Article Name X</p>  <p>Article Name Y</p>   <p>Article Name Z</p> 
                                        </div>

                                        <div>
                                            <b>Saved Papers</b>
                                            <p>Paper Name X</p>  <p>Paper Name Y</p>   <p>Paper Name Z</p>
                                        </div>
                                    </div>
                                    <Button onClick={() => (setUserLoginStatus(!isUserLoggedIn))}>Log Out</Button> <br />

                                    { isUserLoggedIn }
                                </div>



                            )

                        }

                           
                           
                           {
                                newUserDetected
                                    ?
                            <div>
                                <b> Hi {name}, nice to meet you!  Let's Get You Signed Up! </b>
                                <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }} href='/sign-up'>Sign Up</Button><br />
                            </div>
                                  :
                                  ""
                            }

                            </Box>

                        



            </Box>
        );
    }