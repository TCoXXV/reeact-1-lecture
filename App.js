import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: 'sexyback',
      picUrl: 'https://http.cat/404',
      friends: [{ name: 'T$', picUrl: 'https://http.cat/404'}]
    };
    this.updateName = this.updateName.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
    this.addFriend = this.addFriend.bind(this);
    // this.clearNames = this.clearNames.bind(this);
  }

  updateUrl(event){
    this.setState({picUrl: event.target.value})
  }

  updateName(event){
    // console.log(event.target.value)
    // this.setState({name: event.target.value})
  };

  addFriend(event){
    const newFriend = { name: this.state.name, picUrl: this.state.picUrl };
    // DO NOT MUTATE STATE DIRECTLY!!!!
    // this.state.friends.push()
    const friendsCopy = this.state.friends.slice();
    friendsCopy.push(newFriend);
    this.setState({ friends: friendsCopy});
    this.setState({ name: '', picUrl: '' });
  }
  // clearNames(event){
  //   this.setState({ name: '', pic: ''})
  // }
  
  render() {
    // const name = this.state.name;
    // const picUrl = this.state.picUrl;
    const {name, picUrl, friends} = this.state;
    // console.log(this.state)

    return (
      <div>
        <div>
          Name: <input value={name} onChange={event => this.setState({name: event.target.value})}/>
          {name}
        </div>
        <div>Picture URL: <input value={picUrl} onChange={this.updateUrl}/>
        {picUrl}
          </div>
          <button onClick={this.addFriend}>Add Friend</button>
          <button onClick={this.clearNames}>Clear Names</button>
        <div>Friends: {friends.map(friend => {
          return <div>
            Name: {friend.name}
            Picture: <img className='hi' src={friend.picUrl} />
          </div>
        })}
        </div>
      </div>
    );
  }
}

export default App;

// export const somethingElse = 'awesome';