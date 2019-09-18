import React from 'react'
import LinkedIn from './Icons/linkedin.jpg'
import GitHub from './Icons/github.png'
import Resume from './Icons/resume.png'
import ResumePDF from './JC_Resume.pdf'
import { Form } from 'semantic-ui-react'

class Contact extends React.Component {
	constructor() {
		super()

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			comment: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}



	render() {
		return (
			<div className='contact' ref={this.props.toContact}>
				<h1 className='contact-title'>Get in touch</h1>
				<div className='contact-body'>
					<div className='contact-info'>
						<p className='contact-par'>​If you'd like to get in contact with me, please fill out the form with your full name, email, and reason for contacting.</p>
						<p className='contact-par'>You may also feel free to click on the icons to check out my LinkedIn, GitHub, or resume.</p>
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
							<a href={ResumePDF} target='_blank' rel='noopener noreferrer'>
								<img 
									className='contact-icon' 
									src={Resume} 
									alt="resume icon"
								/>
							</a>
						</div>
					</div>
					<Form className='contact-form'>
						<p><span style={{color: 'rgb(199, 33, 28)'}}>*</span> indicates required field</p>
						<div className='full-name'>
							<Form.Input
								required
								label='First name' 
								type="text" 
								name='firstName'
								placeholder='First'
								value={this.state.firstName}
								className='user-name'
								onChange={this.handleChange}
							/>
							<Form.Input
								required
								label='Last' 
								type="text" 
								name='lastName'
								placeholder='Last'
								value={this.state.lastName}
								className='user-name'
								onChange={this.handleChange}
							/>
						</div>
						<Form.Input
							required
							label='Email' 
							type="text" 
							name='email'
							placeholder='Email'
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<Form.TextArea
							required
							label='Comment' 
							type="text" 
							name='comment'
							rows={9}
							value={this.state.comment}
							onChange={this.handleChange}
						/>
					</Form>
				</div>
			</div>
		)
	}
}


export default Contact