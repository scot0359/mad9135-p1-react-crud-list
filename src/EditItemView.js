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
        
        
        let games = localStorage.getItem('myGames')
        let arr
        if(games){
            arr = JSON.parse(games)
            arr.push(obj)
            arr = Array.from(new Set(arr))
            localStorage.setItem('myGames', JSON.stringify(arr))
        }else{
            arr = []
            arr.push(obj)
            localStorage.setItem('myGames', JSON.stringify(arr))
        }
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
                    <div className="submit">
                        <button type="button"  onClick={this.handleFormEdit}><NavLink to="/" >Add</NavLink></button>
                    </div>
                    <div className="cancel">
                        <button type="button" ><NavLink to="/" >Cancel</NavLink></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditItemView