import React from 'react'

class SatisfactionBlock extends React.Component {
	render(){
		return (
			<div id="satisfaction-container">
				<h3>satisfaction guaranteed</h3>
				<i className="icon">{this.props.thumbs_up}</i>
				<p>if you're not 100% satisfied, we'll take our order back within 30 days</p>
			</div>
		)
	}
}

export default SatisfactionBlock