import React from 'react'
import { Menu, Sticky } from 'semantic-ui-react'
import Projects from './Projects'


class MyWork extends React.Component {
	constructor() {
		super()

		this.state = {
			activeItem: 'Tamagotchi'
		}

		this.toTama = React.createRef()
		this.toMaze = React.createRef()
		this.toFlight = React.createRef()
		this.toWeight = React.createRef()
		this.projectsRef = React.createRef()
	}

	handleItemClick = (e, {name}) => {
		this.setState({
			activeItem: name
		})

		if (name === 'Tamagotchi') {
			window.scrollTo(0, this.toTama.current.offsetTop - 100)
		}

		if (name === 'Maze Game') {
			window.scrollTo(0, this.toMaze.current.offsetTop - 100)
		}

		if (name === 'Flight Delay') {
			window.scrollTo(0, this.toFlight.current.offsetTop - 100)
		}

		if (name === 'Weight Mate') {
			window.scrollTo(0, this.toWeight.current.offsetTop - 100)
		}
	}

	render() {
		const { activeItem } = this.state

		return (
			<div className='work' ref={this.props.toWork}>
				<h1>My Work</h1>
				<div className='work-projects' ref={this.projectsRef}>
					<Sticky context={this.projectsRef} offset={100}>
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
					<Projects 
						toTama={this.toTama}
						toMaze={this.toMaze}
						toFlight={this.toFlight}
						toWeight={this.toWeight}
					/>
				</div>
			</div>
		)
	}
}



export default MyWork