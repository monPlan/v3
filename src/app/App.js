import React, { Component } from 'react'
import './App.css'
import IntroCard from '../components/containers/IntroContainer'
import Feedback from '../components/containers/Feedback'
import Footer from '../components/containers/Footer'

import Status from '../components/StatusPopover'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./images/logo_white.svg" width={200} alt="logo" />
          <div style={{ justifySelf: 'flex-end', flex: 1 }}>
            <Status />
          </div>
        </header>
        <div className="App-intro">
          <div className="Card-container">
            <IntroCard />
          </div>
          <div className="Card-container">
            <Feedback />
          </div>
          <div className="Card-container">
            <IntroCard />
          </div>
        </div>
        <div className="App-bottom" />
        <Footer />
      </div>
    )
  }
}

export default App