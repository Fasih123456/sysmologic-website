import React from 'react'
import './Project.css'
import img1 from '../img/projects/sysmoweb1.png'
import img2 from '../img/projects/sysmoweb2.png'
import img3 from '../img/projects/sysmoweb3.png'
import img4 from '../img/projects/sysmoweb4.png'
import rightarr from '../img/projects/rightarrow.svg'
const Projects = () => {
  return (
    <div className='project-container' id='projects'>
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
            {/* <div className="pro-text">
                <img src={img1} alt="" />
                <div>
                <h2>Si sine causa, nollem me tamen laudandis</h2>
                <p>Probabo, inquit, modo ista sis quam ostendis</p>
                <p className='date'>12 December 2021</p>
                </div>
            </div> */}
            <a href="https://precious-lokum-b76104.netlify.app/" target='blank' ><img src={img1} alt="#" /></a>
            <a href="https://enchanting-profiterole-beb892.netlify.app/" target='blank' ><img src={img2} alt="#" /></a>
            <a href="https://papaya-souffle-afd28f.netlify.app/" target='blank' ><img src={img3} alt="#" /></a>
            <a href="https://engineeredplans.ca/" target='blank' ><img src={img4} alt="#" /></a>
            <button><img src={rightarr} alt="" /></button>
        </div>
        {/* <div className="navigation">
            <button className='yellow-navigation'></button>
            <button></button>
            <button></button>
        </div> */}
        <div className="note">
            <p>We don't host full stack websites for demo purposes but we can gladly show them in a meeting.</p>
        </div>

    </div>
  )
}

export default Projects