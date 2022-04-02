import React from 'react'

const Input = ({ value, onChange }) => {

    return (
        <>
            <label htmlFor="job">

                <input
                    id='job'
                    className='frm__input'
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </label>
        </>
    )
}

export default Input