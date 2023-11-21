import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TopicSelection() {

  const router = useRouter();

  const selectedTopics = router.query.selectedTopics;

  const goHome = () => {
    router.push('/');
  }

  function displaySelectedTopics() {
      
    return(
         <div >
           <div>
             {selectedTopics.map((topic, index) => (
               <p key={index}>{topic}</p>
             ))}
           </div>
         </div>
   );
   }


   function displayInterestingArticles() {
    return (
      <div>
        <div>
            <p> &rarr; Article 1 Headline</p>
            <p>&rarr; &rarr; Article 1: Link</p>
        </div>

        <div>
             <p> &rarr; Article 2 Headline</p>
             <p>&rarr; &rarr;Article 2: Link</p>
        </div>

        <div>
            <p> &rarr; Article 3 Headline</p>
            <p>&rarr; &rarr; Article 3: Link</p>
        </div>  <br />
      </div>
    );
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
        <title>Let's Go Biotech - Select Topic</title>
        <meta name="description" content="created by Rohan Cain Robinson" />
      </Head>

      <AppBar position="fixed" color="secondary">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.cursorPointer} onClick={goHome}>
            🧬 Let's Go Biotech
            </Typography>
        </Toolbar>
      </AppBar>
    
      <p><i><b>These three articles are interesting, check them out!</b></i></p>        
      
      <br />

      <div>
        { displayInterestingArticles() }
      </div>


      <br />

      <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }}
                href="/save-info"
        >
            Done Reading? 
      </Button>

    <br />

      <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }}
                href="/"
        >
            Back 
      </Button>

    </Box>
  );
}
