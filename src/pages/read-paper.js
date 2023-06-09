import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography, Button, Card, CardContent } from '@mui/material';

export default function ReadPaper() {

 const router = useRouter();
 const showPaper1 = router.query.showPaper1;
 const showPaper2 = router.query.showPaper2;
 const showPaper3 = router.query.showPaper3;
 const paperNames = router.query.paperNames;

 const goHome = () => {
  window.location.href = "http://letsgobiotech.com/";
 }

 const seeAboutUs = () => {
  window.location.href= "http://letsgobiotech.com/about-us";
 }

 //Paper 2
const paperAbstract2 = "Antimicrobial resistance has been highlighted as one of the top ten public health threats facing humanity by the World Health Organization. Antimicrobial peptides (AMPs) — small proteins typically 8–50 amino acids in length that confer protection against pathogens — are an established alternative to traditional antibiotics because they are less likely to elicit resistance1; however, only a limited number of these molecules have entered clinical practice, with dozens undergoing clinical and preclinical trials1. High-throughput approaches using microbiome data that widen the search for promising AMPs may provide a new source of candidates to combat antibiotic-resistant pathogens. Now Ma et al.2 describe a clever artificial intelligence (AI) strategy to identify new antibiotics, employing natural language processing tools to effectively mine large gut microbiome datasets in search of peptides that possess antimicrobial properties (Fig. 1). The approach contributes to emerging research allowing the antibiotic discovery field to move past traditional methods that rely on arduous trial-and-error experimentation and into a new era where molecules can be rapidly discovered by computer.";

// Paper 1
 const paperAbstract1 = "In April, a new research initiative from Jennifer Doudna and Jill Banfield was announced called “Engineering the Microbiome with CRISPR to Improve our Climate and Health.” This project is the largest scientific project funded through The Audacious Project, receiving $70 million in donor funding. The initiative will focus on using precision genome editing on microbial communities, and a large focus of the project seems to be on environmental applications, such as reducing methane emissions from livestock. We have covered the potential of microbial engineering to benefit human health, but what is the real potential for engineering bacteria to benefit the sustainability of the planet?Microbes from livestock, soils and landfill wastes produce methane and nitrogen oxides, which contribute to greenhouse gas emissions. The initiative from Doudna and Banfield will start by trying to decrease livestock methane production through inhibition of methane-producing bacteria in the guts of these ruminants. They are not the first to try to reduce methane being produced by cattle. Others have fed cattle methane inhibitors or seaweed and have developed devices to deliver bioactives that could inhibit methane over time within the stomach. Doudna and Banfield’s proposal is different in that it would use CRISPR–Cas gene editing to directly edit the microbes within the stomach of young livestock, engineering them to produce less methane. This builds on their previous work in soil using DART (DNA-editing all-in-one RNA-guided CRISPR–Cas transposase) and ET-seq, which are methods for microbe engineering without the need for isolation of the species. In theory, an early treatment along these lines that would be active within the ruminant gut would lead to cattle permanently low in methane production.";

 // Paper 3
 const paperAbstract3 = "The extraordinary success of mRNA vaccines against coronavirus disease 2019 (COVID-19) has renewed interest in mRNA as a means of delivering therapeutic proteins. Early clinical trials of mRNA therapeutics include studies of paracrine vascular endothelial growth factor (VEGF) mRNA for heart failure and of CRISPR–Cas9 mRNA for a congenital liver-specific storage disease. However, a series of challenges remains to be addressed before mRNA can be established as a general therapeutic modality with broad relevance to both rare and common diseases. An array of new technologies is being developed to surmount these challenges, including approaches to optimize mRNA cargos, lipid carriers with inherent tissue tropism and in vivo percutaneous delivery systems. The judicious integration of these advances may unlock the promise of biologically targeted mRNA therapeutics, beyond vaccines and other immunostimulatory agents, for the treatment of diverse clinical indications.";


 return (
   <div className={styles.container}>
     <Head>
       <title>Let's Go Biotech - Read Paper</title>
       <meta name="description" content="Generated by Rohan in SF" />
       {/* <link rel="icon" href="/favicon.ico" /> */}
     </Head>

     <AppBar position="fixed" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer} onClick={goHome}>
          Let's Go Biotech 
        </Typography>
      </Toolbar>
    </AppBar>

    <Typography variant="body1" sx={{ mb: 2, fontSize: "2.0rem" }}>
      <span className={styles.readPaperHeader}><b>Enjoy Reading!</b></span>
    </Typography>
    

     {showPaper1 === 'false' && showPaper2 === "false" && showPaper3 === "false" && (
        <div>
           <Typography variant="body1" sx={{ mb: 2, fontSize: "3.0rem" }}>
              <span className={styles.lgbDescription}>You did not select any papers to read, go back and select one!</span>
           </Typography>
        </div>
     )}
      <div>

        {showPaper1 === 'true' && (
          <Card className={styles.abstractDisplay}>
            <CardContent>
              <Typography variant="h5" component="div">{paperNames[0]}</Typography>
              <Typography variant="body2" color="text.secondary">
                {paperAbstract1}
              </Typography>
            </CardContent>
          </Card>
        )}

        {showPaper2 === 'true' && (
          <Card className={styles.abstractDisplay}>
          <CardContent>
            <Typography variant="h5" component="div">{paperNames[1]}</Typography>
            <Typography variant="body2" color="text.secondary">
              {paperAbstract2}
            </Typography>
          </CardContent>
          </Card>
        )}

        {showPaper3 === 'true' && (
          <Card className={styles.abstractDisplay}>
          <CardContent>
            <Typography variant="h5" component="div">{paperNames[2]}</Typography>
            <Typography variant="body2" color="text.secondary">
              {paperAbstract3}
            </Typography>
          </CardContent>
          <CardContent>
          </CardContent>
        </Card>
        )}

    </div>

    <br />

        <Link
            className={styles.greenSquare} 
            href={{
                pathname: '/take-quiz',
                query: {
                  showPaper1: showPaper1,
                  showPaper2: showPaper2,
                  showPaper3: showPaper3, 
                  paperNames: paperNames,
                }
            }}>
            <h2>Take Quiz</h2>
        </Link>

   

        <a href="/">
        <Typography variant="body1" sx={{ mb: 0.5 }}>
          &larr; <b>Select Different Paper</b>
      </Typography>
        </a>

   </div>
 )
}



