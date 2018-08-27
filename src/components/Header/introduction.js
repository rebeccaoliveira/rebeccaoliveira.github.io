import React from 'react'
import Link from 'gatsby-link'


class Introduction extends React.Component{
  constructor (props){
      super (props)
      this.state =  this.handleAddFriend.bind(this)

  }

  handleAddFriend() {
    this.setState (prevState => ({
      friendsList: [ lala,lana, lulu]
    }));
  }

  render()
    return(
      <div>
        <button onClick={this.handleAddFriend}/>
      </div>
    )
}
ReactDOM.render(
  <App />,
  document.getElementById("app")
)
