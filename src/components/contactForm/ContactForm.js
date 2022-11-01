import React from "react";
import './ContactForm.css';

export const ContactForm = (props) => {
  console.log('This is props.name out of contactForm:')
  console.log(props.name);


  const showForm = (e) => {
    e.target.nextElementSibling.classList.toggle('visible')
    e.target.classList.toggle('turnAround')
  }

  const handleChange = (e) => {
    if (e.target.id === 'name') {
      props.setName(e.target.value)
    }
    if (e.target.id === 'email') {
      props.setEmail(e.target.value)
    }
    if (e.target.id === 'phone') {
      props.setPhone(e.target.value)
    }
    
  }

  const labelStyle = {fontSize: 12,
                      display: 'block', 
                      marginBottom: 5}

  return (
    <div>
      
      <form id="contactForm" onSubmit={props.handleSubmit} className="formStyle" >
        <label for="name" style={labelStyle}>Type name here:</label>
        <input
          id="name"
          type="text"
          value={props.name}
          onChange={handleChange} 
          placeholder='Enter complete name here...'
        />
        <label for="email" style={labelStyle}>Type a valid email here:</label>
        <input
          id="email"
          type="text"
          value={props.email}
          onChange={handleChange} 
          placeholder='Enter complete email here...'
        />
        <label for="phone" style={labelStyle}>Type a valid phone number here:</label>
        <input
          id="phone"  
          type="text"
          value={props.phone}
          onChange={handleChange} 
          placeholder='Enter complete phone number here...'
        />
        <button type="submit" > Neuer Eintrag</ button>
      </form>
    </div>
      
  );
};
