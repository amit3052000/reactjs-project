import React from 'react'
import "../MyCSS/content.css"
import { Route, Routes } from 'react-router-dom';
import ContentHome from './ContentHome';
import About from './About';

export default function Content() {
  return (
    <div className='content-box'>
            <Routes>
                    <Route path='/' element={<ContentHome></ContentHome>}></Route>
                    <Route path='/about' element={<About></About>}></Route>
            </Routes>
    
    </div>
  )
}
