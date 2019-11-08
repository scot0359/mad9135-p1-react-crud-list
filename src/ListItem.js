import React from 'react'
import './ListItem.css'

function ListItem (props) {
        return (
                <div className="items-card">
                    <div className="item-info">
                        <h2>
                            {props.item.name}
                        </h2>

                        <div className="item-info2">
                            <h4>
                                {props.item.dev}
                            </h4>

                            <h4>
                                {props.item.engine}
                            </h4>
                        </div>
                    </div>
                    
                    <div className="item-nav">
                            <button className="editBtn">Edit</button>
                            <div className="divider"/>
                            <button className="deleteBtn" onClick={() => props.delete(props.item)}>Delete</button>
                    </div>
                        
                </div>
        )
    }


export default ListItem