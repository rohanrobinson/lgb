import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TopicSelection() {

  const router = useRouter();

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
    
    <div>
        <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
            <b><span className={styles.lgbHeader}><i>Select the topic you're most interested in!</i></span></b> 
        </Typography>

      <div className={styles.topicDisplay}>
        <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/select-paper',
            query: {
               topicSelected: 'AI'
            }
        }}
          >
            <span className={styles.topicsTextLarge}>🧠 AI</span>
          </Link>

          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/select-paper',
            query: {
               topicSelected: 'Genomics'
            }
        }}
          >
            <span className={styles.topicsTextLarge}>🧫 Genomics</span>
          </Link>

          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/select-paper',
            query: {
              topicSelected: 'Robotics'
            }
          }}
          >
            <span className={styles.topicsTextLarge}>🤖 Robotics</span>
          </Link>

          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/select-paper',
            query: {
              topicSelected: 'Therapeutics'
            }
          }}
          >
            <span className={styles.topicsTextLarge}>💊 Therapies</span>
          </Link>

          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/select-paper', 
            query: {
              topicSelected: 'Space'
            }
          }}
          >
            <span className={styles.topicsTextLarge}>🚀 Space</span>
          </Link>
        </div>
    </div>

    <br />




    </Box>
  );
}

