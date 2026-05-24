import React, { createContext, createRef, useRef } from "react";

import { useState } from "react";

import "./Style/SidebarStyle.css"

import { motion, useAnimate } from "framer-motion";
import UseWindowDimensions from "../WindowUtilites";


export const SideBarContext = createContext();

function Sidebar({ children, animate, scope, ParentRef }) {
    const [expanded, setExpanded] = useState(false);
    const { height, width } = UseWindowDimensions();

    const [imgScope, imgAnimate] = useAnimate();
    const [navScope, navAnimate] = useAnimate();

    const clickMethod = useRef(Click);


    function Click({ parentInvoked }) {
        setExpanded((curr) => !expanded)
        const element = document.getElementById('PageViewport');

        if (expanded) {
            //Closing
            animate(scope.current, { filter: "blur(0px)", duration: 0.25 });
            navAnimate(navScope.current, { width: "80px", duration: 0.25 });
        }
        else {
            //Opening
            if (parentInvoked) {
                animate(scope.current, { filter: "blur(10px)", duration: 0.25 });
                navAnimate(navScope.current, { width: "400px", duration: 0.25 });
            }
        }
    }

    return (
            <div ref={navScope} className="NavBarViewport">
                <div className="NavbarContent">
                    <div className="Sidebar">
                        <button onClick={() => {
                            Click({ parentInvoked: true });
                        }}
                            onMouseOver={() => {
                                if (expanded) return;
                                imgAnimate(imgScope.current, { opacity: "0%", transition: { ease: "linear", duration: 0.15 } })
                            }}
                            onMouseLeave={() => {
                                if (expanded) return;
                                imgAnimate(imgScope.current, { opacity: "100%", transition: { ease: "linear", duration: 0.15 } })
                            }}

                            className="SidebarButton">
                            <img src="./icons/Grid.png" className="SidebarImage" />
                            <img ref={imgScope}
                                src="./icons/GridInner.png" className="SidebarImage" />
                        </button>
                        <div className="SidebarChildContainer">
                            <SideBarContext value={ParentRef}>
                                {children}
                            </SideBarContext>
                        </div>
                    </div>
                </div >
            </div>
    )
}

export default Sidebar;