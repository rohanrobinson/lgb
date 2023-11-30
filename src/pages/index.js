import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, AppBar, Toolbar, Button, Typography, Input } from '@mui/material';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const [selectedTopics, setSelectedTopics] = useState([]);

  const goToAboutUsPage = () => { router.push('/about-us'); }

  const handleTopicClick = (topic) => {
      if (!selectedTopics.includes(topic)) {
        setSelectedTopics([...selectedTopics, topic]);
      }
      else {
        setSelectedTopics(selectedTopics.filter(selectedTopic => selectedTopic !== topic));
      }
    };

  function displaySelectedTopics() {
      
   return(
        <div >
          <h3>Selected Topics</h3>
          <div>
            {selectedTopics.map((topic, index) => (
              <p key={index}>{topic}</p>
            ))}
          </div>
        </div>
  );
  }

  return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        gap: 3,
        p: 3,
      }}> 

        <Head>
          <title>Let's Go Biotech - Home Page</title>
          <meta name="description" content="created by Rohan Cain Robinson" />
        </Head>

        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            🧬 Let's Go Biotech 
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} className={styles.cursorPointer} onClick={goToAboutUsPage}>
              About Us
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 1,
          mt: 4,
        }}>
            <b><span><i><h2>Have a hard time keeping up with everything going on in biotechnology?</h2></i></span></b> 
              <p>We help you stay updated by showing you  articles based on your interests</p>
        </Box>

      

        <p>Which of the following technologies interest you?</p>

        <div>
            {
            selectedTopics.includes('Gene Editing')
              ?

           ( <Button 
                  variant="contained" 
                  color="success" 
                  size="medium" 
                  sx={{ fontWeight: 'bold', fontSize: '12px', padding: '10px 25px', }}
                  onClick={() => handleTopicClick('Gene Editing')}
                >
                  Gene Editing   
            </Button>)
              :
            (<Button 
                  variant="contained" 
                  color="secondary" 
                  size="medium" 
                  sx={{ fontWeight: 'bold', fontSize: '12px', padding: '10px 25px', }}
                  onClick={() => handleTopicClick('Gene Editing')}
                >
                  Gene Editing   
            </Button>)

              }

          {
            selectedTopics.includes('Artificial Intelligence')
              ?

           ( <Button 
                  variant="contained" 
                  color="success" 
                  size="medium" 
                  sx={{ fontWeight: 'bold', fontSize: '12px', padding: '10px 25px', }}
                  onClick={() => handleTopicClick('Artificial Intelligence')}
                >
                  Artificial Intelligence   
            </Button>)
              :
            (<Button 
                  variant="contained" 
                  color="secondary" 
                  size="medium" 
                  sx={{ fontWeight: 'bold', fontSize: '12px', padding: '10px 25px', }}
                  onClick={() => handleTopicClick('Artificial Intelligence')}
                >
                  Artificial Intelligence   
            </Button>)

              }

{
            selectedTopics.includes('Brain Machine Interface')
              ?

           ( <Button 
                  variant="contained" 
                  color="success" 
                  size="medium" 
                  sx={{ fontWeight: 'bold', fontSize: '12px', padding: '10px 25px', }}
                  onClick={() => handleTopicClick('Brain Machine Interface')}
                >
                  Brain Machine Interface  
            </Button>)
              :
            (<Button 
                  variant="contained" 
                  color="secondary" 
                  size="medium" 
                  sx={{ fontWeight: 'bold', fontSize: '12px', padding: '10px 25px', }}
                  onClick={() => handleTopicClick('Brain Machine Interface')}
                >
                  Brain Machine Interface   
            </Button>)

              }




        </div>


          {/* { displaySelectedTopics() } */}

        <Link
        
        href={{
          pathname: '/topic-selection',
          query: {
              selectedTopics: selectedTopics,
          }
      }}
        >

        <Button 
                variant="contained" 
                color="success" 
                size="large" 
                sx={{ fontWeight: 'bold', fontSize: '24px', padding: '20px 35px', }}
        >
                Get Article Reccomendations   
          </Button>
        </Link>
      </Box>
    );
}
