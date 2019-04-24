import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    const sum = parseFloat(props.getalx) + parseFloat(props.getaly);
    return (
    <div className="UserOutput">
        <p>Sum:</p>
        <p>{sum}</p>
    </div>
    );
}

export default UserOutput;
