import React from 'react'

import SaleTimer from "./lower_tier/SaleTimer"
import Delivery from "./lower_tier/Delivery"
import GoogleReviews from "./lower_tier/GoogleReviews"

const DeliveryBar = () => {
	return (
		<div id="delivery-bar"> 
			<SaleTimer />
			<Delivery 
				icon="truck"
				value="£20"
			/>
			<GoogleReviews />
		</div>
	)
}

export default DeliveryBar