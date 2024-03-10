import React from 'react'

const Navbar = () => {
  return (
    <div id='MainNavabrDiv'>
        <div id='LeftNavbar'>
            <div >
              <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/logo_google_adsense_color_2x_web_512dp.original.png" alt="" />
            </div>
            <h1>Learning Exp.</h1>
            
        </div>

        <div id='RightNavbar'>
          <div className="right_div_Navbar">
            <a href="">Home</a>
          </div>
          <div className="right_div_Navbar">
            <a href="">Services Us</a>
          </div>
          <div className="right_div_Navbar">
            <a href="">Why Us</a>
          </div>
          <div className="right_div_Navbar">
            <a href="">Our Goals</a>
          </div>
          <div className="right_div_Contact">
            <a href="">Contact Us</a>
          </div>
  
          
          
        </div>
    </div>
  )
}

export default Navbar
