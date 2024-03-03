 // Let's Go Biotech homepage
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Button, Typography, Checkbox} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Home() {

  const router = useRouter();

  // hooks for page
  const [articleSet, setArticles] = useState([]);
  const [paperSet, setPapers]  = useState([]);
  const [companySet, setCompanies] = useState([]);
  const [showMenu, toggleMenu] = useState(false);
  const [saveMode, setSaveMode] = useState(false);
  const [selectedPaperList, updatePaperList] = useState([]);
  const [selectedArticleList, updateArticleList] = useState([]);
  const [userLoggedIn, toggleUserLoggedIn] = useState(true);

  // handles navigation to other pages
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
  
  const handleLogin = () => {
      if (userLoggedIn === false) {
         alert("hello, thanks for using Let's Go Biotech! To save papers and articles, we need you to either login or sign up for an account!");
         router.push('/user-profile');
      }

      if (userLoggedIn === true) {
        setSaveMode(!saveMode);
      }

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

  const getCompaniesFromDB = async () => {
      try {
        const response = await fetch('/api/get-companies');

        if (!response.ok) {
          throw new Error('Failed to get companies');
        }
  
        const data = await response.json();
        const companies = data.companies;
  
        const companyNamesMapped = companies.rows.map((companies) => companies.name);
        
        const companyNames = [];
        for (let i =0; i<companyNamesMapped.length; i++ ) {
          companyNames.push([companyNamesMapped[i]]);
        }
        setCompanies(companyNames);
          
      }
      catch (error) {
        console.error(error);
      }
  }

  function updateSelectedPapers(givenPaperName) {
    let givenPaperIsNotInList = true;
    let newPaperList = [];

    for (let i=0; i<selectedPaperList.length; i++) {
       let currPaperName = selectedPaperList[i];

       if (currPaperName === givenPaperName) {
           givenPaperIsNotInList = false;
           let newPaperList = selectedPaperList.filter(function(x) { return x !== givenPaperName; });
           updatePaperList(newPaperList);
         }
    }
    
    if (givenPaperIsNotInList === true) {

      for (let i=0; i<selectedPaperList.length; i++) {
        newPaperList.push(selectedPaperList[i]);
      }

      newPaperList.push(givenPaperName);
      updatePaperList(newPaperList);
    }
  }

  function updateSelectedArticles(givenArticleName) {
    let givenArticleIsNotInList = true;

    let newArticleList = [];

    for (let i=0; i<selectedArticleList.length; i++) {

       let currArticleName = selectedArticleList[i];
       
       if (currArticleName === givenArticleName) {
           givenArticleIsNotInList = false;
           let newArticleList = selectedArticleList.filter(function(x) { return x !== givenArticleName; });
           updateArticleList(newArticleList);
         }

    }
    
    if (givenArticleIsNotInList === true) {
  

      for (let i=0; i<selectedArticleList.length; i++) {
        newArticleList.push(selectedArticleList[i]);
      }

      newArticleList.push(givenArticleName);

      updateArticleList(newArticleList);
    }
  }


  // used to test that the right number of papers and articles are recognized 
  function getSelectedPapersList() {
        console.log(selectedPaperList);
  }

  function getSelectedArticlesList() {
        console.log(selectedArticleList);
  }

  function getInfoFromDB() {
    getArticlesFromDB();
    getPapersFromDB();
    getCompaniesFromDB();
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
              <div className={styles.headers}>
                  <b><span><i><h2>Get Curated Biotech Papers and Companies Everyday</h2></i></span></b> 
             {/* { !userLoggedIn ? <Button variant="contained" color="secondary" onClick={() => goToProfilePage() }>Log In</Button> : <p>Hi! We're glad you're here!</p> } */}
              </div>
              <div>
                <div>
                  <b><i>Biotech Papers</i></b> <br />
                  {paperSet.map((paper, index) => (
                    <div>
                      {/* <a href={paper[1]} target="_blank"><p className={styles.coolPaper} key={index}>{paper[0]}</p></a>{ saveMode ? (<Checkbox className="checkElement" label="test" onChange={() => updateSelectedPapers(paper[0])} />) : "" } */}
                      { saveMode ? (<Checkbox className="checkElement" label="test" onChange={() => updateSelectedPapers(paper[0])} />) : "" }
                      <Link
       
                            href={{
                              pathname: '/paper',
                              query: { paperName: paper[0] },
                            }}
                          
                            >
                              <p className={styles.coolPaper}>                          
                                  {paper[0]}
                              </p>

                      </Link>
                      
                      </div>
                  ))
                  }
                </div>              
                {/* <div>
                  <b><i>Articles</i></b> <br />
                  {articleSet.map((article, index) => (
                  <div><a href={article[1]} target="_blank"><p className={styles.coolArticle} key={index}>{article[0]}</p></a>{ saveMode ? (<Checkbox className="checkElement" label="test" onChange={() => updateSelectedArticles(article[0])} />) : "" }</div>
                   ))
                  }
                </div> */}
                <div>
                  <b><i>Biotech Companies</i></b> <br />
                  {companySet.map((company, index) => (
                    <div>
                    { saveMode ? (<Checkbox className="checkElement" label="test" onChange={() => updateSelectedArticles(article[0])} />) : "" }
                    {/* // <div><p className={styles.coolArticle} key={index}>{company[0]}</p> */}
                  <Link
       
                  href={{
                    pathname: '/company',
                    query: { companyName: company[0] },
                  }}
                
                  >
                    <p className={styles.coolArticle}>
                    {company[0]}
                  </p>
              </Link>
              </div>
                   ))
                  }
                </div>
            {  saveMode ? (<div><Button variant="contained" color="secondary" onClick={() => { setSaveMode(!saveMode); }}>Save Selected Papers & Companies</Button></div>) : (<Button variant="contained" color="secondary" onClick={() => { handleLogin(); } }>Activate Save Mode</Button>)}
              </div>
              <div>
              </div>
        </Box>
      </Box>
    );
}
