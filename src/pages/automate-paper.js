import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Link from 'next/link';

export default function AutomatePaper() { 



    const SHEET_ID = '1GZjP9yZcMtoEho3atrT7TfqH1YKmB0FTdd2hjM9c4H8';
    const ACCESS_TOKEN = 'ya29.a0AWY7CkldZc6P3FPU7pPOhsHon_hSofMaf8x0WkV6lBvcqf4CQoOdgysjeAHQs6XgHB8NDuf5KXidwVudFTVMEFKR6Whk2QFerrhIp7v6TfNwgKiSoAKtWEONClaTX1KWWS5DUPTiLe8mDwYpbkQCZw0ny2kDaCgYKAXkSARASFQG1tDrpn3P0r8xViorkVv22YLBSQA0163';

    
    getSheetValues = () => {

        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A1:D5`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              //update this token with yours. 
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          })
    }

    return (
        <div>
            <h1>Automation Test Page</h1>
        </div>
    );



}
