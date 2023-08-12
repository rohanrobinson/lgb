﻿import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Home() {

  const [showPaper1, setShowPaper1] = useState(false);
  const [showPaper2, setShowPaper2] = useState(false);
  const [showPaper3, setShowPaper3] = useState(false);


  // names of paper 1, paper 2, paper 3 
  const paperNames = ['Pediatric Cancer Genome Map', 'Predicting plant mRNA translation', 'Advances in body-on-a-chip systems' ];

  // add in info about paper abstracts, methods, results, & conclusions
  const paperAbstracts = ["Exciting therapeutic targets are emerging from CRISPR-based screens of high mutational-burden adult cancers. A key question, however, is whether functional genomic approaches will yield new targets in pediatric cancers, known for remarkably few mutations, which often encode proteins considered challenging drug targets. To address this, we created a first-generation pediatric cancer dependency map representing 13 pediatric solid and brain tumor types. Eighty-two pediatric cancer cell lines were subjected to genome-scale CRISPR–Cas9 loss-of-function screening to identify genes required for cell survival. In contrast to the finding that pediatric cancers harbor fewer somatic mutations, we found a similar complexity of genetic dependencies in pediatric cancer cell lines compared to that in adult models. Findings from the pediatric cancer dependency map provide preclinical support for ongoing precision medicine clinical trials. The vulnerabilities observed in pediatric cancers were often distinct from those in adult cancer, indicating that repurposing adult oncology drugs will be insufficient to address childhood cancers.", "In this study, we describe efficient and easy methods for downregulating protein translation to predictable and desired levels in plants by engineering uORFs (upstream open reading frame). These methods enable the generation of genome-edited plants with graded expression of traits and, because uORFs are universal eukaryotic regulatory elements, should be applicable beyond the plant kingdom. Because many factors, including secondary structure, downstream and upstream sequences and regulatory elements in the 5 prime UTR (untranslated region), and the expression levels of translation initiation factors, among others, influence the inhibitory effects of uORFs, it is difficult to reliably predict the effects of uORFs on pORF (primary open reading frames) translation and phenotypes. We have demonstrated that systems such as dual-luciferase reporter assays can rapidly and reliably predict the effects of uORFs. Nevertheless, detailed knowledge of how each factor influences the inhibitory effects of uORFs should enable more effective exploitation of these approaches. Next, we intend to apply these methods to improve crop traits by circumventing the complex trade-offs resulting from pleiotropy (the phenomenon of a single gene affecting multiple traits.", "Microphysiological systems (MPS, also known as organ-on-a-chip, body-on-a-chip, or human-on-a-chip) have emerged over the last fifteen years as attractive systems to probe response to pharmaceutical or chemicals. While applicable to animals, such systems are particularly powerful in predicting human response prior to clinical testing of a drug or as augmentation of clinical studies to test underlying mechanisms. The rate of development of such systems has increased exponentially, particularly over the last three years. Organ-on-a-chip systems have evolved in sophistication and ability to model details of organ physiology, allowing better understanding of underlying mechanisms of response to drugs and chemicals. Body-on-a-chip (BOC) systems are multi-organ systems, often designed to emulate human physiological response to drugs and have the potential to capture both efficacy of a drug and potential toxicity in other organs. While the focus has been on human response to pharmaceuticals, such systems can evaluate response to general chemical exposure, which is important in evaluating the safety of chemicals, food ingredients, and cosmetics. Here, we review recent progresses in the development of model systems over the last three years, with particular focus on BOC systems."];


    const seeAboutUs = () => {
        window.location.href = "http://letsgobiotech.com/about-us";
    }

    const paperSelected = (event, paperNum) => {
      if (paperNum === "paper1") {
          console.log("paper 1 selected");
          setShowPaper3(false);
          setShowPaper2(false);
          setShowPaper1(true);
          console.log(showPaper1, showPaper2, showPaper3);
  
        }
  
      else if (paperNum === "paper2") {

        setShowPaper1(false);
        setShowPaper3(false);
        setShowPaper2(true);

        }
  
      else if (paperNum === "paper3") {
  
          setShowPaper1(false);
          setShowPaper2(false);
          setShowPaper3(true);

        }
  
      else {
         console.log('You have tried to select multiple paper, ha, you can choose one, pick wisely... :)');
      }
    }


    useEffect(() => {
    
      let arr = [1, 2, 3];
  
      const defaultPaperNum = arr[(Math.floor(Math.random() * arr.length))];
  
      if (defaultPaperNum === 1) {
     //   setNumSelected(1);
        setShowPaper1(true);
      }
  
      if (defaultPaperNum === 2) {
       // setNumSelected(2);
        setShowPaper2(true);
      }
  
      if (defaultPaperNum === 3) {
     //   setNumSelected(3);
        setShowPaper3(true);
      }

      console.log(defaultPaperNum);
  
    }, []);


    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        gap: 3,
        p: 3,
      }}> 
        <Head>
          <title>Let's Go Biotech - Home Base</title>
          <meta name="description" content="created by Rohan Cain Robinson" />
        </Head>
      
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Let's Go Biotech 
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={seeAboutUs}>
              About
            </Typography>
          </Toolbar>
        </AppBar>
      
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 1,
          mt: 4,
        }}>
          <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
            <b><span className={styles.lgbHeader}><i> Let's Master Biotechnology</i></span></b> 
          </Typography>
          {/* <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
            <span className={styles.lgbDescription}>Read the latest papers, test yourself and level up!</span>
          </Typography> */}
          <Typography variant="h4" sx={{ mb: 2, textAlign: 'center'}}>
            <span className={styles.lgbDescription}>Select a Paper</span>
          </Typography>
        </Box>
        
        <div>
          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{ pathname: '/read-paper',
              query: { 
                showPaper1: true,
                showPaper2: false, 
                showPaper3: false, 
                paperNames: paperNames,
                paperAbstracts: paperAbstracts 
              }
           }}
          >
            {paperNames[0]}
          </Link> <br />

          <Link
          
          variant="contained" 
          color="success" 
          size="large" 
          
          href={{ pathname: '/read-paper',
              query: { 
                showPaper1: false,
                showPaper2: true, 
                showPaper3: false, 
                paperNames: paperNames,
                paperAbstracts: paperAbstracts 
              }
           }}
          
          
          >
            {paperNames[1]}
          </Link> <br />


          <Link
          
          variant="contained" 
          color="success" 
          size="large" 
          
          href={{ pathname: '/read-paper',
              query: { 
                showPaper1: false,
                showPaper2: false, 
                showPaper3: true, 
                paperNames: paperNames,
                paperAbstracts: paperAbstracts  
              }
           }}
          
          
          >
            {paperNames[2]}
          </Link>


        </div>

        {/* <div className={styles.btnPapers}>
        {
              
              showPaper1

              ?
              
              (<Button 
                onClick={(event) => paperSelected(event, "paper1")}
                variant="contained"
                color="success"
              >
                {paperNames[0]}
              </Button>)
              :
              (<Button 
                onClick={(event) => paperSelected(event, "paper1")}
                variant="outlined"
                color="error"
              > 
              {paperNames[0]}
            </Button>) 
        }

            &nbsp; &nbsp; &nbsp;
        
        {
            showPaper2 

            ?

            (<Button 
              onClick={(event) => paperSelected(event, "paper2")}
              variant="contained"
              color="success"
            >
            {paperNames[1]} 
          </Button>)

            :

            (<Button 
              onClick={(event) => paperSelected(event, "paper2")}
              variant="outlined"
              color="error"
          >
            {paperNames[1]}
          </Button>)

         }
            &nbsp; &nbsp; &nbsp;
        {
            showPaper3 

            ? 

            (<Button 
              onClick={(event) => paperSelected(event, "paper3")}
              variant="contained"
              color="success"
          >
           {paperNames[2]} 
          </Button>)

            :

            (<Button 
              onClick={(event) => paperSelected(event, "paper3")}
              variant="outlined"
              color="error"
          >
          {paperNames[2]} 
          </Button>)

         }

      </div> */}
      
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 3,
          mt: 3,
        }}>

          {/* <Link 
            className={styles.greenSquare}
            variant="contained" 
            color="success" 
            size="large" 
            
            href={{ pathname: '/paper-portion',
                query: { 
                  showPaper1: showPaper1,
                  showPaper2: showPaper2, 
                  showPaper3: showPaper3, 
                  paperNames: paperNames 
                }
             }}
            
          >
            <b>Read Selected Paper</b>
          </Link> */}
        </Box>
      </Box>

    );
}
