import React from 'react'

class SocialItem extends React.Component {
	render(){
		return (
			<li className="footer-social-item" id="footer-social-item1">
				<i className="icon">{this.props.icon}</i>
				<a href={this.props.href} target="">{this.props.content}</a>
			</li>
		)
	}
}

export default SocialItem