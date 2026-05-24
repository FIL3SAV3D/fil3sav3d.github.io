import React, { createContext, useContext } from "react";

import { motion } from "framer-motion";

import { useRef } from "react";

import { Link, useLocation } from 'react-router-dom';

import { SideBarContext } from "./Sidebar";

export function SidebarItem({ imgSrc, imgOverlaySrc, link, elementRef, inputText }) {
    const imageSrc = imgSrc;
    const imageOverlaySrc = imgOverlaySrc;
    const linkTo = link;
    const elemRef = elementRef;
    const text = inputText;

    const location = useLocation();

    const parentcontext = useContext(SideBarContext);

    return (
        <div className="SidebarItem">
            <button className="SidebarItemButton" onClick={() => {
                if (location.pathname != linkTo) {
                    setTimeout(() => {
                        elemRef.current?.scrollIntoView({ behavior: "instant" });
                    }, 50);
                }
                else {
                    elemRef.current?.scrollIntoView({ behavior: "smooth" });
                }

            }}>
                <Link to={linkTo}>
                    <div className="SidebarItemImageContainer">
                        <img src={imageSrc} className="SidebarItemImage" />
                        <motion.img
                            initial={{ opacity: "100%", transition: { ease: "linear", duration: 0.15 } }}
                            whileHover={{ opacity: "0%", transition: { ease: "linear", duration: 0.15 } }}
                            src={imageOverlaySrc} className="SidebarItemImage" />
                    </div>
                </Link>
                <h2 style={{ marginBottom: "0px", marginTop: "5px", marginLeft: "50px", whiteSpace: "nowrap" }}>{text}</h2>
            </button>
        </div>
    )
}

export default SidebarItem;