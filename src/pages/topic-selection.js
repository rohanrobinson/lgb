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
    
      <p><i>Which topic are you interested in?</i></p> 
    
      <div className={styles.topicDisplay}>
        <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/select-paper',
            query: {
               topicSelected: 'Artificial Intelligence',
               topicEmoji: '🧠'
            }
        }}
          >
            <span className={styles.topicsTextLarge}>🧠 Artificial Intelligence</span>
          </Link>

          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/select-paper',
            query: {
               topicSelected: 'Genetics',
               topicEmoji: '🧬'
            }
        }}
          >
            <span className={styles.topicsTextLarge}>🧬 Genetics</span>
          </Link>

          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/select-paper',
            query: {
              topicSelected: 'Therapies',
              topicEmoji: '💊'
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
              topicSelected: 'Diagnostics',
              topicEmoji: '⚕️'
            }
          }}
          >
            <span className={styles.topicsTextLarge}>⚕️ Diagnostics</span>
          </Link>

          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/select-paper', 
            query: {
              topicSelected: 'Space Bio',
              topicEmoji: '🚀'
            }
          }}
          >
            <span className={styles.topicsTextLarge}>🚀 Space Biology</span>
          </Link>

      </div>

        <br />

      <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                href="/"
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '25px 35px', }}
              >
                Back
      </Button>
    </Box>
  );
}

