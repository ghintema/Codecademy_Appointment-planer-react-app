import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const labelStyle = {fontSize: 12,
  display: 'block', 
  marginBottom: 5}

export const AppointmentForm = (props) => {

  const showForm = (e) => {
    e.target.nextElementSibling.classList.toggle('visible')
    e.target.classList.toggle('turnAround')
  }

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      props.setTitle(e.target.value)
    }
    if (e.target.id === 'contact') {
      props.setContact(e.target.value)
    }
    if (e.target.id === 'date') {
      props.setDate(e.target.value)
    }
    if (e.target.id === 'time') {
      props.setTime(e.target.value)
    }
  }

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <button id='hideAppointmentForm' className='arrow' onClick={showForm}></button>
      <form onSubmit={props.handleSubmit} className="formStyle">
        <label for="title" style={labelStyle}>Type title here:</label>
        <input id='title' type='text' value={props.title} onChange={handleChange} />
        <label for='contact' style={labelStyle}>Type contact or choose from list:</label>
        <input id='contact' type='text' value={props.contact} onChange={handleChange} list="contactList" />
          <datalist id="contactList">
            {props.contacts.map(contact => <option>{contact.name}</option>)}
          </datalist>
        <label for ='date' style={labelStyle}>Configure the date here:</label>
        <input id='date' type='date' value={props.date} min={getTodayString()} onChange={handleChange} />
        <label id='time' style={labelStyle}>Configure time here:</label>
        <input id='time' type='time' value={props.time} onChange={handleChange} />
        <button type='submit'>Add appointment</button>
      </form>
    </div>
  );
};
