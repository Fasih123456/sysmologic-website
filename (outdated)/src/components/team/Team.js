import React from 'react'
import FB from '../img/team/FB.svg'
import INSTA from '../img/team/INSTA.svg'
import Twit from '../img/team/Twit.svg'
import rightarr from '../img/projects/rightarrow.svg'
import fasih from '../img/team/team pfp/fasih.svg'
import ab from '../img/team/team pfp/ab.svg'
import em from '../img/team/team pfp/em.svg'
import './Team.css'
const Team = () => {
  return (
    <div className="team-bg">
    <div className='team-container'>
        <div className="profile-con">
            <div className="profile-box">
                <img src={fasih} alt="" className="pfp" />
                <h2 className="name">Fasih Ul</h2>
                <p className="role">CEO</p>
                <div className="sm">
                    <img src={FB} alt="" />
                    <img src={INSTA} alt="" />
                    <img src={Twit} alt="" />
                </div>
            </div>
            <div className="profile-box profile-box-3">
                <img src={ab} alt="" className="pfp" />
                <h2 className="name">Abdula Shahid</h2>
                <p className="role">UI/UX Designer</p>
                <div className="sm">
                    <img src={FB} alt="" />
                    <img src={INSTA} alt="" />
                    <img src={Twit} alt="" />
                </div>
            </div>
            <div className="profile-box ">
                <img src={em} alt="" className="pfp" />
                <h2 className="name">Emiliya Perevalova</h2>
                <p className="role">Web Analytics</p>
                <div className="sm">
                    <img src={FB} alt="" />
                    <img src={INSTA} alt="" />
                    <img src={Twit} alt="" />
                </div>
            </div>
            
            
        </div>
        <div className="team-right">
            <h1>MEET OUR <br />INCREDIBLE TEAM</h1>
            <p>Sed ut alterum esse fugiendum itaque aiunt hanc <br /> involuta aperiri, altera prompta et dolorum fuga et <br /> argumentandum et quasi architecto.</p>
            <a href="/"><p>Read more</p> <img src={rightarr} alt="" /></a>
        </div>
    </div>
    </div>
  )
}

export default Team