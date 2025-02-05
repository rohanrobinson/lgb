 // Let's Go Biotech homepage
 //  ---> Combines the Sign Up, Login, and and Normal view in one
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Button, Typography, Input} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import boyDNA from '../images/curious-boy-dna-helix-strands.jpg';


export default function Home() {

  const router = useRouter();
  
  // hooks/state variables for page
  const [paperSet, setPapers]  = useState([]);
  const [companySet, setCompanies] = useState([]);
  const [showMenu, toggleMenu] = useState(false);

  const [name, setName] = useState('very smart person');
  const [email, setEmail] = useState('testemail555@letsgobiotech.com');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [isUserLoggedIn, setUserLoginStatus] = useState(false);
  const [newUserDetected, setNewUserDetected] = useState(false);
  const [userAccountMade, setAccount] = useState(false);
  const [showLogin, toggleLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(true);



  // handles navigation to other pages
  const goToAboutUsPage = () => { router.push('/about-us'); }
  const goToSignUpPage = () => { router.push('/sign-up')}

  const showMenuItems = () => {
        return(
          <div className={styles.menuItems}>
            {/* <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 0.5 }} onClick={goToSignUpPage}>
              <span className={styles.navBarText}>Sign Up</span>  
            </Typography> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={goToAboutUsPage}>
              <span className={styles.navBarText}>About</span>
            </Typography>
          </div>
        );
  }

  const getPapersFromDB = async () => {
    try {
      const response = await fetch('/api/get-papers');

      if (!response.ok) {
        throw new Error('Failed to get papers');
      }

      const data = await response.json();
      const papers = data.papers;

      // paper properties
      const paperTitles = papers.rows.map((papers) => papers.title);
      const paperURLs = papers.rows.map((papers) => papers.url);
      const paperAuthors = papers.rows.map((papers) => papers.author);
      const paperTopics = papers.rows.map((papers) => papers.topic);
      
      const paperObjects = [];
      for (let i =0; i<papers.rows.length; i++ ) {
        
        // initialize new paper object
        let paperObj = {}

        // add properties to paper object
        paperObj["title"] = paperTitles[i];
        paperObj["url"] = paperURLs[i];
        paperObj["author"] = paperAuthors[i];
        paperObj["topic"] = paperTopics[i];

        // add paper object to the array of paper objects 
        paperObjects.push(paperObj);

      }
      setPapers(paperObjects);

      console.log(paperObjects);
    }

    catch (error) { 
      console.error(error);
    }
  }

  const logOutUser = () => {
      setName("");
      setUserLoginStatus(false);
      console.log("user has been logged out");
  }

  const getCompaniesFromDB = async () => {
      try {
        const response = await fetch('/api/get-companies');

        if (!response.ok) {
          throw new Error('Failed to get companies');
        }
  
        const data = await response.json();
        const companies = data.companies;

        // company properties
        const companyHQs = companies.rows.map((companies) => companies.headquarter_location);
        const companyNames = companies.rows.map((companies) => companies.name);
        const companyDatesStarted = companies.rows.map((companies) => companies.date_started);
        const companyProd = companies.rows.map((companies) => companies.product_category);

        console.log(companyHQs, companyNames, companyDatesStarted, companyProd);
        console.log("number of companies in db", companies.rows.length);
        
        let companyObjects = [];
        // make company objects 
        for (let i=0; i<companies.rows.length; i++) { 
            // initialize object
            let companyObj  = {}
      
            // add properties to object 
            companyObj["name"] = companyNames[i];
            companyObj["dateStarted"] = companyDatesStarted[i];
            companyObj["product"] = companyProd[i];
            companyObj["hqLocation"] = companyHQs[i];

            // add object to list
            console.log(companyObj);
            companyObjects.push(companyObj);
        }

       
        setCompanies(companyObjects);
          

    }
      catch (error) {
        console.error(error);
      }
  }


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



      return user;
  }

  const addUserToDb = async () => {
      
    const userName = name;

    const checkUserNameResponse = await fetch(`/api/get-specific-user?name=${userName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    const user = await checkUserNameResponse.json();

    console.log(user.user.rowCount);

    if (user.user.rowCount === 0) {

        //make a JSON object to represent new User 
        const userData = {userName: name, userRole: role, userEmail: email, userPassword: password}

        //Make a POST request 
        const response = await fetch(`/api/add-user?name=${userData.userName}&role=${userData.userRole}&email=${userData.userEmail}&password=${userData.userPassword}`, {
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

   if (user.user.rowCount > 0) { 
        alert(`hi ${name}! it looks like you already have a Let's Go Biotech account. Try signing in! `)
        setCurrentUserDetected(true);
    }

  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleLoginInputs = (event) => {
      // figure out which type of input was changed and change that specific input 
      if (event.target.id === 'userName') {
          setName(event.target.value);
          }

      if (event.target.id === 'userPassword') {
          setPassword(event.target.value);
      }
    }

  const handleSignUpInputs = (event) => {
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

  function getInfoFromDB() {
    getPapersFromDB();
    // getCompaniesFromDB();
  }

  // This interacts with the vercel postgres db, it runs automatically when the page loads 
  useEffect(() => {
     getInfoFromDB();
  }, []); 
  // --- --- --- --- --- 
  
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
            <div className={styles.biotechPapers}>
                  <h3>Keep up with the fast moving biotech industry!</h3>
                  <b><i>We create quizzes on fun research papers!</i></b> <br />
            </div>
        </Box>
        <Box>
            <p className={styles.coolPaper}>Central Dogma</p>

              {paperSet.map((paper, index) => (
                    <div>
                      <Link
                            href={{
                              pathname: '/paper',
                              query: { paperTitle: paper["title"], paperAuthor: paper["author"], paperURL: paper["url"], paperTopic: paper["topic"], userName: name },
                            }} >
                              <p className={styles.coolPaper}>{paper["title"]}</p>
                      </Link>
                      </div>
                  ))
              }
          </Box>
      </Box>
    );
}
