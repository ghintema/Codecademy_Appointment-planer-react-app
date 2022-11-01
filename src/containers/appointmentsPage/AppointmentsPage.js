import React from "react";
import { useState, useEffect } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm'
import { TileList } from '../../components/tileList/TileList';
import { SearchBar } from '../../components/searchBar/SearchBar'



export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [filter, setFilter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.addNewAppointment(title, contact, date, time)
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  const layout = { display: 'flex',
                   alignItems: 'center'}
  return (
    <div>
      <section>
        <div style={ layout }>
          <label for="hideAppointmentForm">
            <h2>Add Appointment</h2>
          </label>
          <button>dasf</button>
          <SearchBar
            filter={filter}
            setFilter={setFilter} />
        </div>
        
        <AppointmentForm
          title={title}
          contact={contact}
          date={date}
          time={time}
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime} 
          contacts={props.contacts}
          handleSubmit={handleSubmit}
        />
          
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
          content={props.appointments}
          filterTerm={filter}
          filterCategory='title'
          delete={props.deleteAppointment}/>
      </section>
    </div>
  );
};
