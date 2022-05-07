import React from 'react';
import "../MyCSS/header.css";
import icon1 from "../sources/menu.png";
import search from "../sources/search.png";
import { useState } from 'react';


import "../MyCSS/sidebar.css";


export default function Header() {
    const [open, setOpen] = useState(false)
    // console.log(open);
    // element.hidden = true;
    const load = () =>{
        const visibility = document.getElementsByClassName("sidebar")[0];
        visibility.style.visibility="hidden";
    }


    const sidebar = () => {
        const element = document.getElementsByClassName("sidebar")[0];
        const test = document.getElementsByClassName("content-box")[0];
        const box = document.getElementsByClassName("header-box")[0];
        console.log(test);
        console.log(element);
        if (!open) {
            element.style.visibility="visible";
            element.style.transition="width .2s";
            element.style.width="20vw";
            box.style.margin="0 20vw";
            box.style.width="80vw";
            setOpen(!open)
        }
        else {
            element.style.visibility="hidden";
            element.style.transition="width .2s";
            element.style.width="0";
            box.style.margin="0";
            box.style.width="100vw";
            setOpen(!open)
        }
    }

    return (
        <>
        <div className="total" onLoad={()=>{load()}}>
            <div id='side' className="sidebar">
                <div className='side-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem magnam minima similique, dignissimos enim assumenda odit maxime id dolores qui minus, quos voluptas veritatis quaerat et, exercitationem atque omnis sapiente. Quia optio assumenda odit atque ducimus, sapiente natus eligendi quas animi tenetur, provident ab, minima quibusdam consectetur eum ut tempore.</div>
            </div>
            <div className='header-box'>
                <div className='header-left'>
                    <img onClick={() => { sidebar() }} className='option-icon' src={icon1} alt="menu"></img>
                </div>
                <div className='header-center'>
                    TEMPLATE
                </div>
                <div className='header-right'>
                    <input type="text" placeholder='ENTER'></input>
                    <img className='search-icon' src={search} alt="search"/>
                </div>
            </div>
            </div>
        </>
    )
}
