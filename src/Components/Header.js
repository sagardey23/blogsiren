import React from 'react';
import { Link } from 'react-router-dom';
const Header  = () => {
    return(
        <>
        <div className='header-main'>
            <h1 className='the-text'>The</h1>
            <h1 className='siren-text'>Siren</h1>
        </div>
 
        <div className='header-ul-parent'>
            <ul type='none' className='header-ul'>
                <li><Link to='./home' className='header-li-items'>Home</Link></li>
                <li><Link to='./bollywood' className='header-li-items'>Bollywood</Link></li>
                <li><Link to='./technology' className='header-li-items'>Technology</Link></li>
                <li><Link to='./hollywood' className='header-li-items'>Hollywood</Link></li>
                <li><Link to='./fitness' className='header-li-items'>Fitness</Link></li>
                <li><Link to='./food' className='header-li-items'>Food</Link></li>


            </ul>
        </div>
        </>
    )
}
export default Header