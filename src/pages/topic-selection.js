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
            <b><span className={styles.lgbHeader}><i>Select a topic!</i></span></b> 
        </Typography>

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
               topicSelected: 'Genomics',
               topicEmoji: '🧫'
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
              topicSelected: 'Therapeutics',
              topicEmoji: '🧫'
            }
          }}
          >
            <span className={styles.topicsTextLarge}>💊 Therapeutics</span>
          </Link>

          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/select-paper', 
            query: {
              topicSelected: 'Space',
              topicEmoji: '🚀'
            }
          }}
          >
            <span className={styles.topicsTextLarge}>🚀 Space</span>
          </Link>

          <Link
          variant="contained" 
          color="success" 
          size="large" 
          href={{
            pathname: '/select-paper', 
            query: {
              topicSelected: 'Life Extension',
              topicEmoji: '🦖'
            }
          }}
          >
            <span className={styles.topicsTextLarge}> 🦖 Life Extension</span>
          </Link>
        </div>
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

