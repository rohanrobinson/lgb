import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, useTheme, Typography, Button, IconButton, ThemeProvider} from '@mui/material';
import { IBM_Plex_Mono } from 'next/font/google';
import { Rubik_Mono_One } from 'next/font/google';
import React, { useState } from "react";
import { black } from "material-ui-colors";
import { createTheme } from '@mui/material/styles';
//import  arrow1  from '../public/Arrow1.png';
//import divider from "/../public/static/images/Divider.png";
//import arrow1 from "/../public/Arrow1.png";
//import { rightDownArrow } from '/../public/Star2.png';




const newfont = Rubik_Mono_One(
    {
        font: 'Rubik Mono',
        subsets: ['latin'],
        weight: '400'
    }
)

const inter = IBM_Plex_Mono({ subsets: ['latin'], weight: '700' });
const theme = createTheme({
    palette: {
        background: {
            primary: {
                main: black,
            }
        },
    },
});
export default function Home() {
    
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', bgcolor: 'primary.main' }}>
            
            
                <div className={styles.menu1} style={{ background: '#F3F3F3' }}>
                    <div className={styles.welcomeText}> Let's Go BioTech
                        </div>
                </div>
                <div className={styles.menu2} style={{ background: '#F3F3F3' }}>
                    <Button
                        variant="text"
                        href="/select-paper"
                        sx={{ fontWeight: 'bold', fontSize: '16px', color: 'black'}}
                    >
                        Get Started
                    </Button>
                    <Button
                        variant="text"
                        href="/about-us"
                            sx={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}
                    >
                        About Us
                    </Button>


                </div>
                <div className={styles.backdrop}></div>
                    <div className={styles.rightContent} >
                        <div className={styles.paperOfTheDay }>
                            Read the Paper of the Day!
                        </div>
                    <div className={styles.goArrow}>
                        <Button
                            variant="text"
                            href="/about-us"
                            sx={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}
                        >
                            <Image src={"/../public/goArrow.png"} width={85} height={85} alt="arrow" />
                        </Button>
                        </div>
                        <div className={styles.divider}>
                        <Image src={"/../public/Divider.png"} width={1} height={470} alt="divider" />
                        </div>

                        <div className={styles.contentBox4Shadow}>
                        </div>
                        <div className={styles.contentBox4}>
                            <div>
                                And share what you've learned with others
                            </div>
                        </div>

                        <div className={styles.contentBox3Shadow}>
                        </div>
                        <div className={styles.contentBox3}>
                            <div className={styles.contentBox3Align}>
                                Track your learning progress
                            </div>
                        </div>
                    
                        <div className={styles.contentBox2Shadow}>
  
                        </div>
                        <div className={styles.contentBox2}>
                            <div>
                                Learn biotech through engaging papers and quizzes
                            </div>
                        </div>
                    </div> 
                
                    <div className={styles.leftContent} >
                            <div className={styles.contentBox1Shadow}></div>
                            <div className={styles.contentBox1}>
                                <div className={styles.arrow1}>
                            <Image src={"/../public/Arrow1.png"} width={60} height={60} alt="arrow1" />
                                </div>
                                <div className={styles.text1}>
                                   Do crazy sci-fi ideas like genetic engineering & brain machine interfaces occupy your mind? 
                                    <div className={styles.text2}>
                                   Let's Go BioTech turns you into a knowledgeable beast by keeping you updated with latest papers and innovations in biotechnology & medicine!
                                    </div>
                                </div>
                            </div>
                    </div>

                <div className={styles.bottomContentBackground} >

                </div> 
                
                <div className={styles.bottomContent} >
                    <div className={styles.star2}>
                        <Image src={"/../public/Star2.png"} width={56} height={56} alt="arrow" />
                    </div>
                    <div className={styles.star1}>
                        <Image src={"/../public/Star1.png"} width={73} height={73} alt="arrow" />
                    </div>
                    <div className={styles.arrow3}>
                        <Image src={"/../public/arrow3.png"} width={221} height={75} alt="arrow" />
                    </div>
                    <div className={styles.loginBoxShadow}>
                    </div>
                    <div className={styles.loginBox}>
                        <div className={styles.loginText}>
                            Join millions on their biotech journey!
                        </div>
                        <div className={styles.loginButton}>
                            <div className={styles.loginButtonText}>
                                Login
                            </div>
                        </div>
                        <div className={styles.loginButton2}>
                            <div className={styles.loginButtonText}>
                                Sign Up
                            </div>
                        </div>

                    </div>
                </div>    
               
            
            </Box>
        </ThemeProvider>
    );
}