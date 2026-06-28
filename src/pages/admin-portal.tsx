import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button, Input } from '@mui/material';
import { useRouter } from 'next/router';

export default function AdminPortal() {
  const router = useRouter();

  const [paperTitle, setPaperTitle] = useState('');
  const [paperAuthor, setPaperAuthor] = useState('');
  const [paperTopic, setPaperTopic] = useState('');
  const [paperURL, setPaperURL] = useState('');

  const [nameOfCompany, setCompanyName] = useState('');
  const [dateStarted, setStartDate] = useState('');
  const [productCategory, setCategory] = useState('');
  const [headquarterLocation, setHQ] = useState('');

  const goHome = () => router.push('/');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === 'paperTitle') setPaperTitle(value);
    else if (id === 'paperAuthor') setPaperAuthor(value);
    else if (id === 'paperTopic') setPaperTopic(value);
    else if (id === 'paperURL') setPaperURL(value);
    else if (id === 'nameOfCompany') setCompanyName(value);
    else if (id === 'dateStarted') setStartDate(value);
    else if (id === 'productCategory') setCategory(value);
    else if (id === 'headquarterLocation') setHQ(value);
  };

  const addPaperToDB = async () => {
    try {
      const response = await fetch(
        `/api/add-paper?paperTitle=${paperTitle}&paperAuthor=${paperAuthor}&paperURL=${paperURL}&paperTopic=${paperTopic}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ paperTitle, paperAuthor, paperTopic, paperURL }) }
      );
      if (!response.ok) throw new Error('Failed to add paper');
      const added = await response.json();
      console.log('Paper added:', added);
    } catch (error) {
      console.error('Error adding paper:', error);
    }
  };

  const addCompanyToDB = async () => {
    try {
      const response = await fetch(
        `/api/add-company?Name=${nameOfCompany}&dateStarted=${dateStarted}&productCategory=${productCategory}&headquarterLocation=${headquarterLocation}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ nameOfCompany, dateStarted, productCategory, headquarterLocation }) }
      );
      if (!response.ok) throw new Error('Failed to add company');
    } catch (error) {
      console.error('Error adding company:', error);
    }
  };

  const removePapersFromDB = async () => {
    try {
      const response = await fetch('/api/remove-all-papers');
      if (!response.ok) throw new Error('Failed to remove papers');
    } catch (error) {
      console.error('Error removing papers:', error);
    }
  };

  const removeUsersFromDB = async () => {
    try {
      const response = await fetch('/api/remove-all-users');
      if (!response.ok) throw new Error('Failed to remove users');
    } catch (error) {
      console.error('Error removing users:', error);
    }
  };

  const removeArticlesFromDB = async () => {
    try {
      const response = await fetch('/api/remove-all-articles');
      if (!response.ok) throw new Error('Failed to remove articles');
    } catch (error) {
      console.error('Error removing articles:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Head><title>Let's Go Biotech - Admin Portal</title><meta name="description" content="created by Rohan Cain Robinson" /></Head>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.navBarText} onClick={goHome}>
            Let's Go Biotech
          </Typography>
        </Toolbar>
      </AppBar>

      <p><i><b>Admin Portal</b></i></p>

      <div>
        <b>Add a Paper</b><br />
        <Input id="paperTitle" placeholder="Paper name" onChange={handleInputChange} /><br />
        <Input id="paperAuthor" placeholder="Paper author" onChange={handleInputChange} /><br />
        <Input id="paperTopic" placeholder="Paper topic" onChange={handleInputChange} /><br />
        <Input id="paperURL" placeholder="Paper URL" onChange={handleInputChange} />
      </div><br />
      <Button variant="contained" color="secondary" onClick={addPaperToDB}>Add Paper</Button><br />

      <div>
        <b>Add a Company</b><br />
        <Input id="nameOfCompany" placeholder="Company name" onChange={handleInputChange} /><br />
        <Input id="dateStarted" placeholder="Year founded" onChange={handleInputChange} /><br />
        <Input id="productCategory" placeholder="Product category" onChange={handleInputChange} /><br />
        <Input id="headquarterLocation" placeholder="HQ location" onChange={handleInputChange} />
      </div><br />
      <Button variant="contained" color="secondary" onClick={addCompanyToDB}>Add Company</Button><br />

      <h3>Emergency actions</h3>
      <Button variant="contained" color="secondary" onClick={removePapersFromDB}>Remove All Papers</Button><br />
      <Button variant="contained" color="secondary" onClick={removeUsersFromDB}>Remove All Users</Button><br />
      <Button variant="contained" color="secondary" onClick={removeArticlesFromDB}>Remove All Articles</Button>
    </Box>
  );
}
