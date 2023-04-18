import Head from 'next/head';
import styles from './Home.modules.css';

export default function PaperCuration() {
 return (
   <div>
     <Head>
       <title>Let's Go Biotech - Papers</title>
       <meta name="description" content="Generated by create next app" />
       {/* <link rel="icon" href="/favicon.ico" /> */}
     </Head>
       <h1>
       🧬 Let's Go Biotech 🚀
       </h1>
      <br />
       <p>Howdy there!</p>
       <p>Choose the paper below you find the most interesting!</p>
       <br />
       <div id="bio-papers">
            <div className={styles.coolPaper}>Paper over Foundation Generalist Model</div>
            <div className={styles.coolPaper}>Paper over FHIR Genomics</div>
            <div className={styles.coolPaper}>Paper over Yamanaka Factors</div>
       </div>
       <a href="/">
           <h2>Back Home</h2>
         </a>
   </div>
 )
}
