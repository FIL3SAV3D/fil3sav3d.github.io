import React from "react";
import "./Style/BGVideo.css";
import { motion } from 'framer-motion';

export function VideoBG(props) {
    const videoSource = props.source
    return (
        <motion.div className="bgVideo"
            initial={{ filter: "blur(0px)" }}
            animate={{ filter: "blur(2px)", transition: { ease: "easeOut", duration: 1.5 } }}
            exit={{ filter: "blur(0px)", transition: { ease: "easeIn", duration: 0.22 } }}
        >
            <video autoPlay={true} muted={true} loop={true} controls={false}>
                <source src={videoSource} type="video/mp4"/>
            </video>

        </motion.div>
    );
}