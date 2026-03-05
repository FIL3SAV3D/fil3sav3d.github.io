import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useTime } from 'framer-motion';
import './App.css';
import Dither from './Dither';
import UseWindowDimensions from './WindowUtilites';
import Title from './Components/Title';
import TargetCursor from './Components/TargetCursor';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import DecryptedText from './Components/DecryptedText';
import { useFrame } from '@react-three/fiber';
import { element } from 'three/src/nodes/tsl/TSLCore.js';

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
    <div>
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

function App() {
  const { windowWidth, windowHeight } = UseWindowDimensions();
  const time = useTime();
  const currentTime = useRef();

  const decryptProps = {
    direction: "center",
    speed: 50,
    animateOn: "both"
  }

  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000);
    return () => clearInterval(intervalID);
  }, [shuffle])


  return (
    <div className='App'>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
        hoverDuration={0.4}
      />
      <Dither style={{ height: windowHeight }}
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <div className='nav-bar-container'>
            <Link className='cursor-target' to="/">
                <DTH3 text="HOME" />
            </Link> <DTH3 text="|" />
            <Link className='cursor-target' to="/">
              <DTH3 text="GAME PROJECTS" />
            </Link> <DTH3 text="|" />
            <Link className='cursor-target' to="/">
              <DTH3 text="GAME ENGINE" />
            </Link> <DTH3 text="|" />
            <Link className='cursor-target' to="/">
              <DTH3 text="PERSONAL PROJECTS" />
            </Link> <DTH3 text="|" />
            <Link className='cursor-target' to="/">
              <DTH3 text="MUSIC" />
            </Link> <DTH3 text="|" />
            <Link className='cursor-target' to="/about">
              <DTH3 text="ABOUT" />
            </Link> <DTH3 text="|" />
            <Link className='cursor-target' to="/contact">
              <DTH3 text="CONTACT" />
            </Link>
        </div>

        <div className='NameBar'>
          <nav>
            <Link to="/">
              <DecryptedText text={'Kjell Hopkins'} />
            </Link>
          </nav>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
