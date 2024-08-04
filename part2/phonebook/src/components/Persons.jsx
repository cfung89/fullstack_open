import { useEffect } from "react";
import server from "../scripts/server";

const Persons = ({ persons, setPersons, newFilter, names, setMessage }) => {
  useEffect(() => {
    server
      .getAll()
      .then((initPersons) => {
        setPersons(initPersons);
      })
      .catch((error) => {
        console.log(`Fetch error`);
      });
  }, []);

  const personsToShow = newFilter.length
    ? persons.filter((person) =>
        person.name.toUpperCase().includes(newFilter.toUpperCase()),
      )
    : persons;

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      server
        .deleteID(person.id)
        .then((returnedPerson) => {
          setPersons(persons.filter((temp) => temp.id !== returnedPerson.id));
          setMessage({
            text: `Deleted ${returnedPerson.name}`,
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
          console.log(`${person.name} deletion error`);
          setPersons(persons.filter((temp) => temp.id !== person.id));
          setMessage({
            text: `Information of ${person.name} has already been removed from server`,
            messageType: "error_notif",
          });
          setTimeout(() => {
            setMessage({
              text: "No notifications",
              messageType: "notification",
            });
          }, 5000);
        });
    }
  };

  return (
    <div>
      {personsToShow.map((person) => {
        names.push(person.name);
        return (
          <p key={person.id}>
            {person.name} {person.number}&nbsp;
            <button type="button" onClick={() => handleDelete(person)}>
              delete
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default Persons;
