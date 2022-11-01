import { useEffect, useState } from "react";
import React from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import { SearchBar } from "../../components/searchBar/SearchBar";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [duplicate, setDuplicate] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('01234');
  const [email, setEmail] = useState('');
  const [filter, setFilter] = useState('');

  const layout = { display: 'flex',
                  alignItems: 'center'}

  const handleSubmit = (e) => {
    e.preventDefault(); /* To prevent browser default behaviour after submitting a form */
    console.log('handleSubmit invoked')
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (duplicate === false) {

      /* adding new data to contacts in app.js */
      props.addNewContact(name, phone, email )
      
      /* reseting the local status */
      setName('');
      setPhone('');
      setEmail('');
    }
    
  };

  useEffect(() => {

    if (props.contacts.some(contact => contact.name === name )) { /* && !duplicate is to prevent infinte loops */
      setDuplicate(true);
     } else {
      setDuplicate(false);
     }

  },[name])

  console.log(filter)
  return (
    <div>
      <section>
        <div style={ layout }>
          <label for="hideContactForm">
            <h2>Add Contact</h2>
          </label>
          <SearchBar
            filter={filter}
            setFilter={setFilter} />
        </div>
        <ContactForm 
          name={name} 
          phone={phone} 
          email={email} 
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail} 
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          content={props.contacts}
          filterTerm={filter}
          filterCategory='name'
          delete={props.deleteContact}/>
          
      </section>
    </div>
  );
};
