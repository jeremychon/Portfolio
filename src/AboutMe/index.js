import React from 'react'
import profile from './profile.jpg'
import SkillsList from './SkillsList'
import ScrollReveal from 'scrollreveal'


class AboutMe extends React.Component {

	componentDidMount() {
		ScrollReveal({distance: '60px'})
		ScrollReveal().reveal('.aboutme-desc', {origin: 'left', duration: 4000})
	}

	render() {
		return (
			<div className='aboutme' ref={this.props.toAbout} name='About'>
				<div className='aboutme-desc'>
					<img className='aboutme-profile' src={profile} alt="me"/>
					<p className='aboutme-par'>Growing up playing multiple team sports, I have always learned to value perseverance, cooperation, and respect to others. I enjoy being able to collaborate and utilize the minds of my peers to efficiently tackle a larger problem. As a software engineer, I continue to uphold these values not only to better myself, but to build up those around me.​</p>
				</div>
				<SkillsList />
			</div>
		)
	}
}



export default AboutMe