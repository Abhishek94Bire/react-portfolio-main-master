import React from "react";

import styles from "./Hero.module.css";
import Type from "../../features/Type";
import { RxPinBottom } from "react-icons/rx";

export const Hero = () => {
  return (

    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abhishek Bire</h1>
        <p className={styles.description}>
          <Type />
        </p>
     
        <a href='https://drive.google.com/file/d/1tAUG259N9KS2KVc2Ab0irbV6FWT3cwlr/view?usp=drive_link' className={styles.contactBtn} target="_blank"
          download='AbhishekResume' >
          <RxPinBottom />  Resume
        </a>
      
       


      </div>
      <img
        src='https://img.freepik.com/free-vector/illustrator-designer-man-holding-digital-tablet_107791-12062.jpg?size=626&ext=jpg&ga=GA1.1.1951385704.1701609387&semt=ais'
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>
  );
};
