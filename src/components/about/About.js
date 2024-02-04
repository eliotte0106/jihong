import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd {firstName}/education </p>
            <p><span style={{color: info.baseColor}}>{firstName}/education <span
                className={Style.green}>(main)</span> $ </span>
                cat academics
            </p>
            <ul>
                <li>{info.education.school} </li>
                <li>{info.education.type} </li>
                <li>Concentration: {info.education.concentration} </li>
                <li>{info.education.term} </li>
            </ul>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls -a</p>
            <p style={{color: info.baseColor}}> Skills</p>
            <ul className={Style.skills}>
                {info.skills.Programming.map((p, index) => <li key={index}>{p}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Concepts</p>
            <ul className={Style.skills}>
                {info.skills.Concepts.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                resume/experience</p>
            <p><span style={{color: info.baseColor}}>resume/experience <span
                className={Style.green}>(main)</span> $</span> ls -a</p>
            <ul>
                {info.experience.map((exp, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{}</Box>
                        <li>Title: {exp.title} </li>
                        <li>Company: {exp.company} </li>
                        <li>Date: {exp.term} </li>
                        <li>Work: {exp.work.map((work, index) => (
                            <div key={index}>{work} </div>
                        ))}
                        </li>
                    </li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}