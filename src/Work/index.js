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
							<div className='image-cover'>
								<div className='image-cover-info'>
									<h2>Tamagotchi</h2>
									<p>The Tamagotchi game that I had made not only has a simple and clean design, but also has very simple gameplay. Feed it. Put it to sleep. Play with it. In addition, the character that is displayed is an original drawing designed by me.</p>
									<p>Technologies: HTML, CSS, Javascript</p>
								</div>
								<div className='project-links'>
									<a href="https://github.com/jeremychon/Tomagotchi" target='_blank' rel="noopener noreferrer">Code</a>
									<a href="https://jeremychon.github.io/Tomagotchi/" target='_blank' rel="noopener noreferrer">Game</a>
								</div>
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
							<div className='image-cover'>
								<div className='image-cover-info'>
									<h2>Retro Maze Game</h2>
									<p>The Maze Game was inspired by my love for old school games. It not only has a retro feel, but the game play itself is extremely simple, which is also what drew me to creating this game. I wanted anyoen to be able to enjoy my game.</p>
									<p>Technologies: HTML, CSS, Javascript, Canvas</p>
								</div>
								<div className='project-links'>
									<a href="https://github.com/jeremychon/project-1-maze-game" target='_blank' rel="noopener noreferrer">Code</a>
									<a href="https://jeremychon.github.io/project-1-maze-game/" target='_blank' rel="noopener noreferrer">Game</a>
								</div>
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
							<div className='image-cover'>
								<div className='image-cover-info'>
									<h2>Flight Delay</h2>
									<p>My partner and I designed an app that allowed users to purchase insurance on delayed flights that we supported by Flight Delay. Using a third-party API, we were able to retrieve accurate flight information based on the user's search.</p>
									<p>Technologies: ExpressJS, MongoDB</p>
								</div>
								<div className='project-links'>
									<a href="https://github.com/woodsjm/project-2" target='_blank' rel="noopener noreferrer">Code</a>
									<a href="https://up-in-the-air.herokuapp.com/" target='_blank' rel="noopener noreferrer">App</a>
								</div>
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
							<div className='image-cover'>
								<div className='image-cover-info'>
									<h2>Weight Mate</h2>
									<p>Due to my love for fitness, I wanted to create a social fitness app that allowed users to create and share workout plans with other users. It was designed for people to be inspired by others or to find a source of accountability within the community of Weight Mate members.</p>
									<p>Technologies: React, ExpressJS, MongoDB</p>
								</div>
								<div className='project-links'>
									<a href="https://github.com/jeremychon/capstone-react" target='_blank' rel="noopener noreferrer">React Code</a>
									<a href="https://github.com/jeremychon/capstone-express" target='_blank' rel="noopener noreferrer">Express Code</a>
								</div>
							</div> 
						: null}
					</div>
				</div>
			</div>
		)
	}
}



export default Work