import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';


export default function SelectPaper() {

  const [showModal, setShowModal] = useState(false);
  const [showPaper1, setShowPaper1] = useState(false);
  const [showPaper2, setShowPaper2] = useState(false);
  const [showPaper3, setShowPaper3] = useState(false);

  const [numSelected, setNumSelected] = useState(0);

  const seePastPapers = () => {
    window.location.href = "http://localhost:3000/past-papers";
  }

  const paperSelected = (event, paperNum) => {
    if (paperNum === "paper1" && numSelected === 0) {
        setNumSelected(1);
        setShowModal(true);
        setShowPaper1(true);
    }

    else if (paperNum === "paper2" && numSelected === 0) {
        setNumSelected(1);
        setShowModal(true);
        setShowPaper2(true);
    }

    else if (paperNum === "paper3" && numSelected === 0) {
        setNumSelected(1);
        setShowModal(true);
        setShowPaper3(true);
    }

    else {
       console.log('You have tried to select multiple paper, ha, you can choose one, pick wisely... :)');
    }
  }


  const paperUnselected = (event, paperNum) => {
    if (paperNum === "paper1") {
        setNumSelected(0);
        setShowModal(false);
        setShowPaper1(false)
    }

    if (paperNum === "paper2") {
        setNumSelected(0);
        setShowModal(false);
        setShowPaper2(false);
    }

    if (paperNum === "paper3") {
        setNumSelected(0);
        setShowModal(false);
        setShowPaper3(false);
    }

  }
  
 return (
   <div className={styles.container}>
     <Head>
       <title>Let's Go Biotech - Select Paper</title>
       <meta name="description" content="Generated by create next app" />
       {/* <link rel="icon" href="/favicon.ico" /> */}
     </Head>

     <AppBar position="fixed" color="secondary">
      <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          🧬 LGB 
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={seePastPapers}>
              See Past Papers 🚀
          </Typography>
        </Toolbar>
      </AppBar>

      <Typography variant="h2" sx={{ mb: 4 }}>
        🧬 <b>Let's Go Biotech</b> 🚀
      </Typography>

      <div className={styles.paperSelection}>

        <Typography variant="body1" sx={{ mb: 2, fontSize: "2.0rem"  }}>
          Select a paper by clicking on its name
        </Typography> 
          
          
          
          <br />

          <div className={styles.choosePaper}>
                <div className={styles.item} value="paper1" onClick={(event) => paperSelected(event, "paper1")}>
                <Typography variant="body1" sx={{ mb: 2, fontSize: "2.0rem"  }}>
                  <b><i>CRISPR editing in the lung with lipids</i></b> &nbsp;
                </Typography> 
                </div> <br /> 
                {showModal && showPaper1 && (
            <div className={styles.modal}>
              <p>Scientists made small lipid particles that deliver CRISPR-edited RNA to mice lung by inhalation.
            </p>
              <button onClick={(event) => paperUnselected(event, "paper1")}>Close Description</button>
            </div>
                )}
            <br />
                <div className={styles.item} value="paper2" onClick={(event) => paperSelected(event, "paper2")}>
                <Typography variant="body1" sx={{ mb: 2, fontSize: "2.0rem"  }}>
                  <b><i>Simultaneous sequencing of genetic & epigenetic DNA bases</i></b> &nbsp;
                </Typography> 
                </div> <br /> 
                {showModal && showPaper2 && (
            <div className={styles.modal}>
              <p>A cool method that sequences the whole genome and catches the two most common cytosine-based C mutations.</p>
              <button onClick={(event) => paperUnselected(event, "paper2")}>Close Description</button>
            </div>
                )}
           <br />
                <div className={styles.item} value="paper3" onClick={(event) => paperSelected(event, "paper3")}>
                  <Typography variant="body1" sx={{ mb: 2, fontSize: "2.0rem"  }}>
                      <b><i>Drug discovery companies are customizing ChatGPT</i></b> &nbsp;
                  </Typography>
                </div>
                {showModal && showPaper3 && (
                        <div className={styles.modal}>
                          <p>Scientists are using large language models (LLMs) to discover new drug targets.</p>
                          <button onClick={(event) => paperUnselected(event, "paper3")}>Close Description</button>
                        </div>
                )}
                <br />
          </div>

      </div>

      <br />
      <br />

 
        <Link 
          className={styles.greenSquare}
          href={{
          pathname: '/read-paper',
          query: {
            showPaper1: showPaper1,
            showPaper2: showPaper2,
            showPaper3: showPaper3
          }
        }}>
          <h2>Read Selected Paper</h2>
          {showPaper1 ? (<p>CRISPR Editing</p>): ""}
          {showPaper2 ? (<p>Simultaneous Sequencing</p>): ""}
          {showPaper3 ? (<p>Chat GPT drugs!</p>): ""}
        </Link>

        {/* <Button 
          variant="contained" 
          color="secondary" 
          size="large" 
          href="/read-paper"
          sx={{ fontWeight: 'bold' }}
        >
          <h2>Read Paper</h2> <br></br>
          {showPaper1 ? (<p>CRISPR Editing</p>): ""}
          {showPaper2 ? (<p>Simultaneous Sequencing</p>): ""}
          {showPaper3 ? (<p>Chat GPT drugs!</p>): ""}
        </Button> */}
  


        <a href="/">
          <h2 style={{ fontSize: '3rem' }}>🏠 &larr; </h2>
        </a>
   </div>
 )
}
