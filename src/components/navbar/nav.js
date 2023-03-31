import '../navbar/nav.css'
import React from 'react';

const Navbar = () => {
    return (
        <div className='header'>
            <h3>REST COUNTRY</h3> 
            <nav>
                <a href='#about' className='active-nav' active>About</a>
                <a href='#details'>Details</a>
                <a href='#contact'>Contact</a>
            </nav>
        </div>
    );
};

export default Navbar;