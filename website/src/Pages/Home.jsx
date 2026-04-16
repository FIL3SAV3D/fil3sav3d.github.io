import React from "react";
import "./Style/Home.css";
import DecryptedText from "../Components/DecryptedText";
import { VideoBG } from "../Components/BGVideo";

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

// function VideoBG(props) {
//     const videoSource = props.source
//     return (
//         <motion.div className="bgVideo"
//             initial={{ filter: "blur(20px)" }}
//             animate={{ filter: "blur(2px)", transition: { ease: "easeOut", duration: 1.5 } }}
//             exit={{ filter: "blur(20px)", transition: { ease: "easeIn", duration: 0.22 } }}
//         >
//             <video src={videoSource} autoPlay={true} muted={true} loop={true} controls={false} />

//         </motion.div>
//     );
// }

function Home() {
    return (
        <div>
            <VideoBG source="videos/VideoHomeBG.mp4" />

            {/* <div className="home-page">
                <motion.div className="card-container"
                    initial={{ opacity: 0.0 }}
                    animate={{ opacity: 1.0 }}
                    exit={{ opacity: 0.0 }}
                    transition={{ duration: 1.0, ease: "easeInOut" }}
                >
                    <img src="/headshot.jpg" className="headshot" />
                    <div className="card-description">
                        <DTH3 text="Systems Programmer" />
                        <DTH1 text="Kjell Hopkins" />
                        <hr style={{ color: 'rgba(255,255,255, 0.5)', width: '100%' }} />
                        <div className="roles">
                            <DTH2 text="Systems" />
                            <DTH2 text=" / " />
                            <DTH2 text="Tools" />
                            <DTH2 text=" / " />
                        </div>
                        <div className="roles">
                            <DTH2 text="Rendering" />
                            <DTH2 text=" / " />
                            <DTH2 text="Gameplay" />
                        </div>
                    </div>
                </motion.div>
            </div> */}
        </div>

    );
}

export default Home;