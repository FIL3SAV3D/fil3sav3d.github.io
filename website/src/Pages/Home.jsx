import React from "react";
import "./Style/Home.css";
import DecryptedText from "../Components/DecryptedText";

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
        <div className="home-page-container">
            <div className="home-page">
                <div className="home-page-card">
                    <DTH1 text="Kjell Hopkins" />
                    <DTH2 text="Systems | Tools | Rendering | Gameplay" />
                    <DTH3 text="TESTING" />
                </div>
            </div>
        </div>
    );
}

export default Home;