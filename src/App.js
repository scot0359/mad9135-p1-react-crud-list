import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import ListView from './ListView'
import AppHeader from './AppHeader'
import NewItemView from './NewItemView'
import EditItemView from './EditItemView'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        items: [
            // { id: Math.random(), name: 'Escape From Tarkov', dev: 'Battlestate Games', website: 'https://www.escapefromtarkov.com/'  },
            // { id: Math.random(), name: 'Rainbow Six Siege', dev: 'Ubisoft Montreal', website: 'https://rainbow6.ubisoft.com/siege/en-ca/home/index.aspx'  },
            // { id: Math.random(), name: 'Slay the Spire', dev: 'Mega Crit Games', website: 'https://www.megacrit.com/'  }

        ]
    }
  }

  setLocalStorage () {

    for (let i = 0; i < this.state.items.length; i++) {
      const element = this.state.items[i];

      let games = localStorage.getItem('myGames')
        let arr
        if(games){
            arr = JSON.parse(games)
            arr.push(element[i])
            arr = Array.from(new Set(arr))
            localStorage.setItem('myGames', JSON.stringify(arr))
        }else{
            arr = []
            arr.push(element)
            localStorage.setItem('myGames', JSON.stringify(arr))
        }
      
    }
  }

  addItem = item => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }));
  }

  removeProfile = targetItem => {
    const items = this.state.items.filter(
      item => item.id !== targetItem.id
    )
    this.setState({ items: items })

    localStorage.clear()

    let games = localStorage.getItem('myGames')
    let arr
    if(games){
      arr = JSON.parse(games)
      arr.push(this.state.items)
      arr = Array.from(new Set(arr))
      localStorage.setItem('myGames', JSON.stringify(arr))
  }else{
      arr = []
      arr.push(this.state.items)
      localStorage.setItem('myGames', JSON.stringify(arr))
  }
        
  }

  editItem = (id, item) => {
    let newItems = this.state.items.filter(item => {
      return item.id != id
    })
    newItems.push(item)
    this.setState({
      items: newItems
    })
  }

  componentDidMount() {
    this.setLocalStorage();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppHeader />
          <Switch>
            <Route exact path="/">
              <ListView items={this.state.items} handleRemove={this.removeProfile} />
            </Route>
            <Route  path="/new-item" Component={NewItemView}>
              <NewItemView items={this.state.items} handleSubmit={this.addItem}/>
            </Route>
            <Route path="/edit-item/:itemId" Component={EditItemView} render={(props) => <EditItemView {...props} edit={this.editItem} />}>
            
              {/* <EditItemView items={this.state.items} /> */}
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
