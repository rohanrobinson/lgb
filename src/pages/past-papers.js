import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PastPapers() {

  const router = useRouter();

  const topicSelected = router.query.topicSelected;

  const goHome = () => {
    router.push('/');
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh' 
    }}>
      <Head>
        <title>Let's Go Biotech - Past Papers</title>
        <meta name="description" content="created by Rohan Cain Robinson" />
      </Head>

      <AppBar position="fixed" color="secondary">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer} onClick={goHome}>
            🧬 Let's Go Biotech 
            </Typography>
        </Toolbar>
      </AppBar>
    
    <div>
      <div>
          <h3> Here is a paper about { topicSelected }!</h3>
          {
            topicSelected == 'AI' ? <a href="https://www.nature.com/articles/s41586-023-05881-4" target="_blank"><p><span className={styles.lgbText}>Foundation Generalist Medical AI Models</span></p></a> : ''
          }

          {
            topicSelected == 'Genomics' ? <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5470591/" target="_blank"><p>Challenges and Opportunities in Clinical Genomics</p></a> : ''
          }

          {
            topicSelected == 'Robotics' ? <a href="https://www.nature.com/articles/s41587-022-01491-z" target="_blank"><p><span className={styles.lgbText}>Advances in Body-on-Chip Systems</span></p></a> : ''
          }

          {
            topicSelected == 'Therapeutics' ? <a href="https://www.nature.com/articles/s41587-022-01491-z" target="_blank"><p><span className={styles.lgbText}>Unlocking the Promise of mRNA therapeutics</span></p></a> : ''
          }

          {
            topicSelected == 'Space' ?  <a href="https://www.nature.com/articles/s41526-023-00273-4" target="_blank"><p><span className={styles.lgbText}>Skeletal muscle gene expression dysregulation in long-term spaceflights and aging is clock-dependent</span></p></a>  : ''
          }

          <i>We're working on adding an engaging quiz for this paper!</i>
      </div>

      {/* <p>
        <div className={styles.paperColumn}>
          <a href="https://pubmed.ncbi.nlm.nih.gov/16904174/" target="_blank"><p><span className={styles.lgbText}>Yamanka Factors</span></p></a>
          <a href="https://www.nature.com/articles/s41525-020-0115-6#:~:text=FHIR%20Genomics%20has%20been%20shown,into%20powerful%20precision%20medicine%20apps." target="_blank"><p><span className={styles.lgbText}>FHIR Genomics Standard</span></p></a>
          <a href="https://www.nature.com/articles/s41586-023-05881-4" target="_blank"><p><span className={styles.lgbText}>Foundation Generalist Medical AI Models</span></p></a>
          <a href="https://www.nature.com/articles/s41587-023-01744-5" target="_blank"><p><span className={styles.lgbText}>CRISPR edited Lung Cells</span></p></a>
          <a href="https://www.nature.com/articles/s41587-023-01788-7" target="_blank"><p><span className={styles.lgbText}>Customizing LLMs to Discover Drugs</span></p></a>
          <a href="https://www.nature.com/articles/d41586-023-02299-w" target="_blank"><p>Untrustworthy Clinical Trials in Medicine</p></a>
        </div>
      </p>       */}
      


      {/* <div className={styles.paperColumn}>  
        <a href="https://www.nature.com/articles/s41587-022-01652-0" target="_blank"><p><span className={styles.lgbText}>Simultaneous DNA & Epigenetic Sequencing</span></p></a>
        <a href="https://www.nature.com/articles/s41587-023-01730-x" target="_blank"><p><span className={styles.lgbText}>Xenotransplantation: how close are we?</span></p></a>
        <a href="https://www.nature.com/articles/s41587-023-01736-5" target="_blank"><p><span className={styles.lgbText}>Make Science Disruptive Again</span></p></a>
        <a href="https://www.nature.com/articles/s41587-023-01755-2" target="_blank"><p><span className={styles.lgbText}>Exploring tRNAs and their Modifications </span></p></a>
        <a href="https://www.nature.com/articles/s41586-023-06356-2" target="_blank"><p><span className={styles.lgbText}>RNA Guided System in Eukaryotes</span></p></a>
        <a href="https://www.nature.com/articles/s41587-021-01207-9" target="_blank"><p><span className={styles.lgbText}>Enhanced cancer detection from cell-free DNA</span></p></a>
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5470591/" target="_blank"><p>Challenges and Opportunities in Clinical Genomics</p></a>

      </div> */}

      {/* <div className={styles.paperColumn}>
        <a href="https://arxiv.org/abs/2210.11892" target="_blank"><p><span className={styles.lgbText}>BioLORD</span></p></a>
        <a href="https://www.nature.com/articles/s41587-023-01837-1" target="_blank"><p><span className={styles.lgbText}>Can Microbes Save the Planet?</span></p></a>
        <a href="https://www.nature.com/articles/s41587-022-01327-w" target="_blank"><p><span className={styles.lgbText}>Applying Machine Learning to Antibiotic Discovery</span></p></a>
        <a href="https://www.nature.com/articles/s41587-022-01491-z" target="_blank"><p><span className={styles.lgbText}>Unlocking the Promise of mRNA therapeutics</span></p></a>
        <a href="https://www.nature.com/articles/s41588-021-00819-w" target="_blank"><p><span className={styles.lgbText}>Pediatric Cancer Dependency Map</span></p></a>
        <a href="https://www.nature.com/articles/s41587-023-01729-4" target="_blank"><p><span className={styles.lgbText}>Plant mRNA Translation</span></p></a>
        <a href="https://www.nature.com/articles/s41587-022-01491-z" target="_blank"><p><span className={styles.lgbText}>Advances in Body-on-Chip Systems</span></p></a>
        <a href="https://www.nature.com/articles/s41587-023-01828-2" target="_blank"><p>Combining Reference Genomes to Improve Accuracy & Reduce Bias</p></a>

      </div> */}
      
    </div>

    <br />


          <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              href="/"
              sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
            >
              Let's Go
          </Button>




    </Box>
  );
}

