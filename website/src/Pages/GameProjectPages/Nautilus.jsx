import React from "react";
import { motion } from "motion/react";
import './Nautilus.css'

import YouTube from 'react-youtube';

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

function Nautilus() {
    return (
        <motion.div className="nautilus-page"
            initial={{ opacity: 0.0 }}
            animate={{ opacity: 1.0 }}
            exit={{ opacity: 0.0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
        >
            <img src="images/NautilusBanner.png" alt="" className="banner" />
            <div className="title">
                <DTH1 text="Nautilus" />
            </div>

            <div className="project-info-container">
                <div style={{ height: 50 }} />
                <DTH2 text="Project Information" />
                <hr style={{ width: 260 }} />
                <div className="project-info">
                    <DTH3 text="Genre: Adventure" />
                    <DTH3 text="Team Size: 12" />
                    <DTH3 text="Time span: 9 weeks" />
                    <DTH3 text="Engine: Unity" />
                    <DTH3 text="Platform: PC" />
                </div>
            </div>

            <div className="contributions-container">
                <div style={{ height: 50 }} />
                <DTH2 text="Introduction" />
                <DTH3 text="Nautilus is a slow, immersive deep-sea exploration experience, focused on atmosphere, scale, and visual storytelling rather than traditional mechanics.
As you descend deeper into the cave system, visibility fades, pressure increases, and the environment itself becomes the main character. Light, sound, and movement guide the experience, creating a sense of isolation and unease.
There are no enemies to fight, only the unknown to confront." />
                <div style={{ height: 50 }} />
                <DTH2 text="My Role" />
                <DTH3 text="In Nautilus, I worked as a gameplay, systems, and rendering Programmer,
                contributing across nearly all gameplay and technical systems due to the small programming team.
                My focus included implementing player movement,
                submarine stabilization, dual-camera rendering using stencils, shaders, and visual effects,
                as well as integrating FMOD for audio and lastly optimizing scene performance.
                I also developed tools and state-driven systems like the airlock, managed LODs and rendering optimizations, and supported designers with technical workflows,
                ensuring the project ran smoothly and performed efficiently across the game's environments."/>
                <div style={{ height: 50 }} />
            </div>
            <DTH1 text="My Contributions" />
            <hr style={{ width: 300 }} />
            <div className="contributions-container">
                <DTH2 text="Player Movement & KCC Integration" />
                <DTH3 text="I implemented the Kinematic Character Controller (KCC) for player movement.
                I ported code from a previous project of mine to manage movement both inside the submarine and in underwater environments,
                including rotation inheritance for interacting with moving objects such as the submarine." />
                <div style={{ height: 50 }} />

                <DTH2 text="Submarine Systems & Stabilization" />
                <DTH3 text="I had to port the original submarine to make use of the kinematic system to prevent physics conflicts with the player.
                I implemented a PID-based stabilization system with quaternion math to manage angular velocity and align the submarine with the world axis,
                ensuring consistent behavior regardless of frame rate. This was an issue with the former version as well due to using
                a impulse call over a period of time. The PID-based solution uses linear force instead akin to a thruster." />
                <div style={{ height: 50 }} />

                <DTH2 text="Rendering Systems with Dual-Camera Setup" />
                <DTH3 text="I implemented a dual-camera rendering system to separate interior and exterior views,
                using the interior camera's depth buffer i reuse it for the exterior camera to only draw where necessary to prevent overdraw.
                This allowed unique post-processing effects for each environment. This is however a very expensive task for our game
                and such I've had to try to squeeze as much performance as possible out of the GPU because we were GPU bound for a lot of the time.
                I didn't want to limit the artists creative freedom unless needed, especially in such a enviroment heavy game." />
                <img src="images/NautilusStencil.png" alt="" />
                <DTH3 text="Here you can see how the highlighted in neon green is the interior rendering vs exterior that isnt hightlighted"/>
                <div style={{ height: 50 }} />

                <DTH2 text="Shader Optimization & URP Bug Fixing" />
                <DTH3 text="I optimized shaders, materials, and scene assets to improve performance while maintaining visual quality.
                This included reducing excessive render passes caused by shadows, fixing double-sided foliage shading issues,
                and managing LODs for nearly all meshes." />
                <img src="images/NautilusFol.png" alt="" />
                <DTH3 text="URP has a bug currently that makes double sided foliage broken. Therefore i had to make my own shader to fix this issue."/>
                <div style={{ height: 50 }} />

                <DTH2 text="Airlock Systems" />
                <DTH3 text="I developed the airlock system as a state machine,
                handling transitions between inside and outside the submarine.
                This included controlling water rising and lowering, triggering particle effects,
                and managing visual alpha sorting." />
                <div style={{ height: 50 }} />

                <DTH2 text="Audio Integration" />
                <DTH3 text="I integrated FMOD with Unity to handle in-game audio,
                including placeholder sounds for testing and audio mixing.
                This allowed the team to manage audio assets efficiently
                and supported dynamic in-game audio for both gameplay and environmental feedback." />
                <div style={{ height: 50 }} />

                <DTH2 text="Performance Optimization & Build Configuration" />
                <DTH3 text="I conducted detailed performance debugging,
                including a scene-by-scene analysis,
                mesh and material validation, removing unused assets and shader variants,
                shadow quality adjustments, and LOD bias tuning.
                I switched the Unity build backend from Mono to IL2CPP, doubling build performance,
                and multithreaded and batched sonar code due to the many amounts of raycasts being checked per physics update." />
                <img src="images/NautilusBatch.png" alt="" />
                <DTH3 text="Here you can see the batch calls are insane due to the then shadow settings"/>
                <div style={{ height: 50 }} />

                <DTH2 text="Miscellaneous " />
                <DTH3 text="I implemented additional gameplay systems such as boid-based fish movement,
                and small “juice” effects to enhance player feedback. I implemented visual polish features such as flashlight effects,
                camera shake, helmet overlays, and view bobbing.
                I also created editor tools to automatically track important meshes, for switching between outside and inside, in the submarine,
                reducing manual workflow and streamlining scene management." />
                <video src="videos/Naut.mp4" style={{width: '100%'}} autoPlay={true} muted={true} loop={true} controls={true}/>
                <div style={{ height: 100 }} />
            </div>
        </motion.div>
    )
}

export default Nautilus;