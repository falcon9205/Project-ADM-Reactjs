import React from 'react';
import './ContactForm.css'

// import LocationImage from '../../assests/location.png';
// import EmailImage from '../../assests/email.png';
// import PhoneImage from '../../assests/phone.png';

function Contact() {
  return (
    <div className="contact">
      {/* <span className="big-circle"></span> */}
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
          Have any  questions or need help? Feel free to reach out ! We’re here for you, and we value your feedback.
          </p>

          <div className="info">
          <div className="information">
                <img src="./assests/location.png" className="icon" alt="" />
                <a class="mailto" href='https://maps.app.goo.gl/kq4RcL49v6mxSRVZ7' target='blank'>
                <p>2 NM 22, Block M, Old DLF, Sector 14, Gurugram, 122022</p>
                </a>
                
              </div>
              <div className="information">
                <img src="./assests/email.png" className="icon" alt="" />
                <a class="mailto" href="mailto:admissions@admedusociety.com?subject=Subject%20of%20the%20Email&body=Body%20of%20the%20Email">admissions@admedusociety.com</a>
              </div>
              <div className="information">
                <img src="./assests/phone.png" className="icon" alt="" />
                <a className='mailto' href="tel:+91-9958586721">
                <p> +91-9958586721</p>
                </a>
                
              </div>
          </div>

         
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" placeholder='Full Name' name="name" className="input" required/>
              
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" placeholder='Email' className="input" required/>
           
              <span>Email</span>
            </div>
          
            <div className="input-container textarea">
              <textarea name="message" className="input" placeholder='Message'></textarea>
              <span>Message</span>
            </div>
            <a class="mailto btn " href="mailto:admissions@admedusociety.com?subject=Subject%20of%20the%20Email&body=Body%20of%20the%20Email" >Submit</a>
          
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;



