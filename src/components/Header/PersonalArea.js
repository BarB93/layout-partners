import React from 'react'
import avatar from '../../assets/images/avatar.png'

const PersonalArea = ({name}) => {
    return (
        <div className='personal'>
            <a href='/#' className='personal__name'>{name}</a>
            <a href='/#' className='personal__avatar'>
                <img src={avatar} alt='avatar'/>
            </a>
        </div>
    )
}

export default PersonalArea