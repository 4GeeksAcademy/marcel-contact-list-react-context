import ContactForm from "../components/ContactForm.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Form = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="text-center mt-5">
      <ContactForm />
    </div>
  );
};
