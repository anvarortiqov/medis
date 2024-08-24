import React, { Fragment, useState } from 'react';
import "./style.css";

const WorkingDays = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba']

const WorkingTime = () => {
    const [DayCounter, setDayCounter] = useState(1);

    const dayItem = WorkingDays.slice(0, DayCounter).map((item, index) => (<Fragment key={index}>
        <label htmlFor="">
            <span>{item}</span>
        </label>
    </Fragment>));


    return (
        <div className='working-time'>
            {dayItem}
        </div>
    )
}

export default WorkingTime