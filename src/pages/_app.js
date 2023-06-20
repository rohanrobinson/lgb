import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import { createMuiTheme, ThemeProvider } from '@mui/material';
import {Rubik_Mono_One } from 'next/font/google'

const Rubik = Rubik_Mono_One({
    weight: '400',
    subsets: ['latin']
})


export default function App({ Component, pageProps }) {
    return (

        <main >
            <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
            <Component {...pageProps} />
            <Analytics />
        </main>
    );
}