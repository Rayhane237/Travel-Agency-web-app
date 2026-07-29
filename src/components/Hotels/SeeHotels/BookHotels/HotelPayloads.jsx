import React, { useState } from 'react';

import { useNavigate, useLocation } from "react-router-dom";
import api from "../../../../API/axios"
import { ToastContainer, toast } from "react-toastify";
import Footer from "../../../Footer/Footer"
import Nav from "../../../nav/nav"

// Same pattern as flight Payloads.jsx: drive inputs from one array.
const fields = [
  { name: "hotelName", label: "Hotel", type: "text", placeholder: "Hotel name" },
  { name: "checkIn", label: "Check-in", type: "date", placeholder: "" },
  { name: "checkOut", label: "Check-out", type: "date", placeholder: "" },
  { name: "guestName", label: "Guest", type: "text", placeholder: "Guest name" },
];

const HotelPayloads = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // If the person arrived here from the Hotels dashboard by clicking
  // "Book hotel" on a specific card, pre-fill the hotel name from it.
  const preselectedHotel = location.state?.hotel?.name || "";

  const [formData, setFormData] = useState({
    hotelName: preselectedHotel,
    checkIn: "",
    checkOut: "",
    guestName: ""
  });

  const [errData, setErrData] = useState({
    hotelName: "",
    checkIn: "",
    checkOut: "",
    guestName: ""
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

    const errors = { hotelName: "", checkIn: "", checkOut: "", guestName: "" };
    let isValid = true;

    fields.forEach(({ name }) => {
      if (!formData[name]) {
        errors[name] = "This field is required";
        isValid = false;
      }
    });

    if (formData.checkIn && formData.checkOut && formData.checkOut <= formData.checkIn) {
      errors.checkOut = "Check-out must be after check-in";
      isValid = false;
    }

    setErrData(errors);

    if (!isValid) {
      toast.error("Please fill all required fields");
      return;
    }

    setSubmitting(true);

    try {
      const res = await api.post("/bookHotel", { ...formData });

      if (res.status === 201) {
        toast.success("Hotel booked successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored"
        });

        setTimeout(() => {
          navigate("/Hotels");
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
          <h1>Let's find your stay</h1>
          <p>Fill in your stay details below and we'll take care of the rest.</p>
        </div>

        <div className='book-flight'>
          <form className='flight-form' onSubmit={handleSubmit} noValidate>

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
          <ToastContainer position="top-center" style={{ top: '80px' }} />
        </div>
      </div>

      <div className='compo-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default HotelPayloads;