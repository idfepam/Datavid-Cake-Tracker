import React from 'react';
import AddMember from './components/AddMember';
import MemberList from './components/MemberList';

const App = () => {
    return (
        <div>
            <h1>Datavid Cake Tracker</h1>
            <AddMember />
            <MemberList />
        </div>
    );
};

export default App;
