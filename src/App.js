import React, { Component } from 'react';
import TextInput from './components/TextInput';
import ColorName from './components/ColorName';
import Spinner from './components/Spinner';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#2ECC71',
      name: 'Shamrock',
      isFecthing: false
    }
  }

  getColorName(value) {
    const BASE_URL = "//www.thecolorapi.com/id?hex";
    let url = `${BASE_URL}=${value}&format=js`;
    this.setState({ isFecthing: true });
    fetch(url)
      .then(response => response.json())
        .then(data => {
          this.setState({ name: data.name.value })
          this.setState({ isFecthing: false })
        });
  }

  updateColor(value) {
    if (value.charAt(0) === '#') {
      if (value.length === 4 || value.length === 7) {
        this.setState({ color: value });
        this.getColorName(value.slice(1));
      }
    }    
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        <div className="App-header">
          <TextInput 
            onChange={event => {this.updateColor(event.target.value)}}
          />
          <div className="Color-name-container">
            <ColorName name={this.state.name}/>
            <Spinner spin={this.state.isFecthing}/>
          </div>          
        </div>
      </div>
    );
  }
}

export default App;
