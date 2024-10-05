import React from 'react'
import './contact.css'
import about_icon from '../../assets/about_icon.svg';
import msg_icon from '../../assets/msg_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
   // setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "23671107-6a9f-4de2-be2e-a8767f4f18f9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      // setResult("Form Submitted Successfully");
      alert(data.message)
      event.target.reset();
    } else {
      console.log("Error", data);
      //setResult(data.message);
    }
  };
  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={about_icon} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I am currentely avilable to take on new projects</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={msg_icon} alt="" />
              <p>kishor5690@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 70 70 97 00 50</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bihar, India</p>
            </div>
          </div>
         
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
            <label htmlFor="">Your name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your messege here</label>
            <textarea name="messege" rows={8} placeholder='Enter your messaege'></textarea>
            <button className="contact-submit"  type="submit">Submit now</button>
          </form>
      </div>
    </div>
  )
}

export default Contact
