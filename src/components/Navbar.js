import React from 'react'
import logo from '../images/logo.svg';
import { pageLinks } from '../data/pageLinks';
import { socialLinks } from '../data/socialLinks';




const Navbar = () => {
    const links_data = pageLinks.map((link) => {
        const { id, href, text } = link
        return (
            <li key={id}>
                <a href={href} className='nav-link'>
                    {text}
                </a>
            </li>
        )
    });


    const socialLinks_data = socialLinks.map((link) => {
        const { id, href, fa_code, target, classname } = link
        return (
            <li key={id}>
                <a href={href} target={target} className={classname} rel='noreferrer'
                ><i className={"fab fa-" + fa_code}></i
                ></a>
            </li>
        )
    });


    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <ul className="nav-links" id="nav-links">
                    {links_data}
                </ul>

                <ul className="nav-icons">
                    {socialLinks_data}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar