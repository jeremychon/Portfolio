import React from 'react';

class Homepage extends React.Component {

	render() {

		return (
			<div className='homepage' ref={this.props.toHome}>
				<div className='homepage-title'>
					<div>Hello. I'm <span id='name'>Jeremy Chon</span></div>
					<div>A full stack developer</div>
				</div>
			</div>

		)
	}
}


export default Homepage