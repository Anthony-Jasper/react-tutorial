import React from 'react'
import { render } from 'react-dom'

class Coupon extends React.Component {
	render(){
		return (
			<div id="coupon-block">
				<p id="coupon-content">save {this.props.value} now</p>
				<a id="coupon-proceed" href={this.props.href} target="">
					redeem
					<i className="material-icons">{this.props.icon}</i>
				</a>
				<div id="coupon-triangleleft"></div>
				<div id="coupon-triangleright"></div>
			</div>
		)
	}
}

export default Coupon