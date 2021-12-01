import React from 'react'
import PartnerList from './PartnerList'

const Main = () => {
    return (
        <main className='main'>
            <div className='container'>
                <h1 className='main__header'>Наши партнёры</h1>
                <div className='main__partners'>
                    <PartnerList />
                </div>
            </div>
        </main>
    )
}

export default Main