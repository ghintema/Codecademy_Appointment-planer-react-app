import React from "react";

export const ContactPicker = (props) => {
  
  const handleChange = (e) => {
    props.setName(e.target.value)
  }
  
  return (
    <select>
      <option selected='selected'></option>
      {/* {props.contacts.map(contact => <option>{contact.name}</option>)} */}
    </select>
  );
};
