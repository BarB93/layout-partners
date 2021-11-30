import React from 'react'
import SearchIcon from './Icons/SearchIcon'

const Search = () => {
    return (
        <form className='search'>
            <div className='search__container'>
              <label>
                <div className='search__icon'>
                  <SearchIcon />
                </div>
                <input className='search__input' type='text' placeholder='Найти...'/>
              </label>
            </div>
        </form>
    )
}

export default Search