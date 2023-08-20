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
  router.push('/');
}

 const seeAboutUs = () => {
  router.push('/about-us');
}

// Text from Papers
const paperAbstract1 = "How many clinical-trial studies in medical journals are fake or fatally flawed? In October 2020, John Carlisle reported a startling estimate. Carlisle, an anaesthetist who works for England’s National Health Service, is renowned for his ability to spot dodgy data in medical trials. He is also an editor at the journal Anaesthesia, and in 2017, he decided to scour all the manuscripts he handled that reported a randomized controlled trial (RCT) — the gold standard of medical research. Over three years, he scrutinized more than 500 studies. For more than 150 trials, Carlisle got access to anonymized individual participant data (IPD). By studying the IPD spreadsheets, he judged that 44% of these trials contained at least some flawed data: impossible statistics, incorrect calculations or duplicated numbers or figures, for instance. And 26% of the papers had problems that were so widespread that the trial was impossible to trust, he judged — either because the authors were incompetent, or because they had faked the data. Carlisle called these zombie trials because they had the semblance of real research, but closer scrutiny showed they were actually hollow shells, masquerading as reliable information.";

const paperAbstract2 = "Next-generation sequencing (NGS) approaches are highly applicable to clinical studies. We review recent advances in sequencing technologies, as well as their benefits and tradeoffs, to provide an overview of clinical genomics from study design to computational analysis. Sequencing technologies enable genomic, transcriptomic, and epigenomic evaluations. Studies that use a combination of whole genome, exome, mRNA, and bisulfite sequencing are now feasible due to decreasing sequencing costs. Single-molecule sequencing increases read length, with the MinION™ nanopore sequencer, which offers a uniquely portable option at a lower cost. Many of the published comparisons we review here address the challenges associated with different sequencing methods. Overall, NGS techniques, coupled with continually improving analysis algorithms, are useful for clinical studies in many realms, including cancer, chronic illness, and neurobiology. We, and others in the field, anticipate the clinical use of NGS approaches will continue to grow, especially as we shift into an era of precision medicine.";

const paperAbstract3 = "As a single genome sample cannot fully represent an entire species, the term pangenome was coined in the context of six Streptococcus agalactiae reference genomes that shared only 80% of their genetic material. Eukaryotic species, including humans, tend to be much less diverse, but increasingly broad sequencing studies have revealed substantial structural (large-scale) genomic variation between their individual members. The ability to now generate multiple reference-quality human genomes poses the question of whether these genomes can be used to preserve information that would otherwise be lost by using a single reference such as the Human Reference Genome (GRCh38). To address this question, we devised Minigraph-Cactus, a multiple genome alignment-based pipeline that constructs a pangenome graph from a set of reference genomes. This method proceeds by iteratively adding structural variants from each sample, then using these variants as anchors for computing a base-level realignment. The resulting graph consistently represents variation at different scales, from single-nucleotide polymorphisms to complex, nested intrachromosomal rearrangements. Crucially, existing pangenomics software can be used with this method, as well as for read mapping and variant calling.";


 return (
   <div className={styles.container}>
     <Head>
       <title>Let's Go Biotech - Read Paper</title>
       <meta name="description" content="Created by Rohan Cain Robinson" />
     </Head>

     <AppBar position="fixed" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer} onClick={goHome}>
          Let's Go Biotech 
        </Typography>
      </Toolbar>
    </AppBar>
    
     {showPaper1 === 'false' && showPaper2 === "false" && showPaper3 === "false" && (
        <div>
           <Typography variant="body1" sx={{ mb: 2, fontSize: "3.0rem" }}>
              <span className={styles.lgbDescription}>You did not select any papers to read, go back and select one!</span>
           </Typography>
        </div>
     )}
      <div>

        {showPaper1 === 'true' && (
          <Card className={styles.largeAbstractDisplay}>
            <CardContent>
              <Typography variant="body1" sx={{ mb: 2, fontSize: "1.0rem" }}>
                <span className={styles.readPaperHeader}><b>Enjoy Reading!</b></span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {paperAbstract1}
              </Typography>
            </CardContent>
          </Card>
        )}

        {showPaper2 === 'true' && (
          <Card className={styles.largeAbstractDisplay}>
          <CardContent>
              <Typography variant="body1" sx={{ mb: 2, fontSize: "1.0rem" }}>
                <span className={styles.readPaperHeader}><b>Enjoy Reading!</b></span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {paperAbstract2}
              </Typography>
          </CardContent>
          </Card>
        )}

        {showPaper3 === 'true' && (
          <Card className={styles.largeAbstractDisplay}>
          <CardContent>
            <Typography variant="body1" sx={{ mb: 2, fontSize: "1.0rem" }}>
                <span className={styles.readPaperHeader}><b>Enjoy Reading!</b></span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {paperAbstract3}
            </Typography>
          </CardContent>
        </Card>
        )}

    </div>

    <br />

        <Link 
            href={{
                pathname: '/take-quiz',
                query: {
                    showPaper1: showPaper1,
                    showPaper2: showPaper2,
                    showPaper3: showPaper3, 
                    paperNames: paperNames,
                }
            }}
            passHref
        >
            <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px' }}
            >
                Take Quiz
            </Button>
        </Link>


        <br />
   

        <a href="/">
        <Typography variant="body1" sx={{ mb: 0.5 }}>
          &larr; <b>I Want to Read a Different Paper</b>
      </Typography>
        </a>

   </div>
 )
}



