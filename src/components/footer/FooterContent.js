import React from 'react'

import Newsletter from "./lower_tier/Newsletter"
import ContactDetails from "./lower_tier/ContactDetails"
import BusinessConditions from "./lower_tier/BusinessConditions"
import Social from "./lower_tier/Social"
import AccountOptions from "./lower_tier/AccountOptions"

class FooterContent extends React.Component {
	render(){
		return (
			<div id="footer-content">
				<Newsletter 
					action="null"
					method="null"
					type="email"
					name="null"
					placeholder="your email address"
					pattern="null"
					title="null"
					size="64"
					max="64"
					submit_type="submit"
					submit_name="null"
				/>
				<ContactDetails 
					email_href="#"
					email_icon="email"
					email="support@cloudyne.co.uk"
					tele_href="#"
					tele_icon="telephone"
					telenumber="+44 23433 98786"
				/>
				<BusinessConditions />
				<Social />
				<AccountOptions 
					order_href="#"
					order_icon="clothes_tag"
					account_href="#"
					account_icon="question_mark"
				/>
			</div>
		)
	}
}

export default FooterContent