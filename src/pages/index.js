
import Topic from '../pages/topic';
import { useState } from 'react';
export default function Home() {

  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topicName) => {
    setSelectedTopic(topicName);
  };

  const closeModal = () => {
    setSelectedTopic(null);
  };



  return (
      // <div>
      //   <h1>Let's Go Biotech</h1>
      //   <h2>Select a topic you're interested in learning about!</h2>
      //   <div className="topicsGrid">
      //     <Topic topicName="Genetics" />
      //     <Topic topicName="Fertility" />
      //     <Topic topicName="Cancer Research" /> 
      //     <Topic topicName="Aging Research" />
      //     <Topic topicName="Artificial Intelligence" />
      //     <Topic topicName="Diagnostics" />
      //     <Topic topicName="Medical Devices" />
      //     <Topic topicName="Bioinformatics" />
      //     <Topic topicName="Immunology" />
      //   </div>            
      // </div>
      <div>
      <h1>Let's Go Biotech</h1>
      <h2>Select a topic you're interested in learning about!</h2>
      <div className="topicsGrid">
        {["Genetics", "Fertility", "Cancer Research", "Aging Research", "Artificial Intelligence", "Diagnostics", "Medical Devices", "Bioinformatics", "Immunology"].map(topic => (
          <Topic key={topic} topicName={topic} onClick={() => handleTopicClick(topic)} />
        ))}
      </div>
      {selectedTopic && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={e => e.stopPropagation()}>
            <h2>{selectedTopic}</h2>
            <p>More information about {selectedTopic} goes here.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
