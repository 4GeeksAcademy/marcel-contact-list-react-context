import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { createContact, updateContact } from "../services/contactService";

const ContactForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { store, dispatch } = useGlobalReducer();
  const [success, setSuccess] = useState(false);
  const [wasEdit, setWasEdit] = useState(false);
  const contactToEdit = store.contacts.find((c) => c.id === Number(id));

  // Usa contactToEdit para inicializar el estado del formulario
  const [form, setForm] = useState(
    contactToEdit || { name: "", email: "", phone: "", address: "" }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const updated = await updateContact({ ...form, id: Number(id) });
        dispatch({ type: "update_contact", payload: updated });
        setWasEdit(true); // <-- Es edición
      } else {
        const created = await createContact(form);
        dispatch({ type: "add_contact", payload: created });
        setWasEdit(false); // <-- Es creación
      }
      setSuccess(true);
    } catch (error) {
      alert("Error al guardar el contacto");
    }
  };

  if (success) {
    return (
      <div className="alert alert-success mt-4 mx-5">
        {wasEdit
          ? "¡Contacto actualizado exitosamente!"
          : "¡Contacto creado exitosamente!"}
        <br />
        <Link to="/" className="btn btn-link mt-2">
          Volver a la Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>{id ? "Editar Contacto" : "Agregar Contacto"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Contact
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
