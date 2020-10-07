import React from 'react'

class LandingTagBox extends React.Component {
	render(){
		return (
			<div className="landing-tag-box"> 
				<img className="landing-tag-image" src={this.props.src} alt={this.props.alt}></img>
				<div>
					<p>
					{this.props.content}
						<i className="icon">{this.props.icon}</i>
					</p>
				</div>
			</div>
		)
	}
}

export default LandingTagBox