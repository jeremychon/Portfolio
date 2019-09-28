import React from 'react'
import { Menu } from 'semantic-ui-react'
import Projects from './Projects'


class MyWork extends React.Component {
	constructor() {
		super()

		this.state = {
			activeItem: 'Tamagotchi'
		}

		this.projectsRef = React.createRef()
	}


	handleItemClick = (e, {name}) => {
		this.setState({
			activeItem: name
		})
	}


	render() {
		const { activeItem } = this.state
		console.log(this.state, '<--- state in work');

		return (
			<div className='work' name='Work'>
				<h1>My Work</h1>
				<div className='work-projects' ref={this.projectsRef}>
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
					<Projects activeItem={this.state.activeItem}/>
				</div>
			</div>
		)
	}
}



export default MyWork