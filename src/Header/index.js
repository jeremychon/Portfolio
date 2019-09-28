import React from 'react'
import ResumePDF from './JC_Resume.pdf'
import { Menu } from 'semantic-ui-react'
import ScrollReveal from 'scrollreveal'

class Header extends React.Component {

	componentDidMount() {
		ScrollReveal().reveal('.header-logo', {duration: 2000})
		ScrollReveal().reveal('.nav-items', {duration: 2000, interval: 200})
	}

	render() {
		return (
			<div className='header'>
				<Menu className='header-nav' secondary>
					<Menu.Item
						className='header-logo'
						name='JC'
						onClick={this.props.scrollToPage.bind(null, 'home')} 
						spy='true'
					/>
					<Menu.Menu position='right'>
						<Menu.Item 
							className='nav-items'
							name='About'
							spy='true'
							onClick={this.props.scrollToPage.bind(null, 'about')}
						/>
						<Menu.Item 
							className='nav-items'
							name='Projects'
							spy='true'
							onClick={this.props.scrollToPage.bind(null, 'work')}
						/>
						<Menu.Item 
							className='nav-items'
							name='Contact'
							spy='true'
							onClick={this.props.scrollToPage.bind(null, 'contact')}
						/>
						<Menu.Item className='nav-items'>
							<a 
								href={ResumePDF} 
								target='_blank' 
								rel="noopener noreferrer"
							>Resume</a>
						</Menu.Item>
						<Menu.Item className='nav-items'>
							<a href="https://github.com/jeremychon" target='_blank' rel="noopener noreferrer">
								GitHub
							</a>
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</div>
		)
	}
}


export default Header