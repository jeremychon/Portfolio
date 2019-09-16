import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
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

const SkillsList = (props) => {

	return (
		<Grid className='skills-list' columns='equal'>
			<Grid.Row>
				<Grid.Column className='skills'>
					<Image className='skills-icon' src={html} alt="html icon"/>
				</Grid.Column>
				<Grid.Column className='skills'>
					<Image className='skills-icon' src={css} alt="css icon"/>
				</Grid.Column>
				<Grid.Column className='skills'>
					<Image className='skills-icon' src={js} alt="js icon"/>
				</Grid.Column>
				<Grid.Column className='skills'>
					<Image className='skills-icon' src={jquery} alt="jquery icon"/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column className='skills'>
					<Image className='skills-icon' src={mongodb} alt="mongodb icon"/>
				</Grid.Column>
				<Grid.Column className='skills'>
					<Image className='skills-icon' src={nodejs} alt="nodejs icon"/>
				</Grid.Column>
				<Grid.Column className='skills'>
					<Image className='skills-icon' src={expressjs} alt="expressjs icon"/>
				</Grid.Column>
				<Grid.Column className='skills'>
					<Image className='skills-icon' src={postgresql} alt="postgresql icon"/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column className='skills'>
					<Image className='skills-icon' src={sql} alt="sql icon"/>
				</Grid.Column>
				<Grid.Column className='skills'>
					<Image className='skills-icon' src={reactjs} alt="reactjs icon"/>
				</Grid.Column>
				<Grid.Column className='skills'>
					<Image className='skills-icon' src={flask} alt="flask icon"/>
				</Grid.Column>
				<Grid.Column className='skills'>
					<Image className='skills-icon' src={python} alt="python icon"/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	)
}





export default SkillsList