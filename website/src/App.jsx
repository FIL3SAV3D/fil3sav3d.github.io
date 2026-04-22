import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useTime } from 'framer-motion';

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

function NavBarLinkButton(props) {
  const { text } = props;
  return (
    <div className='button-wrapper'>
      <div className="ButtonBoarder">
        <h5>{text}</h5>
        <div id="top-left" class="corner"></div>
        <div id="top-right" class="corner"></div>
        <div id="bottom-right" class="corner"></div>
        <div id="bottom-left" class="corner"></div>
      </div>
    </div>
  )
}

function NB_DropDown() {
  return (
    <div className='NavBar_ItemDropDown' id='IsMobileOnly'>
      <Dropdown className="NavBar_DropDown">

        <Dropdown.Toggle className="NavBarDropDownButton">
          <img src="icons/dropdown.svg" alt="" className="Logo" id='FilterInvert' />
          <div id="top-left" class="corner"></div>
          <div id="top-right" class="corner"></div>
          <div id="bottom-right" class="corner"></div>
          <div id="bottom-left" class="corner"></div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Link className="Link" to="/">
            <Dropdown.Item as="button">Home</Dropdown.Item>
          </Link>
          <Link className="Link" to="/game-projects">
            <Dropdown.Item as="button">Game Projects</Dropdown.Item>
          </Link>
          <Link className="Link" to="/game-engine">
            <Dropdown.Item as="button">Game Engine</Dropdown.Item>
          </Link>
          <Link className="Link" to="/about">
            <Dropdown.Item as="button">About Me</Dropdown.Item>
          </Link>
        </Dropdown.Menu>

      </Dropdown>
    </div>
  )
}

function App() {
  const dimensions = UseWindowDimensions();

  return (
    <div className='App'>
      <div className='AppViewport'>

        <BrowserRouter>
          <div className="NavBarViewport">
            <div className="NavbarContent">
              <div className="NavBarItem">
                <div className="NavbarLogo">
                  <img src="images/HomeIcon.png" alt="" className="Logo" />
                </div>
              </div>

              <div className="Navbar_Item_Links" id='IsPCOnly'>
                <Link className="Link" to="/">
                  <NavBarLinkButton text="Home" />
                </Link>
                <Link className="Link" to="/game-projects">
                  <div className='button-wrapper'>
                    <NavBarLinkButton text="Game Projects" />
                  </div>
                </Link>
                <Link className="Link" to="/game-engine">
                  <div className='button-wrapper'>
                    <NavBarLinkButton text="Game Engine" />
                  </div>
                </Link>
                <Link className="Link" to="/about">
                  <div className='button-wrapper'>
                    <NavBarLinkButton text="About Me" />
                  </div>
                </Link>
              </div>
              <NB_DropDown/>
            </div>
          </div>

          <AnimatedRoutes />
        </BrowserRouter>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C6XKCDHDSF"></script>
      </div>
    </div>
  );
}

export default App;
