import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button, Input } from '@mui/material';
import { useRouter } from 'next/router';

export default function SaveInfo() {

  const router = useRouter();

  const [ articleName, setName] = useState('');
  const [ articleAuthor, setAuthor] = useState('');
  const [ articleTopic, setTopic] = useState('');
  const [ articleURL, setURL] = useState('');

  const goHome = () => {
    router.push('/');
  }

  const handleInputChange = (event) => {
    // figure out which type of input was changed and change that specific input 
    if (event.target.id === 'articleName') {
      setName(event.target.value);
    }

    if (event.target.id === 'articleURL') {
      setURL(event.target.value);
    }

    if (event.target.id === 'articleTopic') {
      setTopic(event.target.value);
    }

    if (event.target.id === 'articleAuthor') {
      setAuthor(event.target.value);
    }
  }

  const addArticleToDB = async (articleName, articleAuthor, articleTopic, articleURL) => {

        try {
           
            const response = await fetch(`/api/add-article?articleName=${articleName}&articleAuthor=${articleAuthor}&articleURL=${articleURL}&articleTopic=${articleTopic}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(articleName, articleAuthor, articleTopic, articleURL),
              });

            if (!response.ok) {
                throw new Error('Failed to add article');
              }

            const addedArticle = await response.json();
            console.log('Article added:', addedArticle);
            return addedArticle;
        }
        catch (error) {
            console.error('Error adding article:', error);
        }
  }

  return (
    <Box sx={{  display: 'flex',  flexDirection: 'column',  alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Head><title>Let's Go Biotech - Add an Article</title><meta name="description" content="created by Rohan Cain Robinson" /></Head>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer} onClick={goHome}>
            🧬 Let's Go Biotech
            </Typography>
        </Toolbar>
      </AppBar>
    
      <p><i><b>Admin Add Article</b></i></p><br />
      
      <div>
            <b>Add an Article to Let's Go Biotech</b><br />
            <Input id="articleName" placeholder="Article name" onChange={handleInputChange}/> <br />
            <Input id="articleAuthor" placeholder="Article author" onChange={handleInputChange} /> <br />
            <Input id="articleTopic" placeholder="Article topic" onChange={handleInputChange} /> <br />
            <Input id="articleURL" placeholder="Article URL" onChange={handleInputChange} />
      </div><br />

      <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }} onClick={() => addArticleToDB(articleName, articleAuthor, articleTopic, articleURL)}>Add Article to Database</Button><br />
   
      <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }} href="/topic-selection">Back</Button>
    </Box>
  );
}