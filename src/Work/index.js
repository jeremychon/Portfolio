import React from 'react'
import Tamagotchi from './Photos/Tamagotchi.png'
import MazeGame from './Photos/Maze-Game.png'
import FlightDelay from './Photos/flight-delay.png'
import WeightMate from './Photos/weight_mate_logo.png'

class Work extends React.Component {
	// constructor() {
	// 	super()
	// }

	render() {
		return (
			<div className='work' ref={this.props.toWork}>
				<h1>Work</h1>
				<div className='work-all-projects'>
					<div className='work-project' style={{backgroundColor: 'white'}}>
						<img className='work-image-tama' src={Tamagotchi} alt='game character'/>
					</div>
					<div className='work-project'>
						<img className='work-image' src={MazeGame} alt="ship and bricks"/>
					</div>
					<div className='work-project' style={{backgroundColor: 'rgb(79, 95, 118)'}}>
						<img className='work-image-flight' src={FlightDelay} alt="flight delay icon"/>
					</div>
					<div className='work-project'>
						<img className='work-image' src={WeightMate} alt="weight mate logo"/>
					</div>
				</div>
			</div>
		)
	}
}



export default Work