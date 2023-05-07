import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';


export default function PastPapers() {

 
  const seeCurrentPapers = () => {
    window.location.href = "http://letsgobiotech.com/select-paper";
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            🧬 LGB 
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0}} className={styles.cursorPointer} onClick={seeCurrentPapers}>
                    See Current Papers 🚀
            </Typography>
        </Toolbar>
      </AppBar>

      <Typography variant="body1" sx={{ mb: 2, fontSize: "2.0rem"  }}>
          <span className={styles.lgbDescription}>Below are past papers that have been featured. Check them out!
          The paper you select will open up in a new tab.</span>     
      </Typography> 
    
    
    <div>
        <a href="https://pubmed.ncbi.nlm.nih.gov/16904174/" target="_blank"><p><span className={styles.lgbText}>Yamanka Factors</span></p></a>
        <a href="https://www.nature.com/articles/s41525-020-0115-6#:~:text=FHIR%20Genomics%20has%20been%20shown,into%20powerful%20precision%20medicine%20apps." target="_blank"><p><span className={styles.lgbText}>FHIR Genomics Standard</span></p></a>
        <a href="https://www.nature.com/articles/s41586-023-05881-4" target="_blank"><p><span className={styles.lgbText}>Foundation Generalist Medical AI Models</span></p></a>
        <a href="https://www.nature.com/articles/s41587-023-01744-5" target="_blank"><p><span className={styles.lgbText}>CRISPR edited Lung Cells</span></p></a>
        <a href="https://www.nature.com/articles/s41587-023-01788-7" target="_blank"><p><span className={styles.lgbText}>Customizing LLMs to Discover Drugs</span></p></a>
        <a href="https://www.nature.com/articles/s41587-022-01652-0" target="_blank"><p><span className={styles.lgbText}>Simultaneous DNA & Epigenetic Sequencing</span></p></a>
    </div>

    <br />


    <Link 
          className={styles.greenSquare}
          href={{
          pathname: '/select-paper'
        }}>
          <h2>See Current Papers</h2>
    </Link>




    </Box>
  );
}

