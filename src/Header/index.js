import React from 'react'
import ResumePDF from './JC_Resume.pdf'
import { Menu } from 'semantic-ui-react'

class Header extends React.Component {
	render() {
		return (
			<div className='header'>
				<div className='header-logo' onClick={this.props.scrollToPage.bind(null, 'home')}>JC</div>
				<Menu className='header-nav' secondary>
					<Menu.Item 
						className='nav-items'
						name='About' 
						onClick={this.props.scrollToPage.bind(null, 'about')}
					/>
					<Menu.Item 
						className='nav-items'
						name='My Work' 
						onClick={this.props.scrollToPage.bind(null, 'work')}
					/>
					<Menu.Item 
						className='nav-items'
						name='Contact'
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
				</Menu>
			</div>
		)
	}
}


export default Header