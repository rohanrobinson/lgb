 // The Landing Page 
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Button, Typography, Checkbox} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Home() {

  const router = useRouter();

  const [articleSet, setArticles] = useState([]);
  const [paperSet, setPapers]  = useState([]);
  const [showMenu, toggleMenu] = useState(false);
  const [saveMode, setSaveMode] = useState(true);
  const [selectedPaperList, updatePaperList] = useState([]);
  //const [selectedArticleList, updateArticleList] = useState([]);

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

      const articleNamesMapped = articles.rows.map((articles) => articles.article_name);
      const articleURLsMapped = articles.rows.map((articles) => articles.url);
      

      const articleNames = [];
      for (let i =0; i<articleNamesMapped.length; i++ ) {
        articleNames.push([articleNamesMapped[i], articleURLsMapped[i]]);
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

  function updateSelectedPapers(givenPaperName) {
    let paperNotInList = true;

    let newPaperList = [];

    for (let i=0; i<selectedPaperList.length; i++) {

       let currPaperName = selectedPaperList[i];
       

       if (currPaperName === givenPaperName) {
           paperNotInList = false;
           let newPaperList = selectedPaperList.filter(function(x) { return x !== givenPaperName; });
           updatePaperList(newPaperList);
         }

    }
    
    if (paperNotInList === true) {
  

      for (let i=0; i<selectedPaperList.length; i++) {
        newPaperList.push(selectedPaperList[i]);
      }

      newPaperList.push(givenPaperName);

      updatePaperList(newPaperList);
    }
  }

  function getSelectedPapersList() {
        console.log(selectedPaperList);
  }


  function updateSelectedArticles(articleName) {
    console.log(articleName);
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
                  <Button variant="contained" color="secondary" onClick={() => getSelectedPapersList()}>Get Selected Papers</Button>
              </div>
              <div>
                <div>
                  <b><i>Papers</i></b> <br />
                  {paperSet.map((paper, index) => (
                    <div><a href={paper[1]} target="_blank"><p className={styles.coolPaper} key={index}>{paper[0]}</p></a>{ saveMode ? (<Checkbox className="checkElement" label="test" onChange={() => updateSelectedPapers(paper[0])} />) : "" }</div>
                  ))
                  }
                </div>              
                <div>
                  <b><i>Articles</i></b> <br />
                  {articleSet.map((article, index) => (
                  <div><a href={article[1]} target="_blank"><p className={styles.coolArticle} key={index}>{article[0]}</p></a>{ saveMode ? (<Checkbox className="checkElement" label="test" onChange={() => updateSelectedArticles(article[0])} />) : "" }</div>
                   ))
                  }
                </div>
            {  saveMode ? (<div><Button variant="contained" color="secondary" onClick={() => setSaveMode(!saveMode)}>Save Selected Papers & Articles</Button></div>) : (<Button variant="contained" color="secondary" onClick={() => setSaveMode(!saveMode)}>Activate Save Mode</Button>)}
              </div>
        </Box>
      </Box>
    );
}
