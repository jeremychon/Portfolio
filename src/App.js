import React from 'react';
import Header from './Header'
import Homepage from './Homepage'
import AboutMe from './AboutMe'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      toHome: true,
      toAbout: false,
      toWork: false,
      toContact: false
    }

    this.toHome = React.createRef()
    this.toAbout = React.createRef()
    this.toWork = React.createRef()
    this.toContact = React.createRef()
  }

  scrollToPage = (page) => {
    if (page === 'home') {
      window.scrollTo(0, this.toHome.current.offsetTop)
    }

    if (page === 'about') {
      window.scrollTo(0, this.toAbout.current.offsetTop)
    }

    if (page === 'work') {
      window.scrollTo(0, this.toWork.current.offsetTop)
    }

    if (page === 'contact') {
      window.scrollTo(0, this.toContact.current.offsetTop)
    }
  }

  render() {
    return (
      <div className="App">
        <Header scrollToPage={this.scrollToPage}/>
        <Homepage toHome={this.toHome}/>
        <AboutMe toAbout={this.toAbout}/>
        <Work toWork={this.toWork}/>
        <Contact toContact={this.toContact}/>
        <Footer />
      </div>
    );
  }
}

export default App;
