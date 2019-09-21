import React from 'react';

class Homepage extends React.Component {

	render() {

		return (
			<div className='homepage' ref={this.props.toHome}>
				<div className='homepage-title'>
					<div>Hello. I'm</div>
					<div id='name'>Jeremy Chon</div>
					<div>I'm a full stack software developer based in Chicago, IL. I enjoy </div>
				</div>
			</div>

		)
	}
}


export default Homepage