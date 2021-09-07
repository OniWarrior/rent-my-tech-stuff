import React from 'react'
import {Link} from 'react-router-dom'

const Navigation=()=>{
    return(
        <nav className="navigation">
            <Link to='/' id="home-image" ></Link>
            <Link to='/Login' id='login-image'></Link>
            <Link to='/Register'id='signup-image'></Link>
        </nav>
    )
}

export default Navigation