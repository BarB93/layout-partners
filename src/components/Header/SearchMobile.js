import React from 'react'
import SearchIcon from './Icons/SearchIcon'

const SearchMobile = () => {
    return (
        <form className='searchMobile'>
            <label className='searchMobile__label'>
                <div className='searchMobile__icon'>
                    <SearchIcon />
                </div>
                <input className='searchMobile__input' type='text' placeholder='Найти...'/>
            </label>
        </form>
    )
}

export default SearchMobile