import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Medi-cate</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can I help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>How's your health today</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Symptoms of common cold</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Medicine for headache</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Feeling nauseous</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Medi-cate may display inaccurate info, we are working on it, so consult a doctor.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main