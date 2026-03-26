import React from "react";
import './Style/GameEngine.css'

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

function DTH1Engine(props) {
    const { text } = props;
    return (
        <div>
            <DecryptedText text={text}
                revealDirection="center"
                sequential={true}
                animateOn="view"
                className="hd1Engine"
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
                animateOn="both"
                className="hd3"
                parentClassName='pc'
                encryptedClassName="he3"
            />
        </div>
    )
}

function GameEngine() {
    return (
        <motion.div className="game-engine-page"
            initial={{ opacity: 0.0 }}
            animate={{ opacity: 1.0 }}
            exit={{ opacity: 0.0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}>
            <div className="game-engine-content-container">
                <DTH1 text="TO BE DOCUMENTED VERY SOON... WITH LOVE!" />
                <DTH1 text="CHECK OUT THE ACTIVE DEVELOPMENT HERE: " />
                <a href="https://github.com/FIL3SAV3D/Arcanum" className='cursor-target'><DTH1Engine text="ARCANUM"/></a>
            </div>
        </motion.div>
    )
}

export default GameEngine;