import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';


export default function PaperPortion() {


    const router = useRouter();
    const showPaper1 = router.query.showPaper1;
    const showPaper2 = router.query.showPaper2;
    const showPaper3 = router.query.showPaper3;
    const paperNames = router.query.paperNames;
    const paperAbstracts = router.query.paperAbstracts;

    const [partSelected, setPartSelected] = useState("");

    const showChosenPaper = () => {
        let paperToShow = "";
        if (showPaper1 === 'true') {
            paperToShow = paperNames[0];
        }
        
        if (showPaper2 === 'true') {
            paperToShow = paperNames[1];
        }

        if (showPaper3 === 'true') {
            paperToShow = paperNames[2];
        }

        return paperToShow;

    }

    function selectPart(partOfPaper) {
        
      if (partOfPaper === "abstract") { 
        setPartSelected(partOfPaper);
      }

      if (partOfPaper === "methods") {
        setPartSelected(partOfPaper);
      }

      if (partOfPaper === "results") {
        setPartSelected(partOfPaper);
      }

      if (partOfPaper === "conclusion") {
        setPartSelected(partOfPaper);
      }
      
    }
 
    return (


        <div className={styles.container}>

        <h3>Which part of <i> {showChosenPaper()} </i>do you want to read?</h3> <br />

        <h3><i>Current Part Selected - {partSelected}</i></h3>
        

        <div className={styles.btnPapers}>
            <Button onClick={() => selectPart("Abstract")}>Abstract</Button> <br />
            <Button onClick={() => selectPart("Methods")}>Methods</Button> <br />
            <Button onClick={() => selectPart("Results")}>Results</Button> <br />
            <Button onClick={() => selectPart("Conclusion")}>Conclusion</Button>
        </div>



        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 3,
          mt: 3,
        }}>
          <Link 
            className={styles.greenSquare}
            variant="contained" 
            color="success" 
            size="large" 
            
            href={{ pathname: '/read-paper',
              query: {
                 showPaper1: showPaper1,
                 showPaper2: showPaper2,
                 showPaper3: showPaper3,
                 paperNames: paperNames,
               }
             }}
            
          >
            <b>Read Selected Paper</b>
          </Link>
        </Box>
        </div>
        
    );
}