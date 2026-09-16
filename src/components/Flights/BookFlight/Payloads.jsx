import React, { useState } from 'react';
import "./BookFlight.css"
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../../API/axios"
import { ToastContainer, toast } from "react-toastify";
import Footer from "../../Footer/Footer"
import Nav from "../../nav/nav"

// Only fields the customer actually fills in themselves
const fields = [
  { name: "date", label: "Date", type: "date", placeholder: "" },
  { name: "passenger", label: "Passenger", type: "text", placeholder: "Passenger name" },
];

const Payloads = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const listingId = location.state?.listingId;

  const [formData, setFormData] = useState({
    date: "",
    passenger: ""
  });

  const [errData, setErrData] = useState({
    date: "",
    passenger: ""
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

    if (!listingId) {
      toast.error("No flight selected. Please go back and pick a flight first.");
      return;
    }

    const errors = { date: "", passenger: "" };
    let isValid = true;

    fields.forEach(({ name }) => {
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
      const res = await api.post("/bookFlight", {
        ...formData,
        listing: listingId,
      });

      if (res.status === 201) {
        toast.success("Flight booked successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored"
        });

        setTimeout(() => {
          navigate("/Flights");
        }, 1000);
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Something went wrong";
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div>
        <Nav />
      </div>

      <div className='booking-hero'>
        <div className='text-home'>
          <h3>Booking</h3>
          <h1>Plan your journey</h1>
          <p>Fill in your travel details below and we'll take care of the rest.</p>
        </div>

        <div className='book-flight'>
          {!listingId && (
            <p className="field-error">
              No flight selected — please go back to Flights and pick one.
            </p>
          )}

          <form className='flight-form' onSubmit={handleSubmit} noValidate>
            <header className='flight-header'>
              <h2>Plan your journey with ease and confidence!</h2>
            </header>

            {fields.map(({ name, label, type, placeholder }) => (
              <div className='form-group' key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                  id={name}
                  type={type}
                  placeholder={placeholder}
                  value={formData[name]}
                  aria-invalid={!!errData[name]}
                  className={errData[name] ? 'input-error' : ''}
                  onChange={(e) => handleChange(name, e.target.value)}
                />
                {errData[name] && <span className='field-error'>{errData[name]}</span>}
              </div>
            ))}

            <button type='submit' id='confirm-btn' disabled={submitting || !listingId}>
              {submitting ? "Booking..." : "Confirm booking"}
            </button>
          </form>
          <ToastContainer position="top-center" style={{ top: '80px' }} />
        </div>
      </div>

      <div className='compo-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Payloads;