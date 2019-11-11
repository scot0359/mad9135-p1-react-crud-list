import React from 'react'
import './EditItemView.css'
import {NavLink} from 'react-router-dom'

class EditItemView extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: "",
            dev: "",
            website: ""
        }
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value})
    }

    handleDevChange = (event) => {
        this.setState({ dev: event.target.value})
    }

    handleWebsiteChange = (event) => {
        this.setState({ website: event.target.value})
    }

    handleFormEdit = event => {
        event.preventDefault()
        let obj = {
            id: this.props.match.params.itemId,
            name: this.state.name,
            dev: this.state.dev,
            website: this.state.website
        }

        this.props.edit(obj.id, obj)

        localStorage.getItem('myGames')
        localStorage.setItem('myGames', JSON.stringify(obj))
        
    }

    render () {
        return (
            <div className="newItemForm">
                <h1>
                    Edit
                </h1>
                <form className="addItem" >
                    <div className="formName">
                        <h3>
                            Name:
                        </h3>
                        <input type="text" value={this.props.name} onChange={this.handleNameChange}/>
                    </div>
                    <div className="formDev">
                        <h3>
                            Developer:
                        </h3>
                        <input type="text" value={this.props.dev} onChange={this.handleDevChange}/>
                    </div>
                    <div className="formWebsite">
                        <h3>
                            Official Website:
                        </h3>
                        <input type="text" value={this.props.website} onChange={this.handleWebsiteChange}/>
                    </div>
                    <div className="buttons">
                        <div className="submit">
                            <button type="button" className="addBtn" onClick={this.handleFormEdit}><NavLink to="/" className="addBtn" >Accept</NavLink></button>
                        </div>
                        <div className="cancel">
                            <button type="button" className="cancelBtn"><NavLink to="/" className="cancelBtn">Cancel</NavLink></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditItemView