import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import './App.css';
import ListView from './ListView'
import AppHeader from './AppHeader'
import NewItemView from './NewItemView'
import EditItemView from './EditItemView'
import cuid from 'cuid';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        items: [
            { id: cuid(), name: 'Escape From Tarkov', dev: 'Battlestate Games', website: 'https://www.escapefromtarkov.com/'  },
            { id: cuid(), name: 'Rainbow Six Siege', dev: 'Ubisoft Montreal', website: 'https://rainbow6.ubisoft.com/siege/en-ca/home/index.aspx'  },
            { id: cuid(), name: 'Slay the Spire', dev: 'Mega Crit Games', website: 'https://www.megacrit.com/'  }
        ]
    }
  }

  getLocalStorage () {
    localStorage.getItem('myGames')
    localStorage.setItem('myGames', JSON.stringify(this.state.items))
  }

  addItem = item => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }));
  }

  removeItem = targetItem => {
    const items = this.state.items.filter(
      item => item.id !== targetItem.id
    )
    localStorage.clear()
    this.setState({ items: items })

    localStorage.getItem('myGames')
    localStorage.setItem('myGames', JSON.stringify(items))
        
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

  componentDidMount () {
    this.getLocalStorage()
  }

  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <AppHeader />
          <Switch>
            <Route exact path="/">
              <ListView items={this.state.items} handleRemove={this.removeItem} />
            </Route>
            <Route  path="/new-item" Component={NewItemView}>
              <NewItemView items={this.state.items} handleSubmit={this.addItem}/>
            </Route>
            <Route path="/edit-item/:itemId" Component={EditItemView} render={(props) => <EditItemView {...props} edit={this.editItem} />}>
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
