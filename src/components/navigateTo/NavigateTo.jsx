import React, { useRef } from 'react';

import { useHistory } from 'react-router-dom';

import { SECTIONS } from '../../urls';

import './navigateTo.css';

const NavigateTo = () => {
    const history = useHistory()

    const sectionRef = useRef()

    const onGoToSectionClick = () => {
        history.push(`/${sectionRef.current.value}`)
    }

    return (
        <div className='navigateTo'>
            <label htmlFor="sections">
                Section
                <select name="" id="sections" ref={sectionRef}>
                    {
                        SECTIONS.map((section,i) => <option value={section} key={i}>{section}</option>)
                    }
                </select>
            </label>
            <button onClick={onGoToSectionClick}>Go</button>
        </div>
    )
}

export default NavigateTo