import React from 'react';

import './Switch.css';

const Switch = () => {
    return (
       <div className="switch__ctnr">
           <p>Annually</p>
        <input 
            className="switch-checkbox"
            id={`switch-new`}
            type="checkbox"
        />
        <label 
            className="switch-label"
            htmlFor={`switch-new`}
        >
            <span className={`switch-button`} />
        </label>
        <p>Monthly</p>
       </div>
    )
}

export default Switch;
