import React from 'react'
import { Sticky, Menu } from 'semantic-ui-react'
import Projects from './Projects'
import Scroll from 'react-scroll'
import ScrollReveal from 'scrollreveal'

const Events     = Scroll.Events;
const scroller   = Scroll.scroller;
const scrollSpy  = Scroll.scrollSpy;


class MyWork extends React.Component {
	constructor() {
		super()

		this.state = {
			activeItem: 'Tamagotchi'
		}

		this.projectsRef = React.createRef()
	}

	componentDidMount() {
		Events.scrollEvent.register('begin', () => {
		  console.log('begin', arguments);
		})

		Events.scrollEvent.register('end', () => {
		  console.log('end', arguments);
		})

		scrollSpy.update()

		ScrollReveal().reveal('.work-project', {duration: 1000, interval: 200})
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}


	handleItemClick = (e, {name}) => {
		this.setState({
			activeItem: name
		})

		if (name === 'Tamagotchi') {
	      scroller.scrollTo('Tamagotchi', {
	        duration: 1500,
	        delay: 100,
	        smooth: true,
	        offset: -220
	      })
	    }

	    if (name === 'Maze Game') {
	      scroller.scrollTo('Maze Game', {
	        duration: 1500,
	        delay: 100,
	        smooth: true,
	        offset: -100
	      })
	    }

	    if (name === 'Flight Delay') {
	      scroller.scrollTo('Flight Delay', {
	        duration: 1500,
	        delay: 100,
	        smooth: true,
	        offset: -100
	      })
	    }

	    if (name === 'Weight Mate') {
	      scroller.scrollTo('Weight Mate', {
	        duration: 1500,
	        delay: 100,
	        smooth: true,
	        offset: -100
	      })
	    }
	}


	render() {
		const { activeItem } = this.state
		console.log(this.state, '<--- state in work');

		return (
			<div className='work' name='Work'>
				<h1>Projects</h1>
				<div className='work-projects'>
					<div className='work-menu-container'>
						<Sticky offset={100} context={this.projectsRef}>
							<Menu pointing secondary vertical className='work-menu'>
								<Menu.Item
									className='work-project'
									name='Tamagotchi'
									active={activeItem === 'Tamagotchi'}
									onClick={this.handleItemClick}
								/>
								<Menu.Item
									className='work-project'
									name='Maze Game'
									active={activeItem === 'Maze Game'}
									onClick={this.handleItemClick}
								/>
								<Menu.Item
									className='work-project'
									name='Flight Delay'
									active={activeItem === 'Flight Delay'}
									onClick={this.handleItemClick}
								/>
								<Menu.Item
									className='work-project'
									name='Weight Mate'
									active={activeItem === 'Weight Mate'}
									onClick={this.handleItemClick}
								/>
							</Menu>
						</Sticky>
					</div>
					<Projects activeItem={this.state.activeItem} projectsRef={this.projectsRef}/>
				</div>
			</div>
		)
	}
}



export default MyWork