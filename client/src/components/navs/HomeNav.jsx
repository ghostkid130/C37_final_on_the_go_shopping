import React from 'react'

import CartButton from '../buttons/CartButton'

import './nav.css'

const HomeNav = ({history}) => {
    return (
        <div className="home-nav"> 
            <h1>On-the-Go</h1>
            <CartButton history={history}/>
        </div>
    )
}

export default HomeNav
