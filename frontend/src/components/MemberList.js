import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const MemberList = () => {
    const [members, setMembers] = useState([]);
    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = () => {
        axios.get('http://localhost:8000/api/members/')
            .then(response => {
                setMembers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the members!', error);
            });
    };

    const fetchSortedMembers = () => {
        axios.get('http://localhost:8000/api/members/sorted_by_birthday/')
            .then(response => {
                setMembers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the sorted members!', error);
            });
    };

    const handleSortToggle = () => {
        if (sorted) {
            fetchMembers();
        } else {
            fetchSortedMembers();
        }
        setSorted(!sorted);
    };

    return (
        <div className="member-list">
            <h2>Member List</h2>
            <button onClick={handleSortToggle} className="btn">
                {sorted ? 'Unsort by Birthday' : 'Sort by Closest Birthday'}
            </button>
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
