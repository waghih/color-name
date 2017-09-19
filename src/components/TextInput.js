import React from 'react';

const TextInput = ({ onChange }) => {
    return (
        <input 
            placeholder="Paste your #hex code here"
            onChange={onChange}
            maxLength="7"
        />
    );
};

export default TextInput;
