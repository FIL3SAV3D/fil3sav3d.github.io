import React from "react";
import './Style/GameProjects.css';

import { motion } from "framer-motion";

function GameProjects() {
    return (
        <motion.div className="game-projects-page"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3 }}>

        </motion.div>
    )
}

export default GameProjects;