import "./App.css";
import contactsData from "./contacts.json";
import Contacts from "./components/Contacts.jsx";

function App() {
  return (
    <div className="App">
      <Contacts allContacts={contactsData} />
    </div>
  );
}
export default App;
