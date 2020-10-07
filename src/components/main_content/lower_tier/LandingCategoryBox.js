import React from 'react'

class LandingCategoryBox extends React.Component {
	render(){
		return (
			<div className="landing-category-box">
				<img className="landing-category-image" src={this.props.src} alt={this.props.alt}></img>
				<div>
					<p>{this.props.content}</p>
				</div>
			</div>
		)
	}
}

export default LandingCategoryBox