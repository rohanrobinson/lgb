import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button, Input } from '@mui/material';
import { useRouter } from 'next/router';

export default function AdminPortal() {

  const router = useRouter();

  // needed info to add an article
  const [ articleName, setName] = useState('');
  const [ articleAuthor, setAuthor] = useState('');
  const [ articleTopic, setTopic] = useState('');
  const [ articleURL, setURL] = useState('');

  // needed info to add a paper 
  const [ paperTitle, setTitle] = useState('');
  const [ paperAuthor, setPaperAuthor] = useState('');
  const [ paperTopic, setPaperTopic] = useState('');
  const [ paperURL, setPaperURL] = useState('');

  // needed info to add a company
  const [ nameOfCompany, setCompanyName] = useState('');
  const [ dateStarted, setStartDate] = useState('');
  const [ productCategory, setCategory] = useState('');
  const [ headquarterLocation, setHQ] = useState(''); 

  // needed info to add a user
  const [name, setUserName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goHome = () => {
    router.push('/');
  }

  const handleInputChange = (event) => {
    // figure out which type of input was changed and change that specific input 
    if (event.target.id === 'articleName') {
      setName(event.target.value);
    }

    else if (event.target.id === 'articleURL') {
      setURL(event.target.value);
    }

    else if (event.target.id === 'articleTopic') {
      setTopic(event.target.value);
    }

    else if (event.target.id === 'articleAuthor') {
      setAuthor(event.target.value);
    }

    else if (event.target.id === 'paperTitle') { 
      setTitle(event.target.value);
    }

    else if (event.target.id === 'paperAuthor') { 
      setPaperAuthor(event.target.value);
    }

    else if (event.target.id === 'paperTopic') {
      setPaperTopic(event.target.value);
    }

    else if (event.target.id === 'paperURL') {
      setPaperURL(event.target.value);
    }

    else if (event.target.id === 'nameOfCompany') {
      setCompanyName(event.target.value);
    }

    else if (event.target.id === 'dateStarted') {
      setStartDate(event.target.value);
    }

    else if (event.target.id === 'productCategory') {
      setCategory(event.target.value);
    }

    else if (event.target.id === 'headquarterLocation') {
      setHQ(event.target.value);
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
              }

            const addedArticle = await response.json();
            console.log('Article added:', addedArticle);
            return addedArticle;
        }
        catch (error) {
            console.error('Error adding article:', error);
        }
  }

  const removeArticlesFromDB = async () => {
  
    try {
        const response = await fetch('/api/remove-all-articles'); 

        if (!response.ok) {
          throw new Error('Failed to remove articles');
        }
    }

    catch (error) {
      console.error("Error removing articles:", error);
    }

  }

  const addPaperToDB = async (paperTitle, paperAuthor, paperTopic, paperURL) => {
       
        try {
          const response = await fetch(`/api/add-paper?paperTitle=${paperTitle}&paperAuthor=${paperAuthor}&paperURL=${paperURL}&paperTopic=${paperTopic}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(paperTitle, paperAuthor, paperTopic, paperURL),
          });

        if (!response.ok) {
            throw new Error('Failed to add paper');
          }

        const addedArticle = await response.json();
        console.log('Paper added:', addedArticle);
        return addedArticle;
      }

      catch (error) {
          console.error("Error adding paper to database", error);
        }
  }

  const addCompanyToDB = async (nameOfCompany, dateStarted, productCategory, headquarterLocation) => {

        try {
          const response = await fetch(`/api/add-company?Name=${nameOfCompany}&dateStarted=${dateStarted}&productCategory=${productCategory}&headquarterLocation=${headquarterLocation}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(nameOfCompany, dateStarted, productCategory, headquarterLocation),
          });

          if (!response.ok) {
              throw new Error('Failed to add company');
          }
        }

        catch (error) {
            console.error("Error adding company to database", error);
        }
  }

  const removePapersFromDB = async () => {
    try {
      const response = await fetch('/api/remove-all-papers'); 

      if (!response.ok) {
        throw new Error('Failed to remove papers');
      }
  }

  catch (error) {
    console.error("Error removing papers:", error);
  }
  }

const removeUsersFromDB = async () => {
  try {
    const response = await fetch('/api/remove-all-users'); 

    if (!response.ok) {
      throw new Error('Failed to remove users');
    }
}

catch (error) {
  console.error("Error removing users:", error);
}
}

  return (
    <Box sx={{  display: 'flex',  flexDirection: 'column',  alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Head><title>Let's Go Biotech - Admin Article</title><meta name="description" content="created by Rohan Cain Robinson" /></Head>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.navBarText} onClick={goHome}>
            Let's Go Biotech
            </Typography>
        </Toolbar>
      </AppBar>
    
      <p><i><b>Admin Portal</b></i></p>

      <div>
            <b>Add a Paper to Let's Go Biotech</b><br />
            <Input id="paperTitle" placeholder="Paper name" onChange={handleInputChange}/> <br />
            <Input id="paperAuthor" placeholder="Paper author" onChange={handleInputChange} /> <br />
            <Input id="paperTopic" placeholder="Paper topic" onChange={handleInputChange} /> <br />
            <Input id="paperURL" placeholder="Paper URL" onChange={handleInputChange} />
      </div><br />

      <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }} onClick={() => addPaperToDB(paperTitle, paperAuthor, paperTopic, paperURL)}>Add Paper to Database</Button><br />
      
      {/* <div>
            <b>Add an Article to Let's Go Biotech</b><br />
            <Input id="articleName" placeholder="Article name" onChange={handleInputChange}/> <br />
            <Input id="articleAuthor" placeholder="Article author" onChange={handleInputChange} /> <br />
            <Input id="articleTopic" placeholder="Article topic" onChange={handleInputChange} /> <br />
            <Input id="articleURL" placeholder="Article URL" onChange={handleInputChange} />
      </div><br /> */}

      <div>
          <b>Add a Company to Let's Go Biotech</b><br />
          <Input id="nameOfCompany" placeholder="company name" onChange={handleInputChange}/> <br />
          <Input id="dateStarted" placeholder="year company started" onChange={handleInputChange} /> <br />
          <Input id="productCategory" placeholder="product category" onChange={handleInputChange} /> <br />
          <Input id="headquarterLocation" placeholder="headquarter location" onChange={handleInputChange} />
      </div><br/>

      <Button variant="contained" color="secondary" size="medium" sx={{ fontWeight: 'bold', fontSize: '24px', padding: '10px 25px', }} onClick={() => addCompanyToDB(nameOfCompany, dateStarted, productCategory, headquarterLocation)}>Add Company to Database</Button><br />
   

      <h3>Press incase of emergency only! :) </h3>

      <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }} onClick={() => removePapersFromDB()}>Remove Papers from Database</Button><br />

      <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }} onClick={() => removeUsersFromDB()}>Remove Users from Database</Button><br />

      <Button variant="contained" color="secondary" size="medium" sx={{ fontWeight: 'bold', fontSize: '24px', padding: '10px 25px', }} onClick={() => removeArticlesFromDB()}>Remove Articles from Database</Button><br /> <br />

    </Box>
  );
}