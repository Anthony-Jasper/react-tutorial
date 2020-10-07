import React from 'react'

import FooterNavBlock from "./lower_tier/FooterNavBlock"
import FooterNav from "./lower_tier/FooterNav"

class FooterNavigation extends React.Component {
	render(){
		return (
			<div id="footer-navigation"> 
				<FooterNavBlock />
				<FooterNav />
				<FooterNav />	{/* Find way to minimise this and use data */}
				<FooterNav />
				<FooterNavBlock />
			</div>
		)
	}
}

export default FooterNavigation