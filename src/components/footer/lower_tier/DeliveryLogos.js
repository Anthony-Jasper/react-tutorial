import React from 'react'

class DeliveryLogos extends React.Component {
	render(){
		return (
			<div id="footer-deliverycontainer">
				<img id="parcel-force-logo" src={this.props.parcel_src} alt={this.props.parcel_alt}/>
				<img id="royal-mail-logo" src={this.props.royal_src} alt={this.props.royal_alt}/>
			</div>
		)
	}
}

export default DeliveryLogos