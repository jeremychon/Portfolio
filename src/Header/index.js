import React from 'react'
import ResumePDF from './JC_Resume.pdf'

class Header extends React.Component {
	render() {
		return (
			<div className='header'>
				<div className='header-logo' onClick={this.props.scrollToPage.bind(null, 'home')}>JC</div>
				<div className='header-nav'>
					<div className='nav-items' onClick={this.props.scrollToPage.bind(null, 'about')}>About Me</div>
					<div className='nav-items' onClick={this.props.scrollToPage.bind(null, 'work')}>My Work</div>
					<div className='nav-items' onClick={this.props.scrollToPage.bind(null, 'contact')}>Contact</div>
					<div className='nav-items'><a href={ResumePDF} target='_blank' rel="noopener noreferrer">Resume</a></div>
				</div>
			</div>
		)
	}
}


export default Header