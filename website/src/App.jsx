import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useAnimate, useMotionValue, useTime } from 'framer-motion';

import './custom.scss';
import './App.css';

import Dither from './Dither';
import UseWindowDimensions from './WindowUtilites';
import TargetCursor from './Components/TargetCursor';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import GameProjects from './Pages/GameProjects';
import GameEngine from './Pages/GameEngine';
import PersonalProjects from './Pages/PersonalProjects';
import BlackGold from './Pages/GameProjectPages/BlackGold';
import OICPage from './Pages/GameProjectPages/OICPage';
import Nautilus from './Pages/GameProjectPages/Nautilus';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Sidebar from './Components/Sidebar';
import SidebarItem from './Components/SidebarItem';
import { VideoBG } from './Components/BGVideo';

const names = [
  "Kjell Hopkins",
  "FIL3SAV3D"
]



function ButtonBorder() {
  return (
    <div>
      <div className="ButtonBoarder">
        <div id="top-left" class="corner"></div>
        <div id="top-right" class="corner"></div>
        <div id="bottom-right" class="corner"></div>
        <div id="bottom-left" class="corner"></div>
      </div>
    </div>
  )
}

function AnimatedRoutes({ ECRef, AMRef, GPRef, SPRef }) {
  const location = useLocation();

  return (
    <AnimatePresence mode='sync'>
      <Routes location={location}
        key={location.pathname}>
        <Route path="/" element={<Home EntryCardRef={ECRef} AboutMeRef={AMRef} GameProjectRef={GPRef} SpecializationRef={SPRef} />} />
        <Route path="/game-projects" element={<GameProjects />} />
        <Route path="/game-engine" element={<GameEngine />} />
        <Route path="/personal-projects" element={<PersonalProjects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/black-gold" element={<BlackGold />} />
        <Route path="/opponents-in-crime" element={<OICPage />} />
        <Route path="/nautilus" element={<Nautilus />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const EntryCardRef = useRef(null);
  const AboutMeRef = useRef(null);
  const GameProjectRef = useRef(null);
  const SpecializationRef = useRef(null);

  const [scope, animate] = useAnimate();

  const parentRef = useRef(null);

  return (
    <div className='App'>
      <div className='AppViewport' id='AppViewport'>
        <BrowserRouter>
          <Sidebar scope={scope} animate={animate} ParentRef={parentRef}>
            <SidebarItem inputText={"Home"} imgSrc="icons/HomeW.png" imgOverlaySrc="icons/HomeB.png" link={"/"} elementRef={EntryCardRef} />
            <SidebarItem inputText={"About Me"} imgSrc="icons/InfoW.png" imgOverlaySrc="icons/InfoB.png" link={"/"} elementRef={AboutMeRef} />
            <SidebarItem inputText={"Game Projects"} imgSrc="icons/GamesW.png" imgOverlaySrc="icons/GamesB.png" link={"/"} elementRef={GameProjectRef} />
            <SidebarItem inputText={"Specialization"} imgSrc="icons/ArcanumBW.png" imgOverlaySrc="icons/ArcanumB.png" link={"/"} elementRef={SpecializationRef} />
          </Sidebar>
          <div ref={scope} id='PageViewport' style={{width: "100%", height: "100%", zIndex: 5, overflow: "hidden"}}>
            <AnimatedRoutes ECRef={EntryCardRef} AMRef={AboutMeRef} GPRef={GameProjectRef} SPRef={SpecializationRef} />
          </div>
        </BrowserRouter>
        <VideoBG source="videos/VideoHomeBG.mp4" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C6XKCDHDSF"></script>
      </div>
    </div>
  );
}

export default App;
