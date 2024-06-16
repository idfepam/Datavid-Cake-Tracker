import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';  

const AddMember = () => {
    const [member, setMember] = useState({
        first_name: '',
        last_name: '',
        birth_date: '',
        country: '',
        city: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/members/', member)
            .then(response => {
                console.log('Member added:', response.data);
                setErrors({}); // Clear errors on success
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    setErrors(error.response.data);
                } else {
                    setErrors({ non_field_errors: 'An unexpected error occurred' });
                }
            });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
                <input name="first_name" onChange={handleChange} placeholder="First Name" value={member.first_name} required />
                {errors.first_name && <span className="error">{errors.first_name}</span>}
            </div>
            <div className="form-group">
                <input name="last_name" onChange={handleChange} placeholder="Last Name" value={member.last_name} required />
                {errors.last_name && <span className="error">{errors.last_name}</span>}
            </div>
            <div className="form-group">
                <input type="date" name="birth_date" onChange={handleChange} value={member.birth_date} required />
                {errors.birth_date && <span className="error">{errors.birth_date}</span>}
            </div>
            <div className="form-group">
                <input name="country" onChange={handleChange} placeholder="Country" value={member.country} required />
                {errors.country && <span className="error">{errors.country}</span>}
            </div>
            <div className="form-group">
                <input name="city" onChange={handleChange} placeholder="City" value={member.city} required />
                {errors.city && <span className="error">{errors.city}</span>}
            </div>
            <button type="submit" className="btn">Add Member</button>
            {errors.non_field_errors && <div className="error">{errors.non_field_errors}</div>}
        </form>
    );
};

export default AddMember;
