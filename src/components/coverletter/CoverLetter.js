import React from 'react';
import Style from './CoverLetter.module.scss'
import {Box} from "@mui/material";
import Container from '@mui/material/Container';

export default function CoverLetter() {
    return(
    <Container>
    <Box border={'2px solid grey'} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} marginTop={20} marginLeft={20} marginRight={20}>
      <div className={Style.CoverLetter}>
        <header>
          <p className={Style.cover}>Dear Hiring Manager,</p>
        </header>
        <section className={Style.sec}>
          <p className={Style.cover}>
          I am writing to express my interest in the Software Engineering position posted on your career website. 
          As a 4th-year Computer Science major at Georgia Tech, I am eager to contribute my skills and passion for problem-solving to your department.
          My expertise spans full-stack engineering, encompassing both front-end and back-end development using JavaScript/TypeScript with various frameworks. 
          Additionally, I have a keen interest in mobile app development, including iOS, Android, and React Native.
          </p>
        </section>
        <section className={Style.sec}>
          <p className={Style.cover}>
          In my previous experiences, I have demonstrated proficiency in web and mobile app development using Java, JavaScript, Python, C, Kotlin, and Swift. 
          I am well-versed in utilizing tools such as AWS, MySQL, PostgreSQL, MongoDB, Docker, Tableau, and more. During my internships, I successfully created 
          new features that directly contributed to product enhancements through GitHub repositories.
          One notable project involved building a data visualization-based web app using Python and JavaScript. 
          This experience enhanced my ability to manage services and applications effectively.
          </p>
        </section>
        <section className={Style.sec}>
          <p className={Style.cover}>
          I am excited about the prospect of contributing to the implementation of services or products in your department. 
          I believe my skills align well with the needs of your company, and I am eager to discuss how I can be an asset to your team. 
          Thank you for considering my application. I look forward to the opportunity to further discuss how my skills and experiences 
          can contribute to the success of your company.
          </p>
        </section>
        <section className={Style.sec}>
          <p className={Style.cover}>Sincerely,</p>
        </section>
        <section className={Style.sec}>
          <p className={Style.cover}>Jihong Park</p>
        </section>
      </div>
    </Box>
    </Container>
    )
  };
  