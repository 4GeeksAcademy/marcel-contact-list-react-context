import useGlobalReducer from "../hooks/useGlobalReducer";
import { deleteContact } from "../services/contactService";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteContact(contact.id);
    dispatch({ type: "delete_contact", payload: contact.id });
  };

  return (
    <div className="card p-3 mb-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-between gap-3">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              contact.name
            )}&background=random&size=128`}
            alt={contact.name}
            className="rounded-circle mb-2"
            style={{ width: "128px", height: "128px" }}
          />
          <div className="text-start">
            <h5>{contact.name}</h5>
            <p>{contact.address}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
        </div>
        <div className="d-flex flex-column align-items-end">
          <i
            className="fas fa-pencil-alt mb-2"
            onClick={() => navigate(`/edit/${contact.id}`)}
            role="button"
          ></i>
          <i className="fas fa-trash" onClick={handleDelete} role="button"></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
