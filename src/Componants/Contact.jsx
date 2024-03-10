import React from 'react'
import '../Componants/Contact.css'

const Contact = () => {
  return (
    <div id='Contact_Main'>
        <div id='Bottom_Contact_div'>
        
            <div id='Contact_div'>
                <div className="ContactSub">
                  <h1>Contact Us!</h1>
                  <p>There are many variations of passages of Lorem Ipsum <br /> but the majority have suffered alteration.</p>
                </div>
                <div className="ContactSub">
                  <input placeholder='    Email here' type="text" />
                </div>
            </div>

            <div id='Footer'>
              <div className="footer_inf">
                 <div >
                    <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/logo_google_adsense_color_2x_web_512dp.original.png" alt="" />
                    <h1>Learning Exp.</h1>
                  </div>
                  
              </div>
              <div className="footer_inf">
                <h3>Links</h3>
                <a href="">Home</a><br />
                <a href="">Pricing</a><br />
                <a href="">Download</a><br />
                <a href="">About</a><br />
                <a href="">Service</a>
              </div>
              <div className="footer_inf">
              <h3>Support</h3>
                <a href="">FAQ</a><br />
                <a href="">How It</a><br />
                <a href="">Features</a><br />
                <a href="">Contact</a><br />
                <a href="">Reporting</a>
              </div>
              <div className="footer_inf">
              <h3>Contact Us</h3>
                <a href="">+91-8826145896</a><br />
                <a href="">e-mail:youremail@gmail.com</a><br />
                <a href="">Pune city</a><br />
                
              </div>
            </div>
        </div>
    
    </div>
   
  )
}

export default Contact