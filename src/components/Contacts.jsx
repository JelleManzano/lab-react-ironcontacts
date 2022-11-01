import { useState } from "react";

function Contacts({ allContacts }) {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));

  const addContact = () => {
    const randomIndex = Math.floor(Math.random() * allContacts.length);
    const randomContact = allContacts[randomIndex];
    const copy = contacts.map((eachContact) => eachContact);
    copy.push(randomContact);
    setContacts(copy);
  };

  const nameOrder = () => {
    const copy = contacts.map((eachContact) => eachContact);

    copy.sort((elem1, elem2) => {
      if (elem1.name > elem2.name) {
        return 1;
      } else {
        return -1;
      }
    });
    setContacts(copy);
  };

  const popOrder = () => {
    const copy = contacts.map((eachContact) => eachContact);

    copy.sort((elem1, elem2) => {
      if (elem1.popularity < elem2.popularity) {
        return 1;
      } else {
        return -1;
      }
    });
    setContacts(copy);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((eachContact) => {
        if(eachContact.id === contactId) {
            return false
        } else {
            return true
        }
    })
    setContacts(filteredContacts)
  }

  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add a Contact</button>
      <button onClick={nameOrder}>Sort by name</button>
      <button onClick={popOrder}>sort by popularity</button>
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
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  width="200px"
                />
              </td>
              <td>{contact.name}</td>
              <td>{Math.floor(contact.popularity)}</td>
              <td>{contact.wonOscar === true ? "🏆" : "" } </td>
              <td>{contact.wonEmmy === true ? "🏆" : ""}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
