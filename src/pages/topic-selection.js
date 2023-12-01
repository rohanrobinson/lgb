import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function TopicSelection() {

  const router = useRouter();

  const selectedTopics = router.query.selectedTopics;

  const [featuredArticles, setArticles] = useState([]);
  const [featuredURLs, setURLs] = useState([]);

  const [articleURLPairs, setPairs] = useState([]);

  const goHome = () => {
    router.push('/');
  }
  
  const getArticlesFromDB = async () => {
    try {
      // Make a GET request to your API endpoint
      const response = await fetch('/api/get-articles');
      
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }
      
      const data = await response.json();
      const articles = data.articles;

      const articleNames = articles.rows.map((article) => article.name);
      const articleURLs = articles.rows.map((article) => article.url);

      const nameURLPairs = [];
      for (let i=0; i<articleNames.length; i++) {
        nameURLPairs.push([articleNames[i], articleURLs[i]]);
      }

      console.log(nameURLPairs);

      setArticles(articleNames);
      setURLs(articleURLs);
      setPairs(nameURLPairs);

    }    
    catch (error) {
      // Handle the error appropriately
      console.error(error);
    }
  };

  function handlePairClick(pair, index) {
    console.log('clicked pair:', pair);
    console.log("Index:", index);
    const url = pair[1];
    window.open(url, "_blank");
  }

   useEffect(() => {  getArticlesFromDB(); }, []); 

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh' 
    }}>
      <Head>
        <title>Let's Go Biotech - Featured Articles</title>
        <meta name="description" content="created by Rohan Cain Robinson" />
      </Head>

      <AppBar position="fixed" color="secondary">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer} onClick={goHome}>
            🧬 Let's Go Biotech
            </Typography>
        </Toolbar>
      </AppBar>
    
      <p><i><b>The below biotech articles may interest you!</b></i></p>        
      
      <br />

      <br />

      <div>
            {articleURLPairs.map((pair, index) => (
              <p key={index}  onClick={() => handlePairClick(pair, index)}><b>{pair[0]}</b> &rarr; &nbsp; <i>{pair[1]}</i></p>
            ))}
      </div> 

    <br />

      <Button 
                variant="contained" 
                color="success" 
                size="large" 
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }}
                href="/save-info"
        >
            Done Reading? 
      </Button>

    <br />

      <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }}
                href="/"
        >
            Back 
      </Button>

      <div>



      </div>

    </Box>
  );
}

