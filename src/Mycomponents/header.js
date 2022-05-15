import React from 'react';
import "../MyCSS/header.css";
import icon1 from "../sources/menu.png";
import search from "../sources/search.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';


import "../MyCSS/sidebar.css";


export default function Header() {
    const [open, setOpen] = useState(false)
    const load = () => {
        const visibility = document.getElementsByClassName("sidebar")[0];
        visibility.style.visibility = "hidden";
    }


    const sidebar = () => {
        const element = document.getElementsByClassName("sidebar")[0];
        const test = document.getElementsByClassName("content-box")[0];

        const box = document.getElementsByClassName("header-box")[0];
        if (!open) {
            element.style.visibility = "visible";
            element.style.transition = "width .2s";
            element.style.width = "20vw";
            test.style.opacity = "0.1";
            box.style.margin = "0 20vw";
            box.style.width = "80vw";
            setOpen(!open)
        }
        else {
            element.style.visibility = "hidden";
            element.style.transition = "width .2s";
            element.style.width = "0";
            box.style.margin = "0";
            box.style.width = "100vw";
            test.style.opacity = "1";
            setOpen(!open)
        }
    }

    const closeSidebar = () => {
        
        const element = document.getElementsByClassName("sidebar")[0];
        const test = document.getElementsByClassName("content-box")[0];
        const box = document.getElementsByClassName("header-box")[0];

        element.style.visibility = "hidden";
        element.style.width = "0";
        box.style.margin = "0";
        box.style.width = "100vw";
        test.style.opacity = "1";
        setOpen(false)
    }

    return (
        <>
            <div className="total" onLoad={() => { load() }}>
                <div id='side' className="sidebar">
                    <div className='side-content'>
                        <Link to="/" className="hometab">Home</Link>
                        <Link to='/about' className="abouttab">About US</Link>
                        <div className="abouttab">About US</div>
                        <div className="abouttab">About US</div>
                        <div className="abouttab">About US</div>
                    </div>
                </div>
                <div className='header-box'>
                    <div className='header-left'>
                        <img onClick={() => { sidebar() }} className='option-icon' src={icon1} alt="menu"></img>
                    </div>
                    <div className='header-center'>
                        <Link onClick={() => { closeSidebar() }} className='header-center' to="/">TEMPLATE</Link>
                    </div>
                    <div className='header-right'>
                        <input type="text" placeholder='ENTER'></input>
                        <img className='search-icon' src={search} alt="search" />
                    </div>
                </div>
            </div>
        </>
    )
}
