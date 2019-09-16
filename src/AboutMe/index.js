import React from 'react'
import profile from './profile.jpg'
import SkillsList from './SkillsList'
import { Divider } from 'semantic-ui-react'

class AboutMe extends React.Component {

	render() {
		return (
			<div className='aboutme' ref={this.props.toAbout}>
				<div className='aboutme-info'>
					<div className='aboutme-desc'>
						<h1 className='aboutme-title' >About me</h1>
						<Divider section />
						<p className='aboutme-par'>Growing up playing multiple team sports, I have always learned to value perseverance, cooperation, and respect to others. I enjoy being able to collaborate and utilize the minds of my peers to efficiently tackle a larger problem. As a software engineer, I continue to uphold these values not only to better myself, but to build up those around me.​</p>
					</div>
					<img className='aboutme-profile' src={profile} alt="me"/>
				</div>
				<div>
					<h1 style={{marginBottom: '50px'}}>Skills</h1>
					<SkillsList />
				</div>
			</div>
		)
	}
}



export default AboutMe