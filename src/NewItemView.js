import React from 'react'
import './NewItemView.css'
import {NavLink} from 'react-router-dom'

class NewItemView extends React.Component {

    state = {
        name: "",
        dev: "",
        website: ""
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

    handleFormSubmit = event => {
        event.preventDefault()
        let obj = {
            id: Math.random(),
            name: this.state.name,
            dev: this.state.dev,
            website: this.state.website
        }

        
        this.props.handleSubmit(obj)
        this.setState({name: '', dev: '', website: ''})
        
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
                    Add a new video game
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
                        <button type="button" onClick={this.handleFormSubmit}><NavLink to="/" >Add</NavLink></button>
                    </div>
                    <div className="cancel">
                        <button type="button" ><NavLink to="/" >Cancel</NavLink></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewItemView