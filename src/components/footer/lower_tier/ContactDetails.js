import React from 'react'

class ContactDetails extends React.Component {
	render(){
		return (
			<div id="footer-contact">
				<h3>contact</h3>
				<ul id="footer-contactlist">
					<li id="footer-contactlist-item1" className="footer-list-item">
						<a href={this.props.email_href} target="">
							<i className="icon">{this.props.email_icon}</i>
							{this.props.email}
						</a>
					</li>
					<li id="footer-contactlist-item1" className="footer-list-item">
						<a href={this.props.tele_href} target="">
							<i className="icon">{this.props.tele_icon}</i>
							{this.props.telenumber}
						</a>
					<span>Mo-Fr: 10am -6pm</span>
					</li>
				</ul>
			</div>
		)
	}
}

export default ContactDetails