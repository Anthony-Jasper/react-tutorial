import React from 'react'

class BusinessConditions extends React.Component {
	render(){
		return (
			<li className="footer-list-item" id="footer-termslist-item1">
				<a href={this.props.href} target="">{this.props.content}</a>
			</li>
		)
	}
}

export default BusinessConditions