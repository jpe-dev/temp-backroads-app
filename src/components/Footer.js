import React from 'react'

import { pageLinks } from '../data/pageLinks';
import { socialLinks } from '../data/socialLinks';

const Footer = () => {
    const links_data = pageLinks.map((link) => {
        const { id, href, text } = link
        return (
            <li key={id}>
                <a href={href} className='footer-link'>
                    {text}
                </a>
            </li>
        )
    });


    const socialLinks_data = socialLinks.map((link) => {
        const { id, href, fa_code, target } = link
        return (
            <li key={id}>
                <a href={href} target={target} className='footer-icon'
                ><i className={"fab fa-" + fa_code}></i
                ></a>
            </li>
        )
    });

    return (
        <footer className="section footer">
            <ul className="footer-links">
                {links_data}
            </ul>
            <ul className="footer-icons">
                {socialLinks_data}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer