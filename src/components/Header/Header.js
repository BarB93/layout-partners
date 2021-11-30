import React from 'react'
import Logo from './Logo'
import Search from './Search'
import PersonalArea from './PersonalArea'
import SearchMobile from './SearchMobile'
import PersonalAreaIcon from './Icons/PersonalAreaIcon'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__container'>
                    <div className='header__left'>
                        <div className='header__logo'>
                            <Logo />
                        </div>
                        <div className='header__search'>
                            <Search />
                        </div>
                    </div>
                    <div className='header__right'>
                        <div className='header__personal'>
                            <PersonalArea name='Константин'/>
                            <PersonalAreaIcon />
                        </div>
                    </div>
                </div>
            </div>
            <SearchMobile />
        </header>
    )
}

export default Header