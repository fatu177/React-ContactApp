import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete }) {
    return (
        <div className="contact-list">
            {contacts.map((contact) => (
                <ContactItem key={contact.id} {...contact} onDelete={onDelete} id={contact.id} />
                
                ))}
        </div>
    );
}

export default ContactList;