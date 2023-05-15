import React,{useState,useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'
import './Project.css'
// import img1 from '../img/projects/sysmoweb1.png'
// import img2 from '../img/projects/sysmoweb2.png'
// import img3 from '../img/projects/sysmoweb3.png'
// import img4 from '../img/projects/sysmoweb4.png'
import {Projectimg} from './Projectdata.js'
import rightarr from '../img/projects/rightarrow.svg'
const Projects = () => {
    const [prev, setPrev] = useState(0);
    const [nex, setNex] = useState(4);
    const [add, setAdd] = useState(4);
  const OnNext = () => {
    setPrev((prevValue) => prevValue + add)
    setNex((setNex) => setNex + add)
    
}
const OnPrev = () => {
    setPrev((prevValue) => prevValue - add)
    setNex((setNex) => setNex - add)
    
}
const isWidescreen = useMediaQuery({
    query: '(max-width: 1000px)'
  })
  useEffect(() => {
   if (isWidescreen) {
    setNex(2)
    setAdd(2)
   }
   
  }, [])
  return (
    <div className='project-container' id='projects'>
        <div className="pro-top">
            <h1>PROJECT GALLERY</h1>
            
        </div>
        <div className="projects">
        {/* <button onClick={OnPrev} ><img src={rightarr} id='project-leftarr' alt="" /></button> */}
        {
                  
                  prev >= 1 && 
                  <button onClick={OnPrev} id='project-leftbtn' ><img src={rightarr} id='project-leftarr' alt="" /></button>
                }
            <div className="pro">
            {Projectimg.slice(prev, nex).map((i)=> (
                <a href="https://precious-lokum-b76104.netlify.app/" target='blank' ><img src={i.img} alt="#" /></a>
            ))}
            </div>
            {
                  nex <= Projectimg.length-1 && 
                  <button onClick={OnNext} ><img src={rightarr} alt="" /></button>
                }
            
        </div>
        {/* <div className="nxtprevbtn">
          {
                  nex <= Projectimg.length-1 && 
                    <button className='nxt-btn nex' onClick={OnNext}>Next</button>
                }
          {
                  
                  prev >= 1 && 
                    <button className='nxt-btn prev' onClick={OnPrev}>Previous</button>
                }
            </div> */}
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


 {/* <div className="pro-text">
                <img src={img1} alt="" />
                <div>
                <h2>Si sine causa, nollem me tamen laudandis</h2>
                <p>Probabo, inquit, modo ista sis quam ostendis</p>
                <p className='date'>12 December 2021</p>
                </div>
            </div> */}
            {/* <a href="https://precious-lokum-b76104.netlify.app/" target='blank' ><img src="/sysmoweb1.png" alt="#" /></a>
            <a href="https://enchanting-profiterole-beb892.netlify.app/" target='blank' ><img src={img2} alt="#" /></a>
            <a href="https://papaya-souffle-afd28f.netlify.app/" target='blank' ><img src={img3} alt="#" /></a>
            <a href="https://engineeredplans.ca/" target='blank' ><img src={img4} alt="#" /></a> */}