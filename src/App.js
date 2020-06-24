import React, { Component } from 'react'
import './App.css'
import ricky from './images/ricky.jpg'
import rio from './images/rio.jpg'
import soni from './images/soni.jpg'

import Navbar from './navbar'
import Routes from './routes'
class App extends Component {
  static defaultProps = {
    myPets: [
      {
        name: "Ricky",
        age: 5,
        src: ricky,
        facts: [
          "Ricky loves to bark",
          "Ricky loves to eat",
          "Ricky loves to Smoke"
        ]
      },
      {
        name: "Soni",
        age: 3,
        src: soni,
        facts: [
          "Ricky loves to sing",
          "Ricky loves to cuddle",
          "Ricky loves to fight"
        ]
      },
      {
        name: "Rio",
        age: 1,
        src: rio,
        facts: [
          "Ricky loves to love",
          "Ricky loves to eat",
          "Ricky loves to sleep"
        ]
      }
    ]
  }


  render() {


    return (
      <div>
        <Navbar pets={this.props.myPets} />
        <div className="container">
          <Routes myPets={this.props.myPets} />
        </div>
    
      </div>
    )
  }
}
export default App;