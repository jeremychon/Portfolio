import React from 'react'
import Tamagotchi from './Projects/Tamagotchi.png'
import MazeGame from './Projects/Maze-Game.png'
import FlightDelay from './Projects/flight-delay.png'
import WeightMate from './Projects/weight_mate_logo.png'

class Projects extends React.Component {
	render() {
		return (
			<div className='projects-list'>
				<div className='project' ref={this.props.toTama}>
					<h2>Tamagotchi</h2>
					<img className='work-image' src={Tamagotchi} alt="Tamagotchi logo"/>
				</div>
				<div className='project' ref={this.props.toMaze}>
					<h2>Retro Maze Game</h2>
					<img className='work-image' src={MazeGame} alt="Maze Game logo"/>
				</div>
				<div className='project' ref={this.props.toFlight}>
					<h2>Flight Delay</h2>
					<img className='work-image' src={FlightDelay} alt="Flight Delay logo"/>
				</div>
				<div className='project' ref={this.props.toWeight}>
					<h2>Weight Mate</h2>
					<img className='work-image' src={WeightMate} alt="Tamagotchi logo"/>
				</div>
			</div>
		)
	}
}


export default Projects