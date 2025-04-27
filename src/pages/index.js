import Topic from '../pages/topic';
import { useState } from 'react';

export default function Home() {

  const [selectedTopic, setSelectedTopic] = useState(null);

  const topicList = ["Genetics", "Fertility", "Cancer Research", "Aging Research", "Artificial Intelligence", "Diagnostics", "Medical Devices", "Bioinformatics", "Immunology"];

  
  const concepts = {
        "Genetics": ["DNA", "RNA", "Allele"],
        "Fertility": ["Ovulation", "Egg", "Sperm"],
        "Cancer Research": ["Staging", "Tumor", "Malignancy"],
        "Aging Research": ["Telomeres", "Transcription Factors", "Topoisomerase"],
        "Artificial Intelligence": ["Regression", "Machine Learning", "Classification"],
        "Diagnostics": ["MRI", "X-Ray", "Ultrasound"],
        "Medical Devices": ["Defibrillator", "Pacemaker", "Implant"],
        "Bioinformatics": ["Data Pipeline", "Sequence Analysis", "String"],
        "Immunology": ["Antigen", "T Cell", "B Cell"]
    }  
  
  
  
  
  const handleTopicClick = (topicName) => {
    setSelectedTopic(topicName);
  };

  const closeModal = () => {
    setSelectedTopic(null);
  };



  return (
      <div>
      <h1>Let's Go Biotech</h1> <br />
      <h2>Select a topic you're interested in learning about!</h2>
      <div className="topicsGrid">
        {topicList.map(topic => (
          <Topic key={topic} topicName={topic} onClick={() => handleTopicClick(topic)} />
        ))}
      </div>
      {selectedTopic && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={e => e.stopPropagation()}>
            <h2>{selectedTopic}</h2>
            <p>Here are three concepts you should check know before proceeding!</p>
            <ul>
              {concepts[selectedTopic].map((concept, index) => (
                <li key={index}>{concept}</li>
              ))}
            </ul>
            {/* <button onClick={closeModal}>X</button> */}
            <button className="closeButton" onClick={closeModal} aria-label="Close">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}
