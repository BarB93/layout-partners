import React from 'react'
import avatar from '../../assets/avatar.png'

const PersonalArea = ({name}) => {
    return (
        <div className='personal'>
            <div className='personal__name'>{name}</div>
            <div className='personal__avatar'>
                <img src={avatar} alt='avatar'/>
            </div>
        </div>
    )
}

export default PersonalArea