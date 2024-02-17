import React from 'react'
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './User/Home'
import About from './User/About'
import Contact from './User/Contact'
import Blogs from './User/Blogs'

const FinalApp = () => {
    return (
        // <BrowserRouter >
            <div>
                <nav>
                    <Link to="home">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="contact">Contact</Link>
                    <Link to="blogs">Blogs</Link>
                </nav>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blogs" element={<Blogs />} />
                </Routes>
            </div>
        // </BrowserRouter>
    )
}

export default FinalApp