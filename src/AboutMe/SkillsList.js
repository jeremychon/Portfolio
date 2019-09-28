import React from 'react'
import ScrollReveal from 'scrollreveal'
import html from './Icons/html.png'
import css from './Icons/css.png'
import js from './Icons/js.png'
import jquery from './Icons/jquery.jpg'
import mongodb from './Icons/mongodb.png'
import nodejs from './Icons/nodejs.jpg'
import expressjs from './Icons/expressjs.png'
import reactjs from './Icons/react.png'
import postgresql from './Icons/postgresql.png'
import sql from './Icons/sql.png'
import flask from './Icons/flask.png'
import python from './Icons/python.png'

class SkillsList extends React.Component {
	
	componentDidMount() {
		ScrollReveal().reveal('.skills-icon', {duration: 2000, interval: 200})
	}
	
	render() {	
		return (
			<div className='skills-list'>
				<div className='skills-list-row'>
					<img className='skills-icon' src={html} alt="html icon"/>
					<img className='skills-icon' src={css} alt="css icon"/>
					<img className='skills-icon' src={js} alt="js icon"/>
				</div>
				<div className='skills-list-row'>
					<img className='skills-icon' src={mongodb} alt="mongodb icon"/>
					<img className='skills-icon' src={nodejs} alt="nodejs icon"/>
					<img className='skills-icon' src={expressjs} alt="expressjs icon"/>
				</div>
				<div className='skills-list-row'>
					<img className='skills-icon' src={sql} alt="sql icon"/>
					<img className='skills-icon' src={reactjs} alt="reactjs icon"/>
					<img className='skills-icon' src={flask} alt="flask icon"/>
				</div>
				<div className='skills-list-row'>
					<img className='skills-icon' src={jquery} alt="jquery icon"/>
					<img className='skills-icon' src={postgresql} alt="postgresql icon"/>
					<img className='skills-icon' src={python} alt="python icon"/>
				</div>
			</div>
		)
	}
}





export default SkillsList