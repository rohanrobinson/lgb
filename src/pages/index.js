 // The Landing Page 

 import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Button, Typography, Input } from '@mui/material';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  const [articleSet, setArticles] = useState([]);
  const [paperSet, setPapers]  = useState([]);


  const goToAboutUsPage = () => { router.push('/about-us'); }
  
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
      
      console.log(articleNamesMapped);
      console.log(articleURLsMapped);

      const articleNames = [];
      for (let i =0; i<articleNamesMapped.length; i++ ) {
        articleNames.push(articleNamesMapped[i]);
        console.log(articleNamesMapped[i]);
      }

      setArticles(articleNames);

      console.log(articleSet);

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

      
      const paperTitles = [];
      for (let i =0; i<paperTitlesMapped.length; i++ ) {
        paperTitles.push(paperTitlesMapped[i]);
        console.log(paperTitlesMapped[i]);
      }

      setPapers(paperTitles);
      

      console.log(paperSet);

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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            🧬 Let's Go Biotech 
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={goToAboutUsPage}>
              About
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
            <b><span><i><h2>Get Smart on Biotechnology</h2></i></span></b> 
              <p>Save Time by Staying Updated Curated Biotech Papers and Articles</p>
              
              <div>
                <div>
                  <b><i>Papers</i></b> <br />

                  {paperSet.map((paper, index) => (
                    <p className={styles.coolPaper} key={index}>{paper}</p>
                  ))
                  }
                </div>              
                
                <div>
                  <b><i>Articles</i></b> <br />

                  {articleSet.map((article, index) => (
                  <p className={styles.coolArticle} key={index}>{article}</p>
                   ))
                  }

                </div>
              </div>

            {/* <Button
              onClick={getArticlesFromDB}
            >
              Test Get Articles Function
            </Button>

            <Button
              onClick={getPapersFromDB}
            >
              Test Get Papers Function
            </Button> */}

        </Box>
      </Box>
    );
}
