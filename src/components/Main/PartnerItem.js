import React from 'react'


const PartnerItem = ({imageURL}) => {
    return (
        <li className='partners__item'>
          <div className='partners__wrapper'>
            <div className='partners__itemContainer'>
                <div className='partners__logo'>
                    <img src={imageURL} alt='Logo'/>
                </div>
            </div>
          </div>
        </li>
    )
}

export default PartnerItem