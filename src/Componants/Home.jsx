import React from 'react'
import './Home.css'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <div id='HomeMainDiv'>
        <div id='Home_Sub_Div' >
            <Navbar/>
            <div id='Home_content'>
              <div className="Home_Content_Sub_div">
                  <h1>We Create Learning Experience <br /> with Excellent Technology</h1>
                  <p>Unlimited Access To 100+ World-Class Courses, Hands-On <br /> Projects, And Job-Ready Certificate Programs- <br />
                    All Included In Your Subscription</p>
                    <div>
                      <button>Book Demo Class</button>
                      <a href="">Explore More </a>
                    </div>
              </div>
              <div className="Home_Content_Sub_div">
                <div id='Video_Box'>
                    <video controls loop muted poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgoutPO5oQTaUve9MP2NIMsQgxL7I3cHn2HM98cOVCm5EqGSz" src="https://d2of6bhnpl91ni.cloudfront.net/cms/marketing-video-template-for-product-demo-78da02f0b8.mp4"></video>
                </div>
              </div>
            </div>
        </div>

        
    </div></>
    
    
  )
}

export default Home