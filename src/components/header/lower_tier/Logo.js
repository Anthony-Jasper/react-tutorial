import React from 'react'

class Logo extends React.Component {
	render(){
		return (
			<img id="logo" src={this.props.src} alt={this.props.alt}></img>
		)
	}
}

export default Logo