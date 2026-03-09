import React from "react";
import './Style/About.css';

import { motion } from "framer-motion";

import DecryptedText from '../Components/DecryptedText';

function DTH1(props) {
    const { text } = props;
    return (
        <div>
            <DecryptedText text={text}
                revealDirection="center"
                sequential={true}
                animateOn="view"
                className="hd1"
                encryptedClassName="he1"
            />
        </div>
    )
}

function DTH2(props) {
    const { text } = props;
    return (
        <div>
            <DecryptedText text={text}
                revealDirection="center"
                sequential={true}
                speedinput={1}
                maxIterations={1}
                animateOn="none"
                className="hd2"
                encryptedClassName="he2"
            />
        </div>
    )
}

function DTH3(props) {
    const { text } = props;
    return (
        <div className='dht3'>
            <DecryptedText text={text}
                revealDirection="center"
                speed={30}
                maxIterations={10}
                sequential={true}
                animateOn="none"
                className="hd3"
                parentClassName='pc'
                encryptedClassName="he3"
            />
        </div>
    )
}

function About()
{
    return (
        <motion.div className="about-page"
            initial={{ opacity: 0.0 }}
            animate={{ opacity: 1.0 }}
            exit={{ opacity: 0.0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}>
            <div className="about-content-container">
                <DTH1 text="About Me"/>
                <DTH3 text="My name is Kjell Martin Hopkins, I am 22 years old and was born in New Zealand.
                I moved to Sweden when I was 4 years old so I'm fluent in Swedish both written and spoken.
                But English is still my native tongue and I prefer speaking English more so."/>
                <DTH3 text="I fell in love with making Games about 4 years ago when my friend intially nudged me
                into making one with them. Ever since then I've wanted to work with games. I have especially
                found my niche of working on the foundations of what makes a games and/or the tools neccesary to make them.
                Than the actual gameplay itself, however I am no stranger to gameplay programming and would love
                work with it given the chance."/>
                <DTH3 text="Outside of games and programming I really like to climb! Being physically active is a must
                for me so I tend to doing some kind of physical labor to tire my body. I also really like making
                props! Like for movies, decoration, or cosplay!"/>
                <DTH3 text="Feel Free to contact me!"/>
                <DTH3 text="Gmail: fil3sav3d@gmail.com"/>
                <a className="cursor-target" href="https://www.linkedin.com/in/kjell-hopkins/"><DTH2 text="My LinkedIn"/></a>
                <a className="cursor-target" href="mailto:fil3sav3d@gmail.com/"><DTH2 text="My Gmail"/></a>
                <a className="cursor-target" href="https://github.com/FIL3SAV3D"><DTH2 text="My GitHub"/></a>
            </div>
        </motion.div>
    );
}

export default About;