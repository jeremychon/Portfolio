import React from 'react'
import Tamagotchi from './Projects/Tamagotchi.png'
import MazeGame from './Projects/Maze-Game.png'
import FlightDelay from './Projects/flight-delay.png'
import WeightMate from './Projects/weight_mate_logo.png'
// import { Divider } from 'semantic-ui-react'

class Projects extends React.Component {
	render() {
		return (
			<div className='projects-list'>
				{this.props.activeItem === 'Tamagotchi' ? 
					<div className='project'>
						<div className='project-info'>
							<h2>Tamagotchi</h2>
							<hr/>
							<p>The Tamagotchi game that I had made not only has a simple and clean design, but also has very simple gameplay. Feed it. Put it to sleep. Play with it. In addition, the character that is displayed is an original drawing designed by me.</p>
							<div className='project-links'>
								<a href="https://github.com/jeremychon/Tomagotchi" target='_blank' rel="noopener noreferrer">Code</a>
								<a href="https://jeremychon.github.io/Tomagotchi/" target='_blank' rel="noopener noreferrer">Game</a>
							</div>
						</div>
						<div className='work-logo' style={{border: '1px solid black'}}>
							<img 
								className='work-image-tama' 
								src={Tamagotchi} 
								alt="Tamagotchi logo"
							/>
						</div>
					</div>
					: null
				}
				{this.props.activeItem === 'Maze Game' ?
					<div className='project'>
						<div className='project-info'>
							<h2>Retro Maze Game</h2>
							<hr/>
							<p>The Maze Game was inspired by my love for old school games. It not only has a retro feel, but the game play itself is extremely simple, which is also what drew me to creating this game. I wanted anyoen to be able to enjoy my game.</p>
							<div className='project-links'>
								<a href="https://github.com/jeremychon/project-1-maze-game" target='_blank' rel="noopener noreferrer">Code</a>
								<a href="https://jeremychon.github.io/project-1-maze-game/" target='_blank' rel="noopener noreferrer">Game</a>
							</div>
						</div>
						<div className='work-logo'>
							<img 
								className='work-image' 
								src={MazeGame} 
								alt="Maze Game logo"
							/>
						</div>
					</div>
					: null
				}
				{this.props.activeItem === 'Flight Delay' ?
					<div className='project'>
						<div className='project-info'>
							<h2>Flight Delay</h2>
							<hr/>
							<p>My partner and I designed an app that allowed users to purchase insurance on delayed flights that we supported by Flight Delay. Using a third-party API, we were able to retrieve accurate flight information based on the user's search.</p>
							<div className='project-links'>
								<a href="https://github.com/woodsjm/project-2" target='_blank' rel="noopener noreferrer">Code</a>
								<a href="https://up-in-the-air.herokuapp.com/" target='_blank' rel="noopener noreferrer">App</a>
							</div>
						</div>
						<div className='work-logo-flight'>
							<img 
								className='work-image-flight' 
								src={FlightDelay} 
								alt="Flight Delay logo"
							/>
						</div>
					</div>
					: null
				}
				{this.props.activeItem === 'Weight Mate' ?
					<div className='project'>
						<div className='project-info'>
							<h2>Weight Mate</h2>
							<hr/>
							<p>Due to my love for fitness, I wanted to create a social fitness app that allowed users to create and share workout plans with other users. It was designed for people to be inspired by others or to find a source of accountability within the community of Weight Mate members.</p>
							<div className='project-links'>
								<a href="https://github.com/jeremychon/capstone-react" target='_blank' rel="noopener noreferrer">React Code</a>
								<a href="https://github.com/jeremychon/capstone-express" target='_blank' rel="noopener noreferrer">Express Code</a>
							</div>
						</div>
						<div className='work-logo'>
							<img 
								className='work-image' 
								src={WeightMate} 
								alt="Tamagotchi logo"
							/>
						</div>
					</div>
					: null
				}
			</div>
		)
	}
}


export default Projects