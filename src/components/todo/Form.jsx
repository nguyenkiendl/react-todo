import React from 'react'

const Form = () => {
    return (
        <div className='todo__action'>
            <form className='frm'>
                <label htmlFor="job">
                    <input
                        id='job'
                        className='frm__input'
                        value={job}
                        onChange={e => setJob(e.target.value)}
                    />
                </label>
                <div className='frm__time'>
                    <select id='todo__hours'>
                        <option value='00'>00</option>
                    </select>
                    <span>:</span>
                    <select id='todo__minutes'>
                        <option value='00'>00</option>
                    </select>
                </div>
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Form