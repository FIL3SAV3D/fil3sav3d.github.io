import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useTime } from 'framer-motion';
import './App.css';
import Dither from './Dither';
import UseWindowDimensions from './WindowUtilites';
import TargetCursor from './Components/TargetCursor';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import DecryptedText from './Components/DecryptedText';
import GameProjects from './Pages/GameProjects';
import GameEngine from './Pages/GameEngine';
import PersonalProjects from './Pages/PersonalProjects';
import BlackGold from './Pages/GameProjectPages/BlackGold';
import OICPage from './Pages/GameProjectPages/OICPage';
import Nautilus from './Pages/GameProjectPages/Nautilus';

const names = [
  "Kjell Hopkins",
  "FIL3SAV3D"
]

function DTH1(props) {
  const { text } = props;
  return (
    <div>
      <DecryptedText text={text}
        revealDirection="center"
        sequential={true}
        animateOn="both"
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
        animateOn="both"
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
        animateOn="both"
        className="hd3"
        parentClassName='pc'
        encryptedClassName="he3"
      />
    </div>
  )
}

function ButtonBorder() {
  return (
    <div style={{cursor: 'none'}}>
      <div id="top-left" class="corner"></div>
      <div id="top-right" class="corner"></div>
      <div id="bottom-right" class="corner"></div>
      <div id="bottom-left" class="corner"></div>
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='sync'>
      <Routes location={location}
        key={location.pathname}>
        <Route path="/" element={<Home />} />
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
  const dimensions = UseWindowDimensions();

  return (
    <div className='App' style={{ height: dimensions.height }}>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
        hoverDuration={0.4}
      />
      <Dither
        waveColor={[0.458, 0, 0.584]}
        disableAnimation={false}
        enableMouseInteraction
        mouseRadius={0}
        colorNum={10}
        waveAmplitude={0.1}
        waveFrequency={8}
        waveSpeed={0.05}
      />

      <BrowserRouter>
        <AnimatedRoutes />

        <div className='nav-bar-container'>
          <Link className='cursor-target' to="/">
            <div className='button-wrapper'>
              <ButtonBorder />
              <DTH3 text="HOME" />
            </div>
          </Link>
          <div className='break' />
          <Link className='cursor-target' to="/game-projects">
            <div className='button-wrapper'>
              <ButtonBorder />
              <DTH3 text="GAME PROJECTS" />
            </div>
          </Link>
          <div className='break' />
          <Link className='cursor-target' to="/game-engine">
            <div className='button-wrapper'>
              <ButtonBorder />
              <DTH3 text="GAME ENGINE" />
            </div>
          </Link>
          {/* <div className='break' />
          <Link className='cursor-target' to="/personal-projects">
            <div className='button-wrapper'>
              <ButtonBorder />
              <DTH3 text="PROJECTS" />
            </div>
          </Link> */}
          {/* <div className='break' />
          <Link className='cursor-target' to="/">
            <div className='button-wrapper'>
              <ButtonBorder />
              <DTH3 text="MUSIC" />
            </div>
          </Link> */}
          <div className='break' />
          <Link className='cursor-target' to="/about">
            <div className='button-wrapper'>
              <ButtonBorder />
              <DTH3 text="ABOUT ME" />
            </div>
          </Link>
          {/* <div className='break' />
          <Link className='cursor-target' to="/contact">
            <div className='button-wrapper'>
              <ButtonBorder />
              <DTH3 text="CONTACT" />
            </div>
          </Link> */}
        </div>

        <div className='NameBar'>
          <DTH1 text={'Kjell Hopkins'} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
