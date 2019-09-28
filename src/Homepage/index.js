import React from 'react';
import ScrollReveal from 'scrollreveal'
import Particles from 'react-particles-js'
import Scroll from 'react-scroll'
import { Icon } from 'semantic-ui-react'

const Events     = Scroll.Events;
const scroller   = Scroll.scroller;
const scrollSpy  = Scroll.scrollSpy;

class Homepage extends React.Component {

	componentDidMount() {
		ScrollReveal().reveal('.homepage-title', {delay: 800, duration: 5000})

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
		if (page === 'about') {
			scroller.scrollTo('About', {
				duration: 1500,
				delay: 100,
				smooth: true
			})
		}
	}


	render() {
		return (
			<div name='Home'>
				<div className='homepage-title'>
					<div>Hello. My name is</div>
					<div id='name'>Jeremy Chon</div>
					<div>Full Stack Developer. Sports Enthusiast. Casual Artist.</div>
				</div>
				<div className='homepage-learn'>
					<div className='homepage-learn-text'>Click to learn more</div>
					<Icon 
						link 
						size='big' 
						name='angle down' 
						style={{width: '100%'}}
						onClick={this.props.scrollToPage.bind(null, 'about')}
					/>
				</div>
				<Particles 
					className='homepage' 
					params={{
						    "particles": {
						        "number": {
						            "value": 75
						        },
						        "size": {
						            "value": 3
						        }
						    },
						    "interactivity": {
						        "events": {
						            "onhover": {
						                "enable": true,
						                "mode": "repulse"
						            }
						        }
						    }
						}}
				/>
			</div>
		)
	}
}


export default Homepage