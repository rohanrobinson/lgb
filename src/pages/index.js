import Navbar from '../components/Navbar';
import Topic from '../components/Topic';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  // const [selectedTopic, setSelectedTopic] = useState(null);

  const topicList = ["Genetics", "Fertility", "Cancer", "Aging", "Artificial Intelligence", "Diagnostics", "Medical Devices", "Bioinformatics", "Immunology"];

   
  // const handleTopicClick = (topicName) => {
  //   setSelectedTopic(topicName);
  // };

  // const closeModal = () => {
  //   setSelectedTopic(null);
  // };



  return (
      <div>
        <Navbar />
        <h1>Select a topic you're interested in learning about!</h1>
        <div className="topicsGrid">
          {topicList.map(topic => (
            <Topic key={topic} topicName={topic} 

                onClick={() => {
                  router.push({
                    pathname: '/Learn',
                    query: { topic: topic }, // Pass the selected topic as a query parameter
                  });
                }} 
            // onClick= {() => handleTopicClick(topic)} 
            />
          ))}
        </div>
        {/* {selectedTopic && (
          <div className="modalOverlay" onClick={closeModal}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
              <h2>{selectedTopic}</h2>
              <p>Here are three concepts you should check know before proceeding!</p>
              <ul>
                {concepts[selectedTopic].map((concept, index) => (
                  <li key={index}>{concept}</li>
                ))}
              </ul>

              <button className="affirmativeButton" 
                      onClick={() => {
                        router.push({
                          pathname: '/Learn',
                          query: { topic: selectedTopic }, // Pass the selected topic as a query parameter
                        });
                      }} 
              >✅ I got it!</button>
              <button className="affirmativeButton" onClick={closeModal} aria-label="Close">❌ Nah! I need to review!</button>
              <button className="closeButton" onClick={closeModal} aria-label="Close">&times;</button>
            </div>
        </div>
      )} */}
    </div>
  );
}
