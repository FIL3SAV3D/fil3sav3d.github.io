import React from "react";
import { VideoBG } from "../Components/BGVideo";

import { motion } from "framer-motion";

import { Title } from "../Components/TextComponents"

import { Link } from 'react-router-dom';

import { useState, useEffect, useRef } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}


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

export function Break(props) {
    const width = props.width;
    const height = props.height;
    const style = props.style;

    return (
        <div className={style} style={{ width: width, height: height }}>
        </div>
    )
}

export function Logo(props) {
    const src = props.src;

    return (
        <img src={src} alt="" />
    )
}

export function GameProjectItem(props) {
    const thumbnailSrc = props.thumbnailSrc;
    const linkTo = props.linkTo;
    const title = props.title;
    const description = props.description;

    return (
        <div className="VerticalBox">
            <div className="BoxItem">
                <motion.div
                    initial={{ opacity: "0%", transition: { ease: "easeIn", duration: 0.33 } }}
                    whileInView={{ opacity: "100%", transition: { ease: "easeIn", duration: 0.33 } }}
                >
                    <Link to={linkTo}>
                        <div className="BoxItemContainer" style={{ border: "1px solid var(--sec)" }}>
                            <div className="HorizontalBox">
                                <div className="BoxItem">
                                    <div className="GPThumbnailContainer">
                                        <img src={thumbnailSrc} alt="" className="GPThumbnail" />
                                    </div>
                                </div>
                                <div className="BoxItem">
                                    <Title text={title}></Title>
                                    <h5>{description}</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

function EntryCard({ ref }) {
    const { height, width } = useWindowDimensions();
    return (
        <motion.div ref={ref}
            initial={{ opacity: "0%", transition: { ease: "easeIn", duration: 0.33 } }}
            whileInView={{ opacity: "100%", transition: { ease: "easeIn", duration: 0.33 } }}
        >
            <div className="HorizontalBox" style={{ height: height, minHeight: "600px" }}>
                <div className="BoxItem">
                    <div className="BoxItemContainer">
                        <div className="HorizontalBox">
                            <div className="BoxItem" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Title text="Kjell Hopkins"></Title>
                                <Break style="LineBreak" width="350px" />
                                <Title text="Systems Programmer"></Title>
                                <h4>A programmer who loves FUCKING game engines</h4>
                                <Break style="Hidden" height="50px" />
                                <div className="BoxItem" style={{ width: "500px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                    <h5>Contact Info</h5>
                                    <div className="HorizontalBox" id="FlexForceRowCenter">
                                        <a href="https://www.linkedin.com/in/kjell-hopkins/">
                                            <img src="icons/LinkedIn.png" alt="" className="Icon" />
                                        </a>
                                        <Break style="Hidden" width="50px" />
                                        <a href="mailto:fil3sav3d@gmail.com/">
                                            <img src="icons/EMail.png" alt="" className="Icon" />
                                        </a>
                                        <Break style="Hidden" width="50px" />
                                        <a href="https://github.com/FIL3SAV3D">
                                            <img src="icons/GitHub.png" alt="" className="Icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="BoxItem" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div className="HeadShotContainer">
                                    <img src="images/Headshot.png" alt="" className="Headshot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function AboutMeCard({ ref }) {
    return (
        <motion.div
            initial={{ opacity: "0%", transition: { ease: "easeIn", duration: 0.33 } }}
            whileInView={{ opacity: "100%", transition: { ease: "easeIn", duration: 0.33 } }}
        >
            <div ref={ref} className="HorizontalBox" >
                <div className="BoxItem">
                    <div className="BoxItemContainer">
                        <h5>A Little About Me</h5>

                        <h6>Hello!</h6>
                        <h6>My name is Kjell Hopkins
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
                            Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
                            Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.
                            Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
                        </h6>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function GameProjectCard({ ref }) {
    return (
        <div ref={ref} className="HorizontalBox">
            <div className="VerticalBox">
                <div className="HorizontalBox" style={{ justifyContent: "center", flexDirection: "row" }}>
                    <div className="BoxItemContainer" style={{ width: "300px" }}>
                        <h2>Game Projects</h2>
                    </div>
                </div>

                <div className="HorizontalBox">
                    <GameProjectItem
                        thumbnailSrc="images/Poster_BlackGold.png"
                        linkTo="/black-gold"
                        title="BlackGold"
                        description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." />
                    <GameProjectItem thumbnailSrc="images/Poster_OpponentsInCrime.png"
                        linkTo="/opponents-in-crime"
                        title="Opponents In Crime"
                        description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." />
                </div>
                <div className="HorizontalBox">
                    <GameProjectItem thumbnailSrc="images/Poster_Nautilus.png"
                        linkTo="/nautilus"
                        title="Nautilus"
                        description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." />
                    <GameProjectItem thumbnailSrc="images/Poster_ExUmbris.png"
                        linkTo="/ex-umbris"
                        title="Ex Umbris"
                        description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." />
                </div>
            </div>
        </div>
    )
}

function SpecializationCard({ ref }) {
    return (
        <div ref={ref} className="VerticalBox">
            <div className="HorizontalBox" style={{ justifyContent: "center", flexDirection: "row" }}>
                <div className="BoxItemContainer" style={{ width: "600px" }}>
                    <h2>Specialization: Game Engine</h2>
                </div>
            </div>
            <div className="BoxItem">
                <div className="BoxItemContainer">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px"}}>
                        <img src="icons/ArcanumBW.png" alt="" className="Logo" style={{height: "400px"}}/>
                        <img src="icons/ArcanumB.png" alt="" className="Logo" style={{height: "400px", opacity: "0.2"}}/>
                    </div>
                    <h2></h2>
                    <h2>Arcanum</h2>
                </div>
            </div>
        </div>
    )
}

function Home({ EntryCardRef, AboutMeRef, GameProjectRef, SpecializationRef }) {
    return (
        <div className="HomeViewport">
            <motion.div
                initial={{ opacity: "0%" }}
                animate={{ opacity: "100%", transition: { ease: "easeOut", duration: 1.5 } }}
                exit={{ opacity: "0%", transition: { ease: "easeIn", duration: 0.22 } }}
            >
                <div className="HomeContent">
                    <EntryCard ref={EntryCardRef} />
                    <AboutMeCard ref={AboutMeRef} />
                    <GameProjectCard ref={GameProjectRef} />
                    <SpecializationCard ref={SpecializationRef} />
                </div>
            </motion.div >
        </div >
    );
}

export default Home;