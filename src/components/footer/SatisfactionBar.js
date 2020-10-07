import React from 'react'

import PaymentLogos from "./lower_tier/PaymentLogos"
import SatisfactionBlock from "./lower_tier/SatisfactionBlock"
import DeliveryLogos from "./lower_tier/DeliveryLogos"

class SatisfactionBar extends React.Component {
	render(){
		return (
			<div id="satisfaction-bar">
				<PaymentLogos 
					visa_src="#"
					visa_alt="alt"
					express_src="#"
					express_alt="alt"
					paypal_src="#"
					paypal_alt="alt"
				/>
				<SatisfactionBlock 
					icon="thumbs_up"
				/>
				<DeliveryLogos 
					parcel_src="#"
					parcel_alt="alt"
					royal_src="#"
					royal_alt="alt"
				/>
			</div>
		)
	}
}

export default SatisfactionBar