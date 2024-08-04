import { useState } from "react";
import server from "../scripts/server";

const PersonForm = ({ persons, setPersons, names, setMessage }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (newName.length === 0) {
      alert("No name added");
    } else if (names.includes(newName)) {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.find((person) => person.name === newName).id,
      };
      if (
        window.confirm(
          `${newPerson.name} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        server
          .update(newPerson.id, newPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== newPerson.id ? person : returnedPerson,
              ),
            );
            setMessage({
              text: `Updated ${returnedPerson.name}`,
              messageType: "successful_notif",
            });
            setTimeout(() => {
              setMessage({
                text: "No notifications",
                messageType: "notification",
              });
            }, 5000);
          })
          .catch((error) => {
            console.log(`${newPerson.name} update error`);
          });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: (persons.length + 1).toString(),
      };
      server
        .create(newPerson)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setMessage({
            text: `Added ${returnedPerson.name}`,
            messageType: "successful_notif",
          });
          setTimeout(() => {
            setMessage({
              text: "No notifications",
              messageType: "notification",
            });
          }, 5000);
        })
        .catch((error) => {
          console.log(`${newPerson.name} create error`);
        });
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>

      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />{" "}
      </div>

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
