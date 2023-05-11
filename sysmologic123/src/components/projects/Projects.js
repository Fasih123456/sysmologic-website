import React from 'react'
import './Project.css'
import img1 from '../img/projects/img1.jpg'
import img2 from '../img/projects/img2.jpg'
import img3 from '../img/projects/img3.jpg'
import img4 from '../img/projects/img4.jpg'
import rightarr from '../img/projects/rightarrow.svg'
const Projects = () => {
  return (
    <div className='project-container'>
        <div className="pro-top">
            <h1>PROJECT GALLERY</h1>
            <div className="pro-nav">
                <p>Featured</p>
                <p className='pro-yellow-nav'>Recent</p>
                <p>Best Review</p>
                <p>Recommended</p>
            </div>
        </div>
        <div className="projects">
            <div className="pro-text">
                <img src={img1} alt="" />
                <div>
                <h2>Si sine causa, nollem me tamen laudandis</h2>
                <p>Probabo, inquit, modo ista sis quam ostendis</p>
                <p className='date'>12 December 2021</p>
                </div>
            </div>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <button><img src={rightarr} alt="" /></button>
        </div>
        <div className="navigation">
            <button className='yellow-navigation'></button>
            <button></button>
            <button></button>
        </div>

    </div>
  )
}

export default Projects