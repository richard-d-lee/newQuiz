import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Country from './Country.js';
import quiz from './quiz.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'Afghanistan',
      selected: false
    }
    console.log(quiz);
    this.dropClick = this.dropClick.bind(this)
  }
  itemPicker() {
    if (this.state.country.length > 1) {
      if (quiz[this.state.country].questions[0].length > 1) {
        return <Country country={quiz[this.state.country]} name={this.state.country}></Country>
      }
    }

  }
  dropClick(oneCountry) {
    this.setState({
      country: oneCountry
    })
  }
  render() {
    let myFunc = this.dropClick;
    return (
      <div className="App" >
        <div className="selection">
          <h3 className="selec-title">Select a Country</h3>
          <Dropdown className="selec-button">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Countries
            </Dropdown.Toggle>

            <Dropdown.Menu className=''>
              {Object.keys(quiz).map(function (key, index) {
                return (<Dropdown.Item onClick={() => {
                  myFunc(key)
                }}>{key}</Dropdown.Item>)
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {this.itemPicker()}
      </div>
    );
  }
}

export default App;
