import React from 'react'

class QuickLinks extends React.Component {
	render(){
		return (
			<div id="header-quicklinks">
				<a id="header-favourites" href={this.props.favourites_href} target="">
					<i className="material-icons">{this.props.favourites_icon}</i>
				</a>
				<a id="header-cart" href={this.props.cart_href} target="">
					<i className="material-icons">{this.props.cart_icon}</i>
				</a>
			</div>
		)
	}
}

export default QuickLinks