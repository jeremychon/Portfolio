import React from 'react'

class Contact extends React.Component {
	// constructor() {
	// 	super()

	// 	this.toContact = React.createRef()
	// }

	render() {
		return (
			<div className='contact' ref={this.props.toContact}>
				<h1>Get in touch</h1>
			</div>
		)
	}
}


export default Contact