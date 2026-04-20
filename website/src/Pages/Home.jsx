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
        <div>
            <VideoBG source="videos/VideoHomeBG.mp4" />
            <div className="HomeContainer">
                <div className="HorizontalBox">
                    <div className="AboutMe">
                        <h1>"Testing"</h1>
                    </div>
                    <div className="VerticalBox">
                        <div className="Links">
                            <h1>"Testing"</h1>
                        </div>
                        <div className="Links">
                            <h1>"Testing"</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Home;