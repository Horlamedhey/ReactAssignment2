import React, {
  Component
} from "react";
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import "./App.css";

class App extends Component {
  state = {
    stringValue: '',
    stringlength: 0
  }

  inputChangedHandler = (event) => {
    this.setState({
      stringValue: event.target.value,
      stringlength: event.target.value.length
    })
  }

  deleteCharHandler = (event, index) => {
    const chars = [...this.state.stringValue]
    chars.splice(index, 1)
    this.setState({
      stringValue: chars.join(''),
      stringlength: chars.join('').length
    })
  }

  render () {
    const chars = [...this.state.stringValue]
    const char = chars.map((letter, index) => <CharComponent click={(event) => this.deleteCharHandler(event, index)} key={index} char={letter} />)

    const style = {
      padding: '16px'
    }

    return (
      <div className="App" >
        <div style={style}>
          <input type="text" onChange={this.inputChangedHandler} value={this.state.stringValue} />
          <p>{this.state.stringlength}</p>
          <ValidationComponent length={this.state.stringlength} />
          {char}
        </div>
      </div >
    );
  }
}

export default App;