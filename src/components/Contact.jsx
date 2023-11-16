import React from 'react';
import "../styles/contact.css";
import { MdOutlineEmail, MdWhatsapp } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";
import { useRef } from 'react';
import emailjs from "emailjs-com";




const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();



    emailjs.sendForm('service_p19nxlh', 'template_9daxbnj', form.current, '6fskZ2eJ8PfWjFPNE')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();

  };


  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>rajdeoranitw@gmail.com</h5>
            <a href="mailto:rajdeoranitw@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiGithubLine className='contact__option-icon' />
            <h4>Github</h4>
            <h5>my Github</h5>
            <a href="https://github.com" target='_blank'>Github Me</a>
          </article>

          <article className='contact__option'>
            <MdWhatsapp className='contact__option-icon' />
            <h4>What's App</h4>
            <h5>+9182xxxxxx76</h5> 
            <a href="https://api.whatsapp.com/send?phone=+918290821476" target='_blank'>Send a message</a>
          </article>


        </div>


        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail} >

          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" required placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>

        </form>

      </div>

    </section>
  )
}

export default Contact