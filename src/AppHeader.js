import React from 'react'
import './AppHeader.css'
import {NavLink} from 'react-router-dom'

function AppHeader () {
    return (
        <>
            <div className="Header-Nav">
                <div className="div">
                    
                </div>

                <div className="header-title">
                    <h1>Video Games</h1>
                </div>
                
                <div className="add-btn">
                    <NavLink to="/new-item" exact activeClassName="current" className="add">+ Add Game</NavLink>
                </div>
            </div>
        </>
    )
}

export default AppHeader