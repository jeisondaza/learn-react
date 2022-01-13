import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = 'El campo "nombre" es requerido';
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'El campo "nombre" sólo acepta letras y espcios en blanco';
  }

  if (!form.email.trim()) {
    errors.email = 'El campo "email" es requerido';
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Ingrese un email válido";
  }

  if (!form.subject.trim()) {
    errors.subject = 'El campo "subject" es requerido';
  }

  if (!form.comments.trim()) {
    errors.comments = 'El campo "comments" es requerido';
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campo de comentarios sólo acepta 255 cara cteres";
  }

  return errors;
};

function ContactForm() {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>Contact Form</h2>
      {loading && <Loader />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        {errors.name && <Message msg={errors.name} bgColor="#dc3545" />}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {errors.email && <Message msg={errors.email} bgColor="#dc3545" />}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
        />
        {errors.subject && <Message msg={errors.subject} bgColor="#dc3545" />}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Comments"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && <Message msg={errors.comments} bgColor="#dc3545" />}
        <input type="submit" value="Send" />
      </form>
      {response && <Message msg={"Data sent"} bgColor="#4cad5c" />}
    </div>
  );
}

export default ContactForm;
