import React, { useRef, useState } from "react";
import { medsos } from "../constants";
import emailjs from "@emailjs/browser";
// import emailjs from ''

const Contact = () => {

  // template_spsuin7
  // service_6lhn73b
  // 0CR2YjocqkbyJdVVK

  const formEl = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
        'service_6lhn73b',
        'template_spsuin7',
        {
          from_name: form.name,
          to_name: "Raissan Developer",
          from_email: form.email,
          to_email: "raisaria341@gmail.com",
          message: form.message
        },
        '0CR2YjocqkbyJdVVK'
      ).then(
        () => {
          setLoading(false);
          alert("Thank you, I will get back to you as soon as possible");

          setForm({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong, Please try again.");
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h2>Contact</h2>
      <div className="container-contact">
        <div className="desc-contact">
          <div className="header-desc">
            <h2>Drop Me a Message</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, vero voluptatibus excepturi repellat ut eveniet natus deserunt consequuntur, enim dolorum id. Quasi saepe mollitia nobis consequuntur rem laborum velit dolorem!</p>
          </div>
          <div className="container-medsos">
            {
              medsos.map((sos) => {
                return (
                  <div className="medsos" key={sos.id}>
                    <div className="logo">
                      <img width="30" src={sos.icon} alt="" />
                    </div>
                    <p>{sos.isi}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="form-contact">
            <form action="" onSubmit={handleSubmit} rel={formEl}>
              <div className="name">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" value={form.name} required onChange={handleChange}/>
              </div>
              <div className="email">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" value={form.email} required onChange={handleChange}/>
              </div>
              <div className="message">
                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="message" cols="20" rows="5" placeholder="Your Message" value={form.message} required onChange={handleChange}></textarea>
              </div>
              <button type="submit">{loading ? "Sending..." : "Send"}</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;