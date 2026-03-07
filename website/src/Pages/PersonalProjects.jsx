import React from "react";

import { motion } from "framer-motion";

function PersonalProjects()
{
    return(
        <motion.div className="game-engine-page"
            initial={{ opacity: 0.0 }}
            animate={{ opacity: 1.0 }}
            exit={{ opacity: 0.0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}>
            <div className="game-engine-content-container">

            </div>
        </motion.div>
    )
}

export default PersonalProjects;