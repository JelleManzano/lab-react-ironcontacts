import { useState } from "react";

function Contacts ({allContacts}) {
    const [contacts, setContacts] = useState(allContacts.slice(0,5))
    
    const addContact = () => {
        const randomIndex = Math.floor(Math.random() * allContacts.length);
        const randomContact = allContacts[randomIndex]
        const copy = contacts.map((eachContact) => eachContact)
        copy.push(randomContact)
        setContacts(copy)
    };
    return (
        <div>
            <h1>IronContacts</h1>
            <button onClick={addContact}>Add a Contact</button>
            <button>Sort by name</button>
            <button>sort by popularity</button>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won an Oscar</th>
                        <th>Won an Emmy</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                 {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>
                            <img src={contact.pictureUrl} alt={contact.name} width="200px"/>
                        </td>
                        <td>{contact.name}</td>
                        <td>{Math.floor(contact.popularity)}</td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                 ))}
                </tbody>
            </table>
        </div>
    )
}


export default Contacts