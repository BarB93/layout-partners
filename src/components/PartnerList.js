import React from 'react'

import PartnerItem from './PartnerItem'

import partner1 from '../assets/partners/1.png'
import partner2 from '../assets/partners/2.png'
import partner3 from '../assets/partners/3.png'
import partner4 from '../assets/partners/4.png'
import partner5 from '../assets/partners/5.png'
import partner6 from '../assets/partners/6.png'
import partner7 from '../assets/partners/7.png'

const images = [partner1, partner2, partner3,
    partner4, partner5, partner6, partner7]

const PartnerList = () => {
    const partnerList = images.map(i => <PartnerItem key={i} imageURL={i}/>)

    return (
        <ul className='partners'>
            {partnerList}
        </ul>
    )
}

export default PartnerList