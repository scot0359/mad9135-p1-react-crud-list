import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import ListView from './ListView'
import AppHeader from './AppHeader'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        items: [
            { id: '1', name: 'Escape From Tarkov', dev: 'Battlestate Games', engine: 'Unity'  },
            { id: '2', name: 'Rainbow Six Siege', dev: 'Ubisoft Montreal', engine: 'AnvilNext'  },
            { id: '3', name: 'Slay the Spire', dev: 'Mega Crit Games', engine: 'libGDX'  }
        ]
    }
  }

  removeProfile = targetItem => {
    // const index = this.state.profiles.indexOf(targetProfile)
    const items = this.state.items.filter(
      item => item.id !== targetItem.id
    )
    this.setState({ items: items })
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route exact path="/">
            <ListView items={this.state.items} handleRemove={this.removeProfile}/>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
