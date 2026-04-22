import React from "react";
import "./Style/Home.css";
import { VideoBG } from "../Components/BGVideo";

import { motion } from "framer-motion";

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

function Home() {
    return (
        <div className="HomeViewport">
            <VideoBG source="videos/VideoHomeBG.mp4" />
            <div className="HomeContent">
                <div className="HorizontalBox">
                    <div className="BoxItem">
                        <div className="BoxItemContainer">
                            <h5>A Little About Me</h5>
                            <div className="HeadShotContainer">
                                <img src="images/Headshot.png" alt="" className="Headshot" />
                            </div>
                            <h6>Hello!</h6>
                            <h6>My name is Kjell Hopkins</h6>

                        </div>
                    </div>

                    <div className="VerticalBox">
                        <div className="BoxItem">
                            <div className="BoxItemContainer">
                                <h5 >Systems Programmer</h5>
                                <h5 >Systems / Tools / Rendering / Gameplay</h5>
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
            </div>
        </div >

    );
}

export default Home;