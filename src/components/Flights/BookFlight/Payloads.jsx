import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Driving the four inputs from one array keeps the JSX below short and makes
// adding/removing a field a one-line change instead of touching multiple spots.
const fields = [
  { name: "from", label: "From", type: "text", placeholder: "Departure city" },
  { name: "to", label: "To", type: "text", placeholder: "Destination city" },
  { name: "date", label: "Date", type: "date", placeholder: "" },
  { name: "passenger", label: "Passenger", type: "text", placeholder: "Passenger name" },
];

const Payloads = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    passenger: ""
  });

  const [errData, setErrData] = useState({
    from: "",
    to: "",
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

    const errors = { from: "", to: "", date: "", passenger: "" };
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
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/book`,
        { ...formData }
      );

      if (res.status === 201 || res.status === 304) {
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
    <div className='book-flight'>
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

        <button type='submit' id='confirm-btn' disabled={submitting}>
          {submitting ? "Booking..." : "Confirm booking"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Payloads;