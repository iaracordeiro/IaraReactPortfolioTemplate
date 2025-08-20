import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                sobre{firstName} </p>
            <p><span style={{color: info.baseColor}}>sobre{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
            <p><span style={{color: info.baseColor}}>sobre{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio2}
            </p>
            <p><span style={{color: info.baseColor}}>sobre{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio3}
            </p>
            <p><span style={{color: info.baseColor}}>sobre{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio4}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills
            </p>
            <p><span style={{color: info.baseColor}}>skills <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Expert em</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Tive contato</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interesses</p>
            <p><span style={{color: info.baseColor}}>hobbies/interesses <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    function formacao() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                skills/formação</p>
            <p><span style={{color: info.baseColor}}>skills/formação <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.formacao.map((formacao, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{formacao.emoji}</Box>{formacao.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={formacao()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}