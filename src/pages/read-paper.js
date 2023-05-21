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

 const goHome = () => {
  window.location.href = "http://letsgobiotech.com/";
 }

 //Paper 2
 const paperAbstract2 = "The rate of scientific innovation appears to be slowing down: despite immense investments, the proportion of individual projects that push science in new directions by breaking with previous understanding has decreased since the 1950s. Some observers have attributed these diminishing returns to the notion that fewer fundamental discoveries remain to be made. But a compelling case can be made for another factor: that the culture of science has gradually transitioned toward a more executive and results-oriented approach. In this fast-paced mode, scientists and scientists-in-training — graduate students and postdoctoral fellows — have little time for more exploratory topics, which contributes to a less creative environment for transformative science. This trend may have been fortified by science becoming increasingly entrenched into siloed disciplines and by projects being progressively dominated by hypothesis-driven approaches, fueled by a spirit of strategic design that emphasizes predictability rather than unexpected results.";
 
 // Paper 1
 const paperAbstract1 = "Xenotransplantation research marked a singular milestone last year with the first human transplants of kidneys and a heart from genetically engineered pigs. The genetic modifications were designed to improve transplantation outcomes by lessening immune rejection, controlling organ size and regulating complement, coagulation and inflammation. These pioneering surgeries were motivated by deficiencies of the current donor organ system, which have led to long waiting lists for organs and the deaths of thousands of patients in need of organs each year. Pig kidneys were transplanted into three brain-dead recipients — one at Legacy of Hope, University of Alabama at Birmingham and two at New York University Langone Hospital. A pig heart was transplanted into a living recipient at University of Maryland School of Medicine.";
 
 // Paper 3
 const paperAbstract3 = "Nano-tRNAseq is a nanopore-based, cost-effective and high-throughput approach to quantify transfer RNA (tRNA) abundances and modifications simultaneously, providing a framework to study the ‘tRNAome’ at single-molecule resolution. We envision that Nano-tRNAseq will enable us to study the role of tRNA molecules and their modifications in a wide variety of contexts.";


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
          LGB 🧬
        </Typography>
      </Toolbar>
    </AppBar>

    <Typography variant="body1" sx={{ mb: 2, fontSize: "2.0rem" }}>
      <span className={styles.readPaperHeader}><b>Enjoy Reading the Abstract</b></span>
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
              <Typography variant="body2" color="text.secondary">
                {paperAbstract1}
              </Typography>
            </CardContent>
            <CardContent>
              <a href="https://www.nature.com/articles/s41587-023-01730-x" target="_blank">Read Full Paper</a>
            </CardContent>
          </Card>
        )}

        {showPaper2 === 'true' && (
          <Card className={styles.abstractDisplay}>
          <CardContent>
            <Typography variant="h5" component="div">Abstract</Typography>
            <Typography variant="body2" color="text.secondary">
              {paperAbstract2}
            </Typography>
          </CardContent>
          <CardContent>
            <a href="https://www.nature.com/articles/s41587-023-01736-5" target="_blank">Read Full Paper</a>
          </CardContent>
        </Card>
        )}

        {showPaper3 === 'true' && (
          <Card className={styles.abstractDisplay}>
          <CardContent>
            <Typography variant="h5" component="div">Abstract</Typography>
            <Typography variant="body2" color="text.secondary">
              {paperAbstract3}
            </Typography>
          </CardContent>
          <CardContent>
            <a href="https://www.nature.com/articles/s41587-023-01755-2" target="_blank">Read Full Paper</a>
          </CardContent>
        </Card>
        )}

    </div>

    <br />


      {/* <Link 
          className={styles.greenSquare}
          href={{
          pathname: '/take-quiz',
          query: {
            showPaper1: showPaper1,
            showPaper2: showPaper2,
            showPaper3: showPaper3
          }
        }}>
      <Typography variant="body1" sx={{ mb: 1.5 }}>
          <b>Take Quiz</b>
      </Typography>
        </Link> */}

        <Link
            className={styles.greenSquare} 
            href={{
                pathname: '/take-quiz',
                query: {
                  showPaper1: showPaper1,
                  showPaper2: showPaper2,
                  showPaper3: showPaper3
                }
            }}>
            <h2>Take Quiz</h2>
        </Link>

   

        <a href="/select-paper">
        <Typography variant="body1" sx={{ mb: 0.5 }}>
          &larr; <b>Select Papers</b>
      </Typography>
        </a>

   </div>
 )
}



