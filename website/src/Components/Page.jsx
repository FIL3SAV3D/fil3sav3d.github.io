import React from "react";

import { motion } from "framer-motion";

function Page(props) {
    const input = props;
    return (
        <motion.div className={input}
            initial={{ opacity: 0.0 }}
            animate={{ opacity: 1.0 }}
            exit={{ opacity: 0.0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            >
            
        </motion.div>
    )
}

export default Page;