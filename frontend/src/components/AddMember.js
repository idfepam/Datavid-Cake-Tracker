import React, { useState } from 'react';
import axios from 'axios';

const AddMember = () => {
    const [member, setMember] = useState({
        first_name: '',
        last_name: '',
        birth_date: '',
        country: '',
        city: ''
    });

    const handleChange = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/members/', member)
            .then(response => {
                console.log('Member added:', response.data);
            })
            .catch(error => {
                console.error('There was an error adding the member!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="first_name" onChange={handleChange} placeholder="First Name" required />
            <input name="last_name" onChange={handleChange} placeholder="Last Name" required />
            <input type="date" name="birth_date" onChange={handleChange} required />
            <input name="country" onChange={handleChange} placeholder="Country" required />
            <input name="city" onChange={handleChange} placeholder="City" required />
            <button type="submit">Add Member</button>
        </form>
    );
};

export default AddMember;
