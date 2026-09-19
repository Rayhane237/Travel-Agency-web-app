import React, { useState, useEffect } from 'react'
import api from '../../../../API/axios'

import './Team.css'

const Team = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/employees")
      .then((res) => setEmployees(res.data.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <div className='team-container'>
      <br />
      <div className='team-header'>
        <h2 style={{ color: "black" }}>Meet our team</h2>
        <h3 style={{ color: "rgb(36, 113, 120)" }}>Meet the people who help keep Phnes.Travels running</h3>
      </div>
      <br />
      <div className='team-section'>
        {employees.map((employee) => (
          <div className='team' key={employee._id}>
            <img src={employee.image} className='team-img' alt="" />
            <h3>{employee.name}</h3>
            <h4>{employee.job}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team