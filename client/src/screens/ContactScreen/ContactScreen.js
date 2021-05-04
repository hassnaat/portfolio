import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "./ContactScreen.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [btnText, setBtnText] = useState("Send Email");

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnText("Sending...");
    emailjs
      .send(
        "service_s5hw00a",
        "template_m7exszz",
        { from_name: name, from_email: email, message: msg },
        "user_ICudzb9R2uBK3SyS2D5iO"
      )
      .then(
        (result) => {
          setBtnText("Send Email");
          toast.success("Email Sent Successfully", { position: "top-center" });
          setName("");
          setEmail("");
          setMsg("");
        },
        (error) => {
          toast.error("Email Sending Failed", { position: "top-center" });
          setBtnText("Send Email");
        }
      );
  };

  return (
    <div className="contactscreen">
      <div className="contact__header">
        <h1 className="contact__heading">Get in touch!</h1> <hr />
      </div>
      <div className="social__icons">
        <a href="https://web.facebook.com/hasnat.farooq.948">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/in/hassnaatfarooq/">
          <i class="fab fa-linkedin"></i>
        </a>
        <Link to="/contact">
          <i class="fas fa-envelope"></i>
        </Link>
      </div>
      <div className="form__box">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <form onSubmit={sendEmail}>
          <div>
            <span>
              <i class="fas fa-user-alt"></i>
            </span>
            <input
              className="form__input"
              type="text"
              autoComplete="none"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <span>
              <i class="far fa-envelope"></i>
            </span>
            <input
              required
              className="form__input"
              type="email"
              autoComplete="none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email Address"
            />
          </div>
          <div>
            <span>
              <i class="fas fa-comment-dots"></i>
            </span>
            <textarea
              required
              className="form__input"
              rows="5"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={btnText === "Sending..." ? true : false}
            className="contact__btn"
            placeholder="Type Your Message!"
          >
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactScreen;
