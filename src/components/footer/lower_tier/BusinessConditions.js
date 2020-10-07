import React from 'react'

import BusinessConditionData from "../../../data/BusinessConditionsData"
import ConditionsItem from "./ConditionsItem"

class BusinessConditions extends React.Component {
	render(){
		const BusinessConditionsItems = 
			BusinessConditionData.map(item =>
				<ConditionsItem 
					key={item.id} 
					href={item.href} 
					content={item.content} 
				/>
			)
		return (
			<div id="footer-terms">
				<h3>cloudyne</h3>
				<ul id="footer-termslist">
					{BusinessConditionsItems}
				</ul>
			</div>
		)
	}
}

export default BusinessConditions