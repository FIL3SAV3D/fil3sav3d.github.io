import React from "react";
import { motion } from "motion/react";
import './BlackGold.css'

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

function BlackGold() {
    return (
        <motion.div className="black-gold-page"
            initial={{ opacity: 0.0 }}
            animate={{ opacity: 1.0 }}
            exit={{ opacity: 0.0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
        >
            <img src="images/blackGoldBanner.png" alt="" className="banner" />
            <div className="title">
                <DTH1 text="Black Gold" />
            </div>

            <div className="project-info-container">
                <div style={{ height: 50 }} />
                <DTH2 text="Project Information" />
                <hr style={{ width: 260 }} />
                <div className="project-info">
                    <DTH3 text="Genre: strategy" />
                    <DTH3 text="Team Size: 12" />
                    <DTH3 text="Time span: 6 weeks" />
                    <DTH3 text="Engine: Tengine (In-house Game engine)" />
                    <DTH3 text="Platform: PS5" />
                </div>
            </div>

            <div className="contributions-container">
                <div style={{ height: 50 }} />
                <DTH2 text="Introduction" />
                <DTH3 text="Black Gold is an atmospheric strategy game about building and operating an offshore rig.
                As you grow your facility and manage your workers' tasks, optimising processes and growing your operations,
                strange happenings begin to occur, and you will begin to learn about the dangers of the depths."/>
                <DTH3 text="Due to NDA reasons (PS5 & Tengine) Black gold is a bit harder to show off but I will be doing
                my best to showcase anyhow."/>
                <div style={{ height: 50 }} />
                <DTH2 text="My Role"/>
                <DTH3 text="My role in this project was lead over the programmers and it taught me how to best communicate between
                the different disciplines. Relay information from meetings so the other programmers could focus on working,
                plan and structure tasks, and balance workloads."/>
                <div style={{ height: 50 }} />
            </div>
            <DTH1 text="My Contributions" />
            <hr style={{ width: 300 }} />
            <div className="contributions-container">
                <DTH2 text="Building System" />
                <DTH3 text="I designed and implemented a building system. I designed it to allow designers to add,
                remove, or configure buildings through custom assets in Tengine's Editor; Tensor.
                While on the other hand allowing the other programmers to interface with it for gameplay purposes,
                like creation, destruction, triggering building events, etc." />
                <DTH3 text="The buildings production logic would be run internally in this system,
                similar to ECS architectures. The actual buildings were structs of data, and the system would be responsible
                to calculate and update the data stored in the structs. The buildings consisted of an array of inputs, outputs,
                the production interval, and the maximum amount of workers." />

                <div style={{ height: 50 }} />
                <DTH2 text="Custom Assets for Tensor (In-house Editor)" />
                <DTH3 text="I created custom assets to speed up the workflow for all disciplines.
                A big bottleneck presented itself when the designers were tweaking and testing values for the buildings
                and had to be implemented by the programmers. To solve this problem I created a custom asset
                for Tensor to then be converted into a building using the aforementioned building system.
                This also allowed the artists to simply switch out the asset reference
                if a new model was created for a building." />
                <img src="images/BGCustomAssets.png" alt="" />
                <DTH3 text="In the image above you can see how the custom asset is layed out. The artists could replace the
                placeholder cube at the top for whatever asset the artists have created. The designers could tweak the values
                in the game properties tab. They could change the amount of inputs, what they are, and quantity, and the
                same goes for output, and finally how long the production interval is at max workers. The interval calculation
                was as simple as the (interval / (current workers / max workers) ) so the interval would increase depending on
                the lack of manpower in a building. I also put in a check to make sure it never tried a division of zero.
                Wouldn't want a computer to explode now do we?"/>
                <div style={{ height: 50 }} />

                <DTH2 text="Custom Component for Tensor & Tengine" />
                <DTH3 text="Tensor & Tengine share a node based library with each other. I created a new node
                that previously did not exist which was a sound node. The sound node had basic functions, such as
                play, pause, and stop. It had parameters for if its a global sound or if its a local sound and if it should use attenuation.
                Also had the option if it was a one-shot sound or if it should be looping. This was all configurable,
                in engine and editor for ease of use." />
                <div style={{ height: 50 }} />

                <DTH2 text="Shaders" />
                <DTH3 text="I ended up recreating the fog effect from silent hill by simply having a inverted cube
                follow the camera and with some perlin noise, voronoi noise, and a white fade, I could make it look more believable.
                I also created a simple fresnel selection shader when you hover over a selected building. We also had a day and night
                cycle. To fake a day and night cycle I used the dot product between the directional light that was constantly orbiting the players position
                (for shadow casting pourposes) and the world normal to see which side the directional light was facing. If it was on the day side
                the directional light would be active and on the night side the directional light would be disabled
                and the emissive strenght would instead be increased. So the artists could bake emissive lighting into the textures
                and we wouldn't have to worry about adding more lights. Especially in a forward rendered game." />
                <video src="videos/BGShaders.mp4" controls={true} autoPlay={true} loop={true} muted={true} style={{ width: '100%' }} />
                <div style={{ height: 100 }} />

            </div>
        </motion.div>
    )
}

export default BlackGold;