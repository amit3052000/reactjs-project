import React from 'react'
import "../MyCSS/layer.css";
import twitter from "../sources/twitter.png"
import facebook from "../sources/facebook.png"
import insta from "../sources/instagram.png"
 
export default function Layer() {
  return (
    <div className='layer-box'>
        <img className='hvr1' src={twitter}></img>
        <img className='hvr2' src={facebook}></img>
        <img className='hvr3' src={insta}></img>
    </div>
  )
}
