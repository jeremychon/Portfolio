import React from 'react'
import LinkedIn from './Icons/linkedin.jpg'
import GitHub from './Icons/github.png'
import Email from './Icons/email.png'
// import { Form, Button } from 'semantic-ui-react'

class Contact extends React.Component {
	// constructor() {
	// 	super()

	// 	this.state = {
	// 		firstName: '',
	// 		lastName: '',
	// 		email: '',
	// 		comment: ''
	// 	}
	// }

	// handleChange = (e) => {
	// 	this.setState({
	// 		[e.currentTarget.name]: e.currentTarget.value
	// 	})
	// }



	render() {
		return (
			<div className='contact' ref={this.props.toContact}>
				<h1 className='contact-title'>Get in touch</h1>
				<div className='contact-body'>
					<div className='contact-info'>
						<p className='contact-par'>​If you'd like to get in contact with me, feel free to connect with me on LinkedIn or email me.</p>
						<div className='contact-icons'>
							<a href='https://www.linkedin.com/in/jeremy-chon/' target='_blank' rel="noopener noreferrer">
								<img 
									className='contact-icon' 
									src={LinkedIn} 
									alt="linkedin icon"
								/>
							</a>
							<a href="https://github.com/jeremychon" target='_blank' rel="noopener noreferrer">
								<img 
									className='contact-icon' 
									src={GitHub} 
									alt="github icon"
								/>
							</a>
							<a href='mailto:jaedee95@gmail.com'>
								<img 
									className='contact-icon'
									src={Email} 
									alt="email icon"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default Contact