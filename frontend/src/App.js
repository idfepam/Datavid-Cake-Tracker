import React from 'react';
import AddMember from './components/AddMember';
import MemberList from './components/MemberList';
import './App.css';  

const App = () => {
    return (
        <div className="app">
            <h1>Datavid Cake Tracker</h1>
            <AddMember />
            <MemberList />
        </div>
    );
};

export default App;
