import React from "react";
import { motion } from "motion/react";
import './OICPage.css'

import DecryptedText from "../../Components/DecryptedText";

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

function OICPage() {
    return (
        <motion.div className="oic-page"
            initial={{ opacity: 0.0 }}
            animate={{ opacity: 1.0 }}
            exit={{ opacity: 0.0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
        >
            <img src="images/OICBanner.png" alt="" className="banner" style={{ filter: 'invert() blur(5px)' }} />
            <div className="title">
                <DTH1 text="Opponents In Crime" />
            </div>

            <div className="project-info-container">
                <div style={{ height: 50 }} />
                <DTH2 text="Project Information" />
                <hr style={{ width: 260 }} />
                <div className="project-info">
                    <DTH3 text="Genre: Action" />
                    <DTH3 text="Team Size: 16" />
                    <DTH3 text="Time span: 9 weeks" />
                    <DTH3 text="Engine: Unreal Engine 5" />
                    <DTH3 text="Platform: PC, PS5" />
                </div>
            </div>

            <div className="contributions-container">
                <div style={{ height: 50 }} />
                <DTH2 text="Introduction" />
                <DTH3 text="Opponents In Crime is a chaotic up to 4 player game that involves stealing art, sabotaging friends,
                whilst on a time limit. Friendships crumble, enemies emerge. Malice the game, care for some petty theft?"/>
                <div style={{ height: 50 }} />
                <DTH2 text="My Role" />
                <DTH3 text="During the development of Opponents In Crime, I worked as a Programming Lead and Systems/Tools Programmer,
                contributing to a wide range of gameplay and technical systems using Unreal Engine Blueprints.
                My work included developing systems such as item spawning, handling multiplayer replication, save data handling,
                shaders, and player customization, while also supporting designers and artists with technical implementation
                and troubleshooting."/>
                <div style={{ height: 50 }} />
            </div>
            <DTH1 text="My Contributions" />
            <hr style={{ width: 300 }} />
            <div className="contributions-container">
                <DTH2 text="Art Spawning Tool" />
                <DTH3 text="I designed and implemented a tool that allowed designers to configure spawn points by simply dragging a blueprint actor
                to a desired location in world space. They could configure spawn probabilities, item tiers, and placement types such as wall or floor items.
                Designers could either manually control the parameters or by default letting the game mode take control." />
                <img src="images/OICArt.png" alt="" />
                <DTH3 text="Picture above shows how the actor looks in world before art has been generated."/>
                <div style={{ height: 50 }} />

                <DTH2 text="Save System Blueprint Library" />
                <DTH3 text="I implemented a save system that allowed player data to persist between levels, UI menus, and gameplay sessions. This was necessary
                for other gameplay mechanics such as the security system, the game mode, art generation, etc. So to simplify access to saved data across different systems,
                I created a blueprint library that handled saving and loading functions. This allowed the programmers a plug and play solution if data needed to be stored
                between levels and menus." />
                <div style={{ height: 50 }} />

                <DTH2 text="Player Customization" />
                <DTH3 text="I developed a system that allowed the game to dynamically change player characters based on what was selected in the pre-game lobby menu.
                This included modifying player models, palette, animations, and audio at runtime. All of the change took place before round start." />
                <div style={{ height: 50 }} />

                <DTH2 text="Stylized Post-Process Shader" />
                <DTH3 text="I collaborated with the tech-artist Arya, to develop stylized post-process shader,
                she was the creator of majority of the effects and I helped to apply those effects properly to the world.
                A major challenge was how to accurately get the shadows and highlights of the scene. A fast approximate I found was to
                divide the scene viewport by the GBuffers color and then masking the parts under a threshold as shadow or over a threshold as highlight.
                This was however susceptible to errors due to it being a approximation so I made the parameters to be adjustable for different visual effects and lighting conditions,
                enabling the art team to maintain a consistent visual style while allowing flexibility for the games different environments." />
                <img src="images/OICOutline.png" alt="" />
                <div style={{ height: 50 }} />

                <DTH2 text="Palette Swap Shader" />
                <DTH3 text="I created a palette-swapping material system for characters and their corresponding vehicles,
                allowing multiple palette variations to be generated from a single texture.
                This system used RGBA channel masking to separate regions of the base texture and apply different colors to each channel,
                reducing the need for additional textures while maintaining visual variety. This system was also reused for the level generation to create
                new vibrant colors to the level." />
                <img src="images/OICPalette.png" alt="" />
                <div style={{ height: 50 }} />

                <DTH2 text="Data Driven Sound System" />
                <DTH3 text="Using Unreal Engine's data tables and custom structs,
                I could easily manage over 200 character sound effects. 
                This allowed audio assets to be organized and easily referenced by gameplay systems, improving workflow for implementing character sounds." />
                <img src="images/OICSounds.png" alt="" />
                <div style={{ height: 100 }} />

            </div>
        </motion.div>
    )
}

export default OICPage;