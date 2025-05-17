// About Us  
import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import styles from '../styles/AboutUs.module.css';

export default function AboutUs() {

  return (
    <div className={styles.aboutUsMessage}>
      
      <Navbar />
      <p>
      <b>Our Goal is Simple:</b> <br />
      Keep you updated with the cutting edge happening in biology research with interactive content!
      </p> <br /> 

      Created by <a href="https://rohanrobinson.io" target="_blank" >Rohan Robinson</a>

      



    </div>
  );
}

