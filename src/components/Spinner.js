import React from 'react';
import '../App.css';

const Spinner = (props) => {
    let isSpinning = props.spin;

    if(isSpinning) {
        return (
            <div className="loader"></div>
        );
    } else {
        return (<div></div>);
    }
};

export default Spinner;
