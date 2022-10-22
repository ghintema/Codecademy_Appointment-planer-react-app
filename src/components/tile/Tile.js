import React from "react";
import { ContactForm } from "../contactForm/ContactForm";

const styleForName = {marginBottom: 0}

const styleForContactDetails = {fontSize: 12, margin:10};
                                

export const Tile = (props) => {
  return (
    <div className="tile-container">

      {Object.keys(props.content).map((key, index) => { if (key !== 'id') {
        return <p className={index === 0 ? 'tile-title' : 'tile'}><strong>{key}:</strong>    {props.content[key]}</p>
      } 
      })}
   
      
      {/* <p className="name" style={styleForName}><strong>Name:</strong> {props.contact.name}</p>
      <p className="phone" style={styleForContactDetails}><strong>Phone:</strong> {props.contact.phone}</p>
      <p className="email" style={styleForContactDetails}><strong>E-mail:</strong> {props.contact.email}</p> */}
    </div>
  );
};
