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
  const [userLoggedIn, toggleUserLoggedIn] = useState(false);

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
              </div>

              <div>
                <div>
                  <b><i>Biotech Papers</i></b> <br />
                  {paperSet.map((paper, index) => (
                    <div>
                      { saveMode ? (<Checkbox className="checkElement" label="test" onChange={() => updateSelectedPapers(paper[0])} />) : "" }
                      <Link
                            href={{
                              pathname: '/paper',
                              query: { paperTitle: paper["title"], paperAuthor: paper["author"], paperURL: paper["url"], paperTopic: paper["topic"] },
                            }} >
                              <p className={styles.coolPaper}>                                                            {paper["title"]}
                              </p>
                      </Link>
                      
                      </div>
                  ))
                  }
                </div>              
                <div>
                  <b><i>Biotech Companies</i></b> <br />
                  {companySet.map((company, index) => (
                    <div>
                    { saveMode ? (<Checkbox className="checkElement" label="test" onChange={() => updateSelectedArticles(article[0])} />) : "" }
                  <Link
       
                  href={{
                    pathname: '/company',
                    query: { companyName: company["name"], dateStarted: company["dateStarted"], productCategory: company["product"], headquarterLocation: company["hqLocation"] },
                  }}
                
                  >
                    <p className={styles.coolArticle}>
                       {company["name"]}
                  </p>
              </Link>
              </div>
                   ))
                  }
                </div>
              </div>
              <div>
              </div>
        </Box>
      </Box>
    );
}
