import React from 'react'
import './ListView.css'
import ListItem from './ListItem'

class ListView extends React.Component {

    render() {
        const listViewJsx = this.props.items.map(item => (
            <ListItem key={item.id} item={item} delete={this.props.handleRemove}/>
          ))
        return (
            <div className="itemsList">
                {listViewJsx}
            </div>
        )
    }
}

export default ListView