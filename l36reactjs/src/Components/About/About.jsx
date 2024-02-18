import React, { Fragment } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Styles from './About.module.css';
const About = () => {
  return (
    <Fragment>
        <NavLink to="faqs">FAQs</NavLink>
        <NavLink to="contact">Contact Us</NavLink>

        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias quibusdam aperiam nostrum, modi provident sed dolore eos incidunt consectetur natus in possimus nulla quisquam consequatur eaque beatae harum! Suscipit?
        </div>

        <h1>My About Page</h1>

        <div className={Styles.faqs}>
            <div className={Styles.myFaqs} >
                <Outlet />
            </div>
            <div className={Styles.myFaqsInfo} >
                Read the following FAQs carefully
            </div>
        </div>
    </Fragment>
  )
}

export default About