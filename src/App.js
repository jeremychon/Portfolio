import React from 'react';
import Header from './Header'
import Homepage from './Homepage'
import AboutMe from './AboutMe'
import MyWork from './MyWork'
import Contact from './Contact'
import Scroll from 'react-scroll'
import { Sticky } from 'semantic-ui-react'
import './App.css';


const Events     = Scroll.Events;
const scroller   = Scroll.scroller;
const scrollSpy  = Scroll.scrollSpy;

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
    this.site = React.createRef()
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
      console.log('begin', arguments);
    })

    Events.scrollEvent.register('end', () => {
      console.log('end', arguments);
    })

    scrollSpy.update()
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToPage = (page) => {
    if (page === 'home') {
      scroller.scrollTo('Home', {
        duration: 1500,
        delay: 100,
        smooth: true
      })
    }

    if (page === 'about') {
      scroller.scrollTo('About', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -65,
      })
    }

    if (page === 'work') {
      scroller.scrollTo('Work', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -100
      })
    }

    if (page === 'contact') {
      scroller.scrollTo('Contact', {
        duration: 2000,
        delay: 100,
        smooth: true
      })
    }
  }


  render() {
    return (
      <div className="App">
        <Homepage toHome={this.toHome} scrollToPage={this.scrollToPage}/>
        <div ref={this.site}>
          <Sticky context={this.site}>
            <Header scrollToPage={this.scrollToPage}/>
          </Sticky>
          <AboutMe toAbout={this.toAbout}/>
          <MyWork toWork={this.toWork}/>
          <Contact toContact={this.toContact}/>
        </div>
      </div>
    );
  }
}

export default App;
