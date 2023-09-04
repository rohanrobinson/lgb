import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Card, CardContent } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


export default function ReadPaper() {

 const router = useRouter();

 const showPaper1 = router.query.showPaper1;
 const showPaper2 = router.query.showPaper2;
 const showPaper3 = router.query.showPaper3;
 const paperNames = router.query.paperNames;
 
 const showIntro = router.query.showIntro;
 const showAbstract = router.query.showAbstract;
 const showMethods = router.query.showMethods;
 const showResults = router.query.showResults;
 const showDiscussion = router.query.showDiscussion;

const paperIntro1 = "An artificial-intelligence system can describe how compounds smell simply by analysing their molecular structures — and its descriptions are often similar to those of trained human sniffers.";
const paperIntro2 = "Triglycerides are complex lipids composed of a glycerol molecule linked to three fatty acids. Given the many possible combinations of fatty acids of differing length and saturation and the three positions to which they can bind on glycerol, a vast number of triglyceride molecules can potentially be made.";
const paperIntro3 = "CAR T cells, bispecific antibodies and antibody–drug conjugates are promising adoptive immunotherapies that can overcome the limitations of conventional cancer treatments and have demonstrated considerable efficacy when targeting dispensable haematopoietic antigens1,2. Nonetheless, the absence of safely actionable tumour-restricted markers hampers their application to other haematological malignancies, such as acute myeloid leukaemia (AML)6,7.";

const paperAbstract1 = "Smells are the only type of sensory information that goes directly from the sensory organ — the nose, in this case — to the brain’s memory and emotional centres; the other kinds of sensory input first pass through other brain regions. This direct route explains why scents can evoke specific, intense memories.";
const paperAbstract2 = "Triglycerides are key lipids used in the transport of fatty acids through the bloodstream in animals, and serve as the most efficient medium for energy storage in both animal and plant cells. In humans, accumulation of triglycerides in lipid droplets in non-fat tissues is commonly observed in lipid-overloaded states, such as obesity-related metabolic syndrome and type 2 diabetes. It can also be associated with cardiovascular disease1 and non-alcoholic steatohepatitis2 (a disease of the liver). Thus, the characterization of molecular pathways for triglyceride synthesis and their regulation is crucial for understanding human physiology and disease. Writing in Nature, McLelland et al.3 uncover a previously unknown pathway for triglyceride synthesis in mammalian cells.";
const paperAbstract3 = "Acute myeloid leukaemia immunotherapies target genes expressed by haematopoietic stem/progenitor cells (HSPCs) or differentiated myeloid cells, resulting in intolerable on-target/off-tumour toxicity. Here we show that epitope engineering of donor HSPCs used for bone marrow transplantation endows haematopoietic lineages with selective resistance to chimeric antigen receptor (CAR) T cells or monoclonal antibodies, without affecting protein function or regulation. This strategy enables the targeting of genes that are essential for leukaemia survival regardless of shared expression on HSPCs, reducing the risk of tumour immune escape. By performing epitope mapping and library screenings, we identified amino acid changes that abrogate the binding of therapeutic monoclonal antibodies targeting FLT3, CD123 and KIT, and optimized a base-editing approach to introduce them into CD34+ HSPCs, which retain long-term engraftment and multilineage differentiation ability.";

const paperMethods1 = "To explore the association between a chemical’s structure and its odour, Wiltschko and his team at Osmo designed a type of artificial intelligence (AI) system called a neural network that can assign one or more of 55 descriptive words, such as fishy or winey, to an odorant. The team directed the AI to describe the aroma of roughly 5,000 odorants. The AI also analysed each odorant’s chemical structure to determine the relationship between structure and aroma.";
const paperMethods2 = "McLelland and colleagues used a method known as sequential CRISPR loss-of-function screening to identify one such alternative pathway in a human cell line (HAP1 cells). To search for pathways that are independent of known DGATs, they engineered HAP1 cells to be deficient in both DGAT1 and DGAT2. The authors then made further random gene disruptions in these cells, and discovered that loss of the protein transmembrane thioredoxin 1 (TMX1) increases triglyceride accumulation when no extra fatty acids were supplied to the cells. Because TMX1 is an enzyme that does not itself catalyse triglyceride synthesis, this finding suggested that TMX1 usually restricts triglyceride formation by an enzyme that is distinct from DGAT1 and DGAT2.";
const paperMethods3 = "A similar strategy was applied to the epitope mapping of Fab-79D, which binds to KIT ECD4 and blocks its ligand-induced dimerization33. We first confirmed the loss of Fab-79D binding by introducing ten orthologue amino acid changes at predicted contact points33 (F316S, M318V, I319K, V323I, I334V, E360K, P363V, E366D, E376Q, H378R) and verified the preservation of stem cell factor (SCF) binding and ligand-induced kinase phosphorylation (Fig. 1b,c). To comprehensively screen the interaction between ECD4 and Fab-79D, we used a degenerated codon library in which each position of KIT ECD4 was substituted by a random amino acid (Fig. 1e (left)). We transduced HEK293T cells with the library and sorted KIT-expressing cells with either reduced or preserved Fab-79D staining";

const paperResults1 = "The system identified around 250 correlations between specific patterns in a chemical’s structure with a particular smell. The researchers combined these correlations into a principal odour map (POM) that the AI could consult when asked to predict a new molecule’s scent.";
const paperResults2 = "The authors then searched for this triglyceride-synthesis enzyme using a genetic approach known as a suppressor screen. In this case, they looked for genes that, when disrupted, limited triglyceride synthesis in HAP1 cells lacking TMX1. This led them to a previously uncharacterized protein — TMEM68, found in the endoplasmic reticulum — as the enzyme responsible for triglyceride accumulation when TMX1 is disrupted. The authors renamed this protein DGAT1/2-independent enzyme synthesizing storage lipids (DIESL).";
const paperResults3 = "To evaluate the transcriptional changes associated with epitope editing, we performed RNA-sequencing (RNA-seq) analysis of CD34+ HSPCs edited for FLT3, CD123, KIT or AAVS1, either stimulated or unstimulated with the respective ligands. We found 78, 2,667 and 7,944 differentially expressed genes associated with FLT3L, SCF and IL-3 stimulation, respectively (Extended Data Fig. 5a–e). By comparing receptor-edited conditions with AAVS1BE, we confirmed the absence of transcriptional differences both at the baseline and after stimulation (Fig. 3g and Supplementary Tables 3–5). Phospho-proteomic profiling by mass spectrometry analysis of edited CD34+ HSPCs showed concordant changes of differentially phosphorylated sites after ligand stimulation between the receptor-edited cells and the AAVS1 control cells (Extended Data Fig. 5f), again confirming in an unbiased manner the activation of downstream signalling by epitope-modified receptors. To further corroborate the minimal impact on the differentiation ability of receptor-edited HSPCs, we performed expansion culture and a colony-forming assay and observed comparable absolute cell counts and numbers of myeloid and erythroid colonies (Fig. 3h and Extended Data Fig. 4g).";

const paperDiscussion1 = "The next step, Wiltschko says, is to find out how odorants combine and compete with one another to create what the human brain interprets as a smell that is entirely different from those of each of the individual odorants. Meyer and Firestein say this will be very difficult: mixing just 100 molecules in different combinations of 10 produces 17 trillion variations, and the number of possible combinations quickly becomes far too many for a computer to analyse.";
const paperDiscussion2 = "So what is the biological role of DIESL? McLelland and colleagues found that, in cultured cells, DIESL plays a key part in maintaining the function of mitochondria — the organelles that act as powerhouses for cells — under conditions in which the supply of lipids is limited. Furthermore, when the authors generated ‘knockout’ mice lacking the gene that encodes DIESL, the animals were found to gain weight more slowly than did wild-type mice around the time of weaning, a metabolically stressful period when the amount of lipid in the diet decreases markedly. Moreover, compared with wild-type mice, the adult knockout mice had lower body weight, less body fat and lower levels of triglycerides in the bloodstream.";
const paperDiscussion3 = "One exonic and two intronic sites for CD123 sgRNA-R were eliminated from the final analysis owing to an insufficient number of reads. Reads were processed using the CRISPResso2 tool (CRISPRessoPooled), setting as the quantification window the amplicon interval overlapping with the sgRNA. We modelled the proportion of EditedReads over TotalReads (unedited + edited) using a binomial response generalized linear model (logistic regression) including the following covariates: DonorID, factor distinguishing cell donor; treatment, a binary variable having value treatment = 1 for edited and treatment = 0 for mock samples. Standard logistic regression estimation frameworks have convergence issues when the input data table is sparse (multiple samples with EditedReads = 0). To address this issue, we adopted a bias-reduction approach69, a second-order unbiased estimator that returns finite standard errors for the coefficients under all conditions. We performed the regression and analysed the results for each locus separately and calculated: (1) EditedReads proportion estimation and related 95% confidence interval for all samples; (2) the significance of the treatment coefficient (Wald test for the null hypothesis β = 0 and α = 0.05). Suppose the coefficient estimate is positive and significant.";

const [partsIndex, setPartsIndex] = useState(0);

const goHome = () => {
  router.push('/');
}

function showParts() {

  let parts;

  if (showPaper1 === 'true') {
      parts = iterateThroughParts("paper1");
  }
  
  if (showPaper2 === 'true') {
      parts = iterateThroughParts("paper2");
  }

  if (showPaper3 === 'true') {
      parts = iterateThroughParts("paper3");
  }

  return parts;

}

function iterateThroughParts(paperNum) {

  let partsList = [];

  if (paperNum === "paper1")
    {
      if (showIntro === 'true') {
        partsList.push(paperIntro1);
      }

      if (showAbstract === 'true') {
        partsList.push(paperAbstract1);
      }

      if (showMethods === 'true') {
        partsList.push(paperMethods1);
      }

      if (showResults === 'true') {
        partsList.push(paperResults1);
      }

      if (showDiscussion === 'true') {
        partsList.push(paperDiscussion1);
      }

    }

    if (paperNum === "paper2")
    {
      if (showIntro === 'true') {
        partsList.push(paperIntro2);
      }

      if (showAbstract === 'true') {
        partsList.push(paperAbstract2);
      }

      if (showMethods === 'true') {
        partsList.push(paperMethods2);
      }

      if (showResults === 'true') {
        partsList.push(paperResults2);
      }

      if (showDiscussion === 'true') {
        partsList.push(paperDiscussion2);
      }

    }
    
    if (paperNum === "paper3")
    {
      if (showIntro === 'true') {
        partsList.push(paperIntro3);
      }

      if (showAbstract === 'true') {
        partsList.push(paperAbstract3);
      }

      if (showMethods === 'true') {
        partsList.push(paperMethods3);
      }

      if (showResults === 'true') {
        partsList.push(paperResults3);
      }

      if (showDiscussion === 'true') {
        partsList.push(paperDiscussion3);
      }

    }

    return partsList;
}

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

const showQuizNavigation = () => {
   const arrows = (<div>
      <Button onClick={() => changePart("left")}><ArrowLeftIcon></ArrowLeftIcon></Button>
      <Button onClick={() => changePart("right")}><ArrowRightIcon></ArrowRightIcon></Button>
  </div>);

  return arrows
}

const partsList = showParts();

function changePart(direction) {

  console.log(partsIndex);
  console.log(partsList.length);

  if (direction === "left" && partsIndex > 0) {
      setPartsIndex(partsIndex - 1);
  }

  if (direction === "right" && partsIndex < partsList.length - 1) {
      setPartsIndex(partsIndex + 1);
  }
}



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
    
     {/* {showPaper1 === 'false' && showPaper2 === "false" && showPaper3 === "false" && (
        <div>
           <Typography variant="body1" sx={{ mb: 2, fontSize: "3.0rem" }}>
              <span className={styles.lgbDescription}>You did not select any papers to read, go back and select one!</span>
           </Typography>
        </div>
     )} */}
      <div>

        {showPaper1 === 'true' && (
          <Card className={styles.largeAbstractDisplay}>
            <CardContent>
              <Typography variant="body1" sx={{ mb: 2, fontSize: "1.0rem" }}>
                <span className={styles.readPaperHeader}><b>{showChosenPaper()}</b></span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {partsList[partsIndex]}
              </Typography>
              <br />
              {showQuizNavigation()}
            </CardContent>
          </Card>
        )}

        {showPaper2 === 'true' && (
          <Card className={styles.largeAbstractDisplay}>
          <CardContent>
              <Typography variant="body1" sx={{ mb: 2, fontSize: "1.0rem" }}>
                <span className={styles.readPaperHeader}><b>{showChosenPaper()}</b></span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {partsList[partsIndex]}
              </Typography>
              {showQuizNavigation()}
          </CardContent>
          </Card>
        )}

        {showPaper3 === 'true' && (
          <Card className={styles.largeAbstractDisplay}>
          <CardContent>
            <Typography variant="body1" sx={{ mb: 2, fontSize: "1.0rem" }}>
                <span className={styles.readPaperHeader}><b>{showChosenPaper()}</b></span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {partsList[partsIndex]}
            </Typography>
            {showQuizNavigation()}
          </CardContent>
        </Card>
        )}

    </div> <br />


    <br />

        <Link 
            href={{
                pathname: '/take-quiz',
                query: {
                    showPaper1: showPaper1,
                    showPaper2: showPaper2,
                    showPaper3: showPaper3, 
                    paperNames: paperNames,
                    showIntro: showIntro,
                    showAbstract: showAbstract,
                    showMethods: showMethods,
                    showResults: showResults,
                    showDiscussion: showDiscussion,
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
      
        <Link href={{pathname: "/paper-portion",
      
              query: { 
                showPaper1: showPaper1,
                showPaper2: showPaper2,
                showPaper3: showPaper3, 
                paperNames: paperNames,
              }
      
          }}
            passHref
          >
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              &larr; <b>I want to Choose Different Parts of the paper</b>
            </Typography>
        </Link>

   </div>
 )
}



