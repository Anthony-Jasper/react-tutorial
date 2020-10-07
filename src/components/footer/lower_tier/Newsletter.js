import React from 'react'

class Newsletter extends React.Component {
	render(){
		return (
			<div id="footer-newsletter">
				<h3>discounts, sales, contest and more</h3>
				<p>subscribe to our newsletter</p>
				<form id="footer-newsletter-form" action={this.props.action} method={this.props.method}>
					<input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} id="" pattern={this.props.pattern} title={this.props.title} size={this.props.size} maxLength={this.props.max} required></input>
					<input type={this.props.submit_type} name={this.props.submit_name}></input>
				</form>
			</div>
		)
	}
}

export default Newsletter