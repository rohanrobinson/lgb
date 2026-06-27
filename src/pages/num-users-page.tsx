import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box } from '@mui/material';

export default function NumUsersPage() {
  useEffect(() => {
    alert('hello world');
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: 3, p: 3 }}>
      <Head>
        <title>Let's Go Biotech - Users Info</title>
        <meta name="description" content="created by Rohan Cain Robinson" />
      </Head>
      <div className={styles.headers}>
        <b><i><h2>How many people are signed up for LGB?</h2></i></b>
        Number of Users: AWESOME NUMBER GOES HERE!
      </div>
    </Box>
  );
}
