import React from 'react'
import './header.scss'
// import logo from '../../assets/logos.jpg'
import { BsYoutube } from "react-icons/bs";


const Header = ({search, setSearch}) => {
    return (
        <header>
            <nav className='nav'>
                <div className="nav__left">
                    <h3>You Tube</h3>
                </div>
                <form action="">
                    <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                    <button>search</button>
                </form>
                <div className="nav__right">
                    <p>Lorem, ipsum.</p>
                </div>
            </nav>
        </header>
    )
}

export default Header