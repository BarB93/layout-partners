import React from 'react'

import PartnerItem from './PartnerItem'

import partner1 from '../../assets/images/partners/1.png'
import partner2 from '../../assets/images/partners/2.png'
import partner3 from '../../assets/images/partners/3.png'
import partner4 from '../../assets/images/partners/4.png'
import partner5 from '../../assets/images/partners/5.png'
import partner6 from '../../assets/images/partners/6.png'
import partner7 from '../../assets/images/partners/7.png'

const images = [partner1, partner2, partner3,
    partner4, partner5, partner6, partner7]

const PartnerList = () => {
    const partnerList = images.map(i => <PartnerItem key={i} imageURL={i}/>)

    return (
        <ul className='partners'>
            {partnerList}
            {/*<PartnerItem imageURL={'https://via.placeholder.com/150x50'} />*/}
            {/*<PartnerItem imageURL={'https://via.placeholder.com/50x150'} />*/}
        </ul>
    )
}

export default PartnerList