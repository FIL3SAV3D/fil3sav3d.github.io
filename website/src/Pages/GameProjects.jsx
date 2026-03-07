import React from "react";
import './Style/GameProjects.css';

import { Link } from 'react-router-dom';

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
                animateOn="both"
                className="hd3"
                parentClassName='pc'
                encryptedClassName="he3"
            />
        </div>
    )
}

function GameProjects() {
    return (
        <motion.div className="game-projects-page"
            initial={{ opacity: 0.0 }}
            animate={{ opacity: 1.0 }}
            exit={{ opacity: 0.0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}>
            <div className="game-projects-content-container">
                <div className="game-projects-list-top">
                    <Link className='cursor-target' style={{ width: '50%', marginRight: 10 }} to="/black-gold">
                        <div className="game-projects-game-info-L">
                            <div className="img-border">
                                <img src="images/blackGold.png" className="black-gold-img" />
                            </div>
                            <div className="card-information">
                                <DTH1 text="GP1: Black Gold" />
                                <hr width={300} />
                                <div className="card-information-text">
                                    <DTH2 text="An atmospheric management game about operating a deep-sea rig and surviving the horrors of the depths." />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link className='cursor-target' style={{ width: '50%' }} to="/">
                        <div className="game-projects-game-info-R">
                            <div className="img-border">
                                <img src="images/opponents.png" className="black-gold-img" />
                            </div>
                            <div className="card-information">
                                <DTH1 text="GP2: Opponents In Crime" />
                                <hr width={450} />
                                <div className="card-information-text">
                                    <DTH2 text="Burglary, the most competitive job in the world!" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="game-projects-list-bottom">
                    <Link className='cursor-target' style={{ width: '50%', marginRight: 10 }} to="/">
                        <div className="game-projects-game-info-L">
                            <div className="img-border">
                                <img src="images/nautilus.png" className="black-gold-img" />
                            </div>
                            <div className="card-information">
                                <DTH1 text="GP3: Nautilus" />
                                <hr width={250} />

                                <div className="card-information-text">
                                    <DTH2 text="An atmospheric, immersive deep-sea experience built as a visual and auditory spectacle."/>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="game-projects-game-info-TBD">
                        <DTH1 text="TO BE MADE... WITH LOVE!" />
                        <hr width={500} />
                        <DTH1 text="2026-03-16 → 2026-05-15" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default GameProjects;