import React from 'react'
import './ListItem.css'
import {NavLink} from 'react-router-dom'

function ListItem (props) {
        return (
                <div className="items-card">
                    <div className="item-info">
                        <h2>
                            {props.item.name}
                        </h2>

                        <div className="item-info2">
                            <h4>
                                Created by {props.item.dev}
                            </h4>
                            <div className="divider2"/>
                            <h4>
                                <a href={props.item.website} target="_blank" rel="noopener noreferrer">
                                    Official Website
                                </a>
                            </h4>
                        </div>
                    </div>
                    
                    <div className="item-nav">
                    <NavLink to={`/edit-item/${props.item.id}`} activeClassName="current" className="add"><button className="editBtn">Edit</button></NavLink>
                        <div className="divider"/>
                        <button className="deleteBtn" onClick={() => props.delete(props.item)}>Delete</button>
                    </div>
                        
                </div>
        )
    }


export default ListItem