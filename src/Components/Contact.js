import React, { useState } from "react";
import emailjs from 'emailjs-com'

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Contact.css'
const Contact = () => {
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  const serviceID="service_0c4vum8";
  const templateID="template_730fcb9";
  const userID="xTQf8H6sjAjUfictO";

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await emailjs.send(serviceID, templateID, {
        from_email: email,
        message: messages,
      }, userID);
      
      console.log("email sent");
      setEmail("");
      setMessages("");
      
      toast.success("Email sent successfully!", { 
        style:{
          background: "black",
          color: "#fff",
          borderRadius: "4px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }
      },{
        position: "top-center",
        
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
   
    }
      catch (error) {
        console.log(error);
    }
   

    
  };
  return (
    <>
    
    <h1 style={{marginTop:"100px",display:"flex",color:  "#20B2AA",justifyContent:"center"}}>contact</h1>
    <div className="contact-container">
        <ToastContainer />
      <form onSubmit={handleSubmit} className="contact-form">
      
          <input
            placeholder="email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
       

       
          <textarea
          placeholder="messages"
            required
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
          ></textarea>
       
        <button type="submit"> send</button>
      </form>
    </div>
    </>
    
  );
};

export default Contact;
