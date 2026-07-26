import React, { useState } from 'react';
import './contactUs.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Flight from "../../assets/home.jpg";

const navLinks = [
  { label: "Flights", path: "/Flights" },
  { label: "Hotels", path: "/Hotels" },
  { label: "Discover", path: "/Discover" },
  { label: "About Us", path: "/AboutUs" },
  { label: "Contact", path: "/Contact" },
];

const ContactUs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errData, setErrData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value !== "") {
      setErrData((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = { name: "", email: "", message: "" };
    let isValid = true;

    Object.keys(formData).forEach((name) => {
      if (!formData[name]) {
        errors[name] = "This field is required";
        isValid = false;
      }
    });

    setErrData(errors);

    if (!isValid) {
      toast.error("Please fill all required fields");
      return;
    }

    setSubmitting(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/contact`,
        { ...formData }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Message sent — we'll get back to you soon!", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored"
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Something went wrong";
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-hero" style={{ backgroundImage: `url(${Flight})` }}>
      <nav className="contact-nav">
        <button className="contact-brand" onClick={() => navigate("/")}>
          <span>Phnes. Travels</span>
        </button>
        <div className="contact-nav-links">
          {navLinks.map((link) => (
            <button
              key={link.path}
              className={`contact-nav-link ${link.label === "Contact" ? "active" : ""}`}
              onClick={() => navigate(link.path)}
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="contact-text-home">
        <h3>Contact</h3>
        <h1>Get in touch</h1>
        <p>We are here for you! How can we help?</p>
      </div>

      <div className="contact-card">
        <div className="contact-body">
          <div className="contact-form-side">
            <form onSubmit={handleSubmit} noValidate>
              <div className="contact-field">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  className={errData.name ? 'input-error' : ''}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                {errData.name && <span className="contact-error">{errData.name}</span>}
              </div>

              <div className="contact-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  className={errData.email ? 'input-error' : ''}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                {errData.email && <span className="contact-error">{errData.email}</span>}
              </div>

              <div className="contact-field">
                <textarea
                  placeholder="Go ahead, we are listening.."
                  value={formData.message}
                  className={errData.message ? 'input-error' : ''}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={5}
                />
                {errData.message && <span className="contact-error">{errData.message}</span>}
              </div>

              <button type="submit" className="contact-submit-btn" disabled={submitting}>
                {submitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          <div className="contact-info-side">
            <svg viewBox="0 0 300 220" className="contact-illustration" aria-hidden="true">
              <path
                d="M20 120 C 40 60, 120 40, 180 60 C 240 80, 260 40, 280 30 L 280 200 L 20 200 Z"
                fill="var(--teal-deep)"
              />
              <circle cx="60" cy="55" r="14" fill="#e05a2b" opacity="0.85" />
              <circle cx="245" cy="45" r="4" fill="#fff" opacity="0.7" />
              <circle cx="90" cy="30" r="3" fill="#fff" opacity="0.6" />
              <circle cx="150" cy="130" r="10" fill="#e05a2b" />
              <path d="M150 130 L150 160" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
              <circle cx="200" cy="110" r="16" fill="none" stroke="#111" strokeWidth="4" />
              <line x1="211" y1="121" x2="228" y2="138" stroke="#111" strokeWidth="4" strokeLinecap="round" />
              <circle cx="230" cy="160" r="18" fill="#1c1c1c" />
            </svg>

            <ul className="contact-info-list">
              <li>
                <span className="contact-icon">📍</span>
                205A Millennium City, Accra
              </li>
              <li>
                <span className="contact-icon">📞</span>
                233 - 8586 - 689
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                phnes.travels@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactUs;