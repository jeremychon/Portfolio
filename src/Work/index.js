import React from 'react'
import Tamagotchi from './Photos/Tamagotchi.png'
import MazeGame from './Photos/Maze-Game.png'
import FlightDelay from './Photos/flight-delay.png'
import WeightMate from './Photos/weight_mate_logo.png'

class Work extends React.Component {
	constructor() {
		super()

		this.state = {
			tamaHover: false,
			mazeHover: false,
			flightHover: false,
			weightHover: false
		}
	}

	handleHoverOn = (project, e) => {
		if (project === 'tama') {
			this.setState({
				tamaHover: true
			})
		}

		if (project === 'maze') {
			this.setState({
				mazeHover: true
			})
		}

		if (project === 'flight') {
			this.setState({
				flightHover: true
			})
		}

		if (project === 'weight') {
			this.setState({
				weightHover: true
			})
		}	
	}

	handleHoverOff = (project, e) => {
		if (project === 'tama') {
			this.setState({
				tamaHover: false
			})
		}

		if (project === 'maze') {
			this.setState({
				mazeHover: false
			})
		}

		if (project === 'flight') {
			this.setState({
				flightHover: false
			})
		}

		if (project === 'weight') {
			this.setState({
				weightHover: false
			})
		}	
	}

	render() {
		return (
			<div className='work' ref={this.props.toWork}>
				<h1>Work</h1>
				<div className='work-all-projects'>

					<div 
						className='work-project' 
						style={{backgroundColor: 'white'}}
						onMouseOver={this.handleHoverOn.bind(null, 'tama')}
						onMouseLeave={this.handleHoverOff.bind(null, 'tama')}
					>
						<img className='work-image-tama' src={Tamagotchi} alt='game character'/>
						{this.state.tamaHover ? 
							<div className='light-image'>
								<h2>Tamagotchi</h2>
							</div> 
						: null}
					</div>

					<div 
						className='work-project'
						onMouseOver={this.handleHoverOn.bind(null, 'maze')}
						onMouseLeave={this.handleHoverOff.bind(null, 'maze')}
					>
						<img className='work-image' src={MazeGame} alt="ship and bricks"/>
						{this.state.mazeHover ? 
							<div className='dark-image'>
								<h2>Retro Maze Game</h2>
							</div> 
						: null}
					</div>

					<div 
						className='work-project' 
						style={{backgroundColor: 'rgb(79, 95, 118)'}}
						onMouseOver={this.handleHoverOn.bind(null, 'flight')}
						onMouseLeave={this.handleHoverOff.bind(null, 'flight')}
					>
						<img className='work-image-flight' src={FlightDelay} alt="flight delay icon"/>
						{this.state.flightHover ? 
							<div className='dark-image'>
								<h2>Flight Delay</h2>
							</div> 
						: null}
					</div>

					<div 
						className='work-project'
						onMouseOver={this.handleHoverOn.bind(null, 'weight')}
						onMouseLeave={this.handleHoverOff.bind(null, 'weight')}
					>
						<img className='work-image' src={WeightMate} alt="weight mate logo"/>
						{this.state.weightHover ? 
							<div className='dark-image'>
								<h2>Weight Mate</h2>
							</div> 
						: null}
					</div>
				</div>
			</div>
		)
	}
}



export default Work