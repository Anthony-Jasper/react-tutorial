import React from 'react'

class PaymentLogos extends React.Component {
	render(){
		return (
			<div id="footer-paymentcontainer">
				<img id="visa-logo" src={this.props.visa_src} alt={this.props.visa_alt}/>
				<img id="american-express-logo" src={this.props.express_src} alt={this.props.express_alt}/>
				<img id="paypal-logo" src={this.props.paypal_src} alt={this.props.paypal_alt}/>
			</div>
		)
	}
}

export default PaymentLogos