import React from "react";
import './Style/About.css';

import { motion } from "framer-motion";

function About()
{
    return (
        <motion.div className="about-page"
            initial={{ opacity: 0.0 }}
            animate={{ opacity: 1.0 }}
            exit={{ opacity: 0.0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}>
            <div className="about-content-container">

            </div>
        </motion.div>
    );
}

export default About;