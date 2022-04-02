import React, { useState } from 'react'
import { range } from '../../helper/Helper'
import Input from './Input';
import Select from './Select';

const Header = ({ onSubmit, total }) => {

    const [job, setJob] = useState('')
    const [hour, setHour] = useState('00')
    const [minute, setMinute] = useState('00')


    const [control, setControl] = useState(false);
    const handleClick = () => {
        if (job === '')
            return;
        const item = {
            job: job,
            hour: hour,
            minute: minute,
            complete: false,
        }
        onSubmit(item)
        setJob('')
    }

    const handleJobChange = (job) => {
        setJob(job)
    }
    const handleHoursChange = (hour) => {
        setHour(hour)
    }
    const handleMinutesChange = (minute) => {
        setMinute(minute)
    }

    return (
        <>
            <header>
                <h3>Monday <span><strong className='todo__total'>{total}</strong> Tasks</span></h3>
                <p>28-03-2022</p>
                <button className='btn-control' onClick={() => setControl(!control)}>+</button>
            </header>
            <div className={['todo__action', control ? 'show' : ''].join(' ')}>
                <div className='frm'>
                    <Input value={job} onChange={handleJobChange} />
                    <div className='frm__time'>
                        <Select
                            options={range(0, 23)}
                            value={hour}
                            onChange={handleHoursChange}
                        />
                        <span>:</span>
                        <Select
                            options={range(0, 59)}
                            value={minute}
                            onChange={handleMinutesChange}
                        />
                    </div>
                    <button onClick={handleClick}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Header