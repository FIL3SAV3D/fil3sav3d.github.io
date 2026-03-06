import React from "react";
import "./Style/Home.css";
import DecryptedText from "../Components/DecryptedText";

import { motion } from "framer-motion";

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
                speed={30}
                maxIterations={10}
                animateOn="view"
                className="hd2"
                encryptedClassName="he2"
            />
        </div>
    )
}

function DTH3(props) {
    const { text } = props;
    return (
        <div>
            <DecryptedText text={text}
                revealDirection="center"
                sequential={true}
                speed={30}
                maxIterations={2}
                animateOn="view"
                className="hd3"
                encryptedClassName="he3"
            />
        </div>
    )
}

function Home() {
    return (
        <div className="home-page">
            <motion.div className="card-container"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.3 }}>
                    
                <img src="/headshot.jpg" className="headshot" />
                <div className="card-description">
                    <DTH3 text="Systems Programmer" />
                    <DTH1 text="Kjell Hopkins" />
                    <div className="roles">
                        <DTH2 text="Systems" />
                        <DTH2 text=" / " />
                        <DTH2 text="Tools" />
                        <DTH2 text=" / " />
                        <DTH2 text="Rendering" />
                        <DTH2 text=" / " />
                        <DTH2 text="Gameplay" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Home;