import React from "react";
import './Nav.css'
import {AiOutlineHome} from "react-icons/ai";
import {BiUser} from "react-icons/bi";
import {BiBook} from "react-icons/bi";
import {RiMessage2Line} from "react-icons/ri";
import {useState} from "react";

const Nav = () => {
    const [activeNow, setActiveNow] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNow('#')} className={activeNow === '#' ? 'active': ''} ><AiOutlineHome/></a>
            <a href="#about" className={activeNow === '#about' ? 'active': ''} onClick={() => setActiveNow('#about')}><BiUser/></a>
            <a href="#experience" className={activeNow === '#experience' ? 'active': ''} onClick={() => setActiveNow('#experience')}><BiBook/></a>
            <a href="#contact" className={activeNow === '#contact' ? 'active': ''} onClick={() => setActiveNow('#contact')}><RiMessage2Line/></a>
        </nav>
    )
}

export default Nav;