import React, {
  Component
} from "react";
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import "./App.css";

class App extends Component {
  state = {
    username: 'variable'
  }

  inputChangedHandler = (event) => {
    this.setState({
      username: [
        event.target.value
      ]
    })
  }

  render () {
    const style = {
      padding: '16px'
    }

    return (
      <div className="App" >
        <div style={style}>
          <UserInput changed={this.inputChangedHandler} initialValue={this.state.username} />
          <UserOutput username={this.state.username}>It's a beautiful JS library.</UserOutput>
          <UserOutput username={this.state.username}>It can be used to build mobile apps with the aid of React Native.</UserOutput>
        </div>
      </div >
    );
  }
}

export default App;