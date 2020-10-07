import React from 'react'

class Delivery extends React.Component {
	render(){
		return (
			<div id="delivery-block">
				<i className="icon">{this.props.icon}</i>
				<p>
					<span>free</span>
					uk delivery
				</p>
				<p>when order is over {this.props.value}</p>
			</div>
		)
	}
}

export default Delivery