import React from "react";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const contacts = [
        {
            id: "1",
            name: "Sid",
            email: "sid@gmail.com",
        },
    ];
    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                clickHandler={deleteContactHandler}
                key={contact.id}></ContactCard>
        );

    });
    return (
        <div className="main">
            <h2>Contact List</h2>
            <button className="ui button blue right">Add Contact</button>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    );
};

export default ContactList;