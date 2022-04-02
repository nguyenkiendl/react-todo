import React from 'react'

const Select = ({ options, value, onChange }) => {

    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            {
                options.map((option, index) => {
                    return (
                        <option key={index} value={option}>{option}</option>
                    )
                })
            }
        </select>
    )
}

export default Select