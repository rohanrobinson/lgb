 // The Landing Page 
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Button, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Home() {

  const router = useRouter();

  const [articleSet, setArticles] = useState([]);
  const [paperSet, setPapers]  = useState([]);
  const [showMenu, toggleMenu] = useState(true);

  const goToAboutUsPage = () => { router.push('/about-us'); }
  
  const goToSignUpPage = () => { router.push('/sign-up'); }

  const goToProfilePage = () => { router.push('/user-profile'); }

  const showMenuItems = () => {
    
        return(
          <div className={styles.menuItems}>
            <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 0.5 }} onClick={goToSignUpPage}>
              <span className={styles.navBarText}>Sign Up</span>  
            </Typography>
            <Typography variant="h6" component="div" className={styles.navBarText} sx={{ flexGrow: 0.5 }} onClick={goToProfilePage}>
              <span className={styles.navBarText}>Your Account</span>  
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={goToAboutUsPage}>
              <span className={styles.navBarText}>About</span>
            </Typography>
          </div>
        );
}


  const getArticlesFromDB = async () => {
    
    try {
      const response = await fetch('/api/get-articles');

      if (!response.ok) {
        throw new Error('Failed to get users');
      }

      const data = await response.json();
      const articles = data.articles;

      const articleNamesMapped = articles.rows.map((articles) => articles.name);

      const articleURLsMapped = articles.rows.map((articles) => articles.url);
      

      const articleNames = [];
      for (let i =0; i<articleNamesMapped.length; i++ ) {
        articleNames.push([articleNamesMapped[i], articleURLsMapped[i]]);
        console.log(articleNamesMapped[i], articleURLsMapped[i]);
      }

      setArticles(articleNames);

    }

    catch (error) {
      console.error(error);
    }

  }

  const getPapersFromDB = async () => {
    try {
      const response = await fetch('/api/get-papers');

      if (!response.ok) {
        throw new Error('Failed to get papers');
      }

      const data = await response.json();
      const papers = data.papers;

      const paperTitlesMapped = papers.rows.map((papers) => papers.title);
      const paperURLsMapped = papers.rows.map((papers) => papers.url);
      
      const paperTitles = [];
      for (let i =0; i<paperTitlesMapped.length; i++ ) {
        paperTitles.push([paperTitlesMapped[i], paperURLsMapped[i]]);
      }
      setPapers(paperTitles);
    }

    catch (error) { 
      console.error(error);
    }
  }

  useEffect(() => {
    getArticlesFromDB();
    getPapersFromDB();
  }, []);

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
              <div className={styles.headers}>
                  <b><span><i><h2>Get Smart on Biotechnology</h2></i></span></b> 
                  <p>Check out some Curated Papers and Articles</p>
              </div>
              <div>
                <div>
                  <b><i>Papers</i></b> <br />
                  {paperSet.map((paper, index) => (
                    <a href={paper[1]} target="_blank"><p className={styles.coolPaper} key={index}>{paper[0]}</p></a>
                  ))
                  }
                </div>              
                <div>
                  <b><i>Articles</i></b> <br />
                  {articleSet.map((article, index) => (
                  <a href={article[1]} target="_blank"><p className={styles.coolArticle} key={index}>{article[0]}</p></a>
                   ))
                  }
                </div>

              </div>
        </Box>
      </Box>
    );
}
