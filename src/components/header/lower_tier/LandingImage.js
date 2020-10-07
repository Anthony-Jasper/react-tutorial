import React from 'react'

class LandingImage extends React.Component {
	render(){
		return (
			<img id="header-backgroundimage" src={this.props.src} alt={this.props.alt}></img>
		)
	}
}

export default LandingImage