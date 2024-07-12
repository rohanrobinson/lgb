// Number of Users on Page 
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button, Input } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

export default function NumUsersPage() {
    
    
    const router = useRouter();

    const getUsersFromDB = () => {
        alert("hello world");
        // const allUsersResponse = await fetch(`/api/get-users`, {
        //     method: 'GET', 
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });

        // const allUsers = await allUsersResponse.json();

        // if (!response.ok) {
        //     throw new Error('Failed to get all users');
        // }
        
        // console.log("this is the get users from db function");
        // console.log(allUsers);

    }

    // gets latest info from db 
    useEffect( () => {
        getUsersFromDB();
    }, []);

    return (
        <Box
        sx={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh', 
            gap: 3,
            p: 3,
        }}>
            <Head>
                <title>Let's Go Biotech - Users Info</title>
                <meta name="description" content="created by Rohan Cain Robinson" />             
            </Head>
            <div className={styles.headers}>
                <b><span><i><h2>Aloha! How many people are signed up for LGB?</h2></i></span></b> 
                    Number of Users for Let's Go Biotech: AWESOME NUMBER GOES HERE!
            </div>

        </Box>
    );
    
}
