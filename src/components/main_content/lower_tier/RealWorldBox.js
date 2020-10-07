import React from 'react'

class RealWorldBox extends React.Component {
	render(){
		return (
			<div className="real-world-box">
				<img className="real-world-image" src={this.props.src} alt={this.props.alt}></img>
				<div></div> {/* border */}
			</div>
		)
	}
}

export default RealWorldBox