import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MemberList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/members/')
            .then(response => {
                setMembers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the members!', error);
            });
    }, []);

    return (
        <div>
            <h2>Member List</h2>
            <ul>
                {members.map(member => (
                    <li key={member.id}>
                        {member.first_name} {member.last_name} - {new Date(member.birth_date).toDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MemberList;
