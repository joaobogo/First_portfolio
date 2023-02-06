import React, {useState} from 'react'
import "./InputStyles.css"


function Input({ item }) {
    const [field, setField] = useState(item.value)

    const handleChange = (event) => {

        const value = event.target.value;
        item.setter(value);
        setField(value);
    }

    return (
        <div className='input'>
            <label>{item.label}</label>
            <input type={item.type} value={field} onChange={handleChange}></input>
        </div>
    )
}

export default Input