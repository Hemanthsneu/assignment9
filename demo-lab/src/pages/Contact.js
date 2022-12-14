import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import List from './List';

function Contact(){
    
      const contacts = [
        {
            id: 1,
            name: "Hemanth ",
            contact: 1111111111
        },
        {
            id: 2,
            name: "biden",
            contact:7777777777
        },
        {
            id: 3,
            name: "lopez",
            contact: 5555555555
        }
        
    ];

    return(
      <div>
      <Navbar/>
      <Content title="Contact" content="This is the contact Page"/>
      {contacts.map(contact => (<List
        id = {contact.id}
        name = {contact.name}
        contact = {contact.contact}
      />))}
      </div>
    )
}

export default Contact
