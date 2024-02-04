import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>😊</span>
            </h1>
            {/* <h2>I'm {info.position}.</h2> */}
            <Box component={'ul'} p={'0.8rem'}>
            <p className={Style.temp}>
               My name is Jihong and I'm currently a 4-th year Computer Science student at Georgia Tech.<br />
               I'm a software engineer who is eager to find solutions to build a powerful product for customers<br /> and users.
               My biggest interests are full-stack engineering and mobile app development.<br />
               I enjoy learning new tools, concepts, and programming languagues to grow technical skills.<br />
               In addition to my technical skills, I love to talk about tech related stuff, trending skills,
               and <br />any interesting ideas. I'm happy to share my resume, experience, projects, skills, and cover letter <br />with you.
               Feel free to contact me through email or Linkedin.<br />
            </p>
            <br />
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'left'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}