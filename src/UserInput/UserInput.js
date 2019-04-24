import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
    <div className="UserInput">
        {console.log("getal1: "+props.getalx)}
        {console.log("getal2: "+props.getaly)}
        {console.log("som: "+props.sum)}
        <label>Getal 1: </label>
        <input type="text" onChange={props.changed1} value={props.getalx} />
        <br/>
        <label>Getal 2: </label>
        <input type="text" onChange={props.changed2} value={props.getaly} />
    </div>
    );
}

export default UserInput;
