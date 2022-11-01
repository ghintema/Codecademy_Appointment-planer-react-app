import React from "react";
import { useState } from 'react';
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [appointments, setAppointments] = useState([{title: 'First Appointment', 
                                                    contact: 'Contact for frist Appointment',
                                                    date: 'Date for first Appointment',
                                                    time: 'Time for first Appointment',
                                                    id: 1 }]);

  const [contacts, setContacts] = useState([{name: 'Name of firste Contact',
                                            phone: '0123456789',
                                            email: 'john.doe@first-mail.de',
                                            id: 1}]);                                                    
                                        
  
const addNewAppointment = (title, contact, date, time) => {
  setAppointments([...appointments, {title: title, 
                                     contact: contact, 
                                     date: date, 
                                     time: time, 
                                     id: Math.floor(Math.random()*100)}])
}
                                            
const addNewContact = (name, phone, email) => {
  // console.log(`addNewContact invoked with name: ${name}, phone: ${phone}, mail: ${email}`);
  setContacts([...contacts, {name: name, 
                              phone: phone, 
                              email: email, 
                              id: Math.floor(Math.random()*100)}])
}

const deleteAppointment = (e) => {
  const id = e.target.id;
  console.log('deleteAppointment invoked with id: ' + id)
  setAppointments(appointments.filter((appointment) => appointment.id != id))
}

const deleteContact = (e) => {
  const id = e.target.id;
  console.log('deleteContact invoked with id: ' + id)
  setContacts(contacts.filter((contact) => contact.id != id))
}


  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
              contacts={contacts} 
              addNewContact={addNewContact} 
              deleteContact={deleteContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
              appointments={appointments} 
              contacts={contacts} 
              addNewAppointment={addNewAppointment} 
              deleteAppointment={deleteAppointment} 
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
