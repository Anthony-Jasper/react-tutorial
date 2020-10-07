import React from 'react'

class FooterNavItem extends React.Component {
	render(){
		return (
			<li className="footer-navlist-item" id="footer-navlist-item$">
				<a href={this.props.href} target="">{this.props.content}</a>
			</li>
		)
	}
}

export default FooterNavItem