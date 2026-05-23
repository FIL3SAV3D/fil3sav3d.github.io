import React from "react";
import "./Style/Home.css";
import { VideoBG } from "../Components/BGVideo";

import { motion } from "framer-motion";

import { Title } from "../Components/TextComponents"

import { Link } from 'react-router-dom';

export function HorizontalBox() {
    return (
        <div className="HorizontalBox">

        </div>
    )
}

export function VerticalBox() {
    return (
        <div className="VerticalBox">

        </div>
    )
}

export function GameProjectItem(props) {
    const thumbnailSrc = props.thumbnailSrc
    const linkTo = props.linkTo
    const title = props.title
    const description = props.description
    return (
        <div className="BoxItem">
            <Link to={linkTo}>
                <div className="BoxItemContainer" style={{ border: "1px solid var(--sec)" }}>
                    <div className="HorizontalBox">
                        <div className="BoxItem">
                            <div className="GPThumbnailContainer">
                                <img src={thumbnailSrc} alt="" className="GPThumbnail"/>
                            </div>
                        </div>
                        <div className="BoxItem">
                            <Title text={title}></Title>
                            <h5>{description}</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

function Home() {
    return (
        <div className="HomeViewport">
            <VideoBG source="videos/VideoHomeBG.mp4" />
            <motion.div
                initial={{ opacity: "0%" }}
                animate={{ opacity: "100%", transition: { ease: "easeOut", duration: 1.5 } }}
                exit={{ opacity: "0%", transition: { ease: "easeIn", duration: 0.22 } }}
            >
                <div className="HomeContent">
                    <div className="HorizontalBox">
                        <div className="BoxItem">
                            <div className="BoxItemContainer">
                                <h5>A Little About Me</h5>
                                <div className="HeadShotContainer">
                                    <img src="images/Headshot.png" alt="" className="Headshot" />
                                </div>
                                <h6>Hello!</h6>
                                <h6>My name is Kjell Hopkins
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non molestie massa. In volutpat nisl nec orci volutpat, et interdum turpis malesuada. Fusce posuere imperdiet mi at iaculis. Duis tincidunt placerat turpis, et tempus justo interdum in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer et convallis nunc. Etiam id lacus pharetra, faucibus eros in, auctor libero. Aenean aliquet urna eu ultricies accumsan. Curabitur ut massa fermentum, imperdiet nibh sit amet, rhoncus lectus. Etiam volutpat dui velit. Ut viverra, est at posuere bibendum, dolor odio semper ligula, volutpat varius diam velit sed justo. Etiam non rutrum orci. Sed nec ipsum vel arcu sagittis vehicula. Cras eget odio fringilla, porttitor mi non, sagittis nulla. In hac habitasse platea dictumst.
                                </h6>
                            </div>
                        </div>

                        <div className="VerticalBox">
                            <div className="BoxItem">
                                <div className="BoxItemContainer">
                                    <h5 >Systems / Tools / Rendering / Gameplay</h5>
                                    <h5 >Programmer</h5>
                                </div>

                            </div>
                            <div className="BoxItem">
                                <div className="BoxItemContainer">
                                    <h5>Contact Info</h5>
                                    <div className="HorizontalBox" id="FlexForceRowCenter">
                                        <a href="https://www.linkedin.com/in/kjell-hopkins/">
                                            <img src="icons/LinkedIn.png" alt="" className="Icon" />
                                        </a>
                                        <a href="mailto:fil3sav3d@gmail.com/">
                                            <img src="icons/EMail.png" alt="" className="Icon" />
                                        </a>
                                        <a href="https://github.com/FIL3SAV3D">
                                            <img src="icons/GitHub.png" alt="" className="Icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="HorizontalBox">
                        <div className="VerticalBox">
                            <div className="HorizontalBox" style={{ justifyContent: "center", flexDirection: "row" }}>
                                <div className="BoxItemContainer" style={{ width: "300px" }}>
                                    <h2>Game Projects</h2>
                                </div>
                            </div>


                            <div className="HorizontalBox">
                                <div className="VerticalBox">
                                    <GameProjectItem
                                        thumbnailSrc="images/Poster_BlackGold.png"
                                        linkTo="/black-gold"
                                        title="BlackGold"
                                        description="Is an atmospheric management game about operating a deep-sea rig and surviving the horrors of the depths." />
                                </div>
                                <div className="VerticalBox">
                                    <GameProjectItem thumbnailSrc="images/Poster_OpponentsInCrime.png"
                                        linkTo="/opponents-in-crime"
                                        title="Opponents In Crime"
                                        description="Burglary, the most competitive job in the world!" />
                                </div>
                            </div>
                            <div className="HorizontalBox">
                                <div className="VerticalBox">
                                    <GameProjectItem thumbnailSrc="images/Poster_Nautilus.png"
                                        linkTo="/nautilus"
                                        title="Nautilus"
                                        description="Is an atmospheric, immersive deep-sea experience built as a visual and auditory spectacle." />
                                </div>
                                <div className="VerticalBox">
                                    <GameProjectItem thumbnailSrc="images/Poster_ExUmbris.png"
                                        linkTo="/ex-umbris"
                                        title="Ex Umbris"
                                        description="Is a " />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="HorizontalBox">
                        <div className="BoxItem">
                            <div className="BoxItemContainer">
                                <h2>Specialization: Game Engine</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div >

    );
}

export default Home;