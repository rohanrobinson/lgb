import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
 return (
   <div className={styles.container}>
     <Head>
       <title>Let's Go Biotech - Home Base</title>
       <meta name="description" content="Generated by create next app" />
       {/* <link rel="icon" href="/favicon.ico" /> */}
     </Head>
       <h1>
       🧬 Let's Go Biotech 🚀
       </h1>
      <br />
         <h2><i>Biotechnology is taking off. Its time to level up!</i></h2>{' '}
       <div>
         <a>
          <p> (1) Select some Exciting Papers</p>
         </a>
<br />
         <a>
           <p> (2) Read their Abstracts</p>
         </a>
<br />
         <a>
           <p>(3) Take a Short Quiz over them</p>
         </a>
<br />
         <a href="/select-paper" className={styles.greenSquare}>
           <h2>Get Started</h2>
         </a>
       </div>
   </div>
 )
}
