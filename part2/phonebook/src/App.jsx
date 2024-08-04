import { useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const [message, setMessage] = useState({
    text: "No notifications",
    messageType: "notification",
  });

  const names = [];

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message.text} messageType={message.messageType} />
      <br />
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />

      <h3>add a new</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        names={names}
        setMessage={setMessage}
      />

      <h3>Numbers</h3>
      <Persons
        persons={persons}
        setPersons={setPersons}
        newFilter={newFilter}
        names={names}
        setMessage={setMessage}
      />
    </div>
  );
};

export default App;
