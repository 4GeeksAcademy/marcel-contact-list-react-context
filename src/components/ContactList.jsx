import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getContacts } from "../services/contactService";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContacts();
      
        dispatch({ type: "set_contacts", payload: data.contacts });
      } catch (error) {
        console.error("Error fetching contacts", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {store.contacts.length === 0 ? (
        <p>No tienes contactos</p>
      ) : (
        store.contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))
      )}
    </div>
  );
};

export default ContactList;
