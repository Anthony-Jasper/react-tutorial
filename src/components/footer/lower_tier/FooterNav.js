import React from 'react'

import FooterNavData from "../../../data/FooterNavData"
import FooterNavItem from "./FooterNavItem"

class FooterNav extends React.Component {
	render(){
		const FooterNavItems = 
			FooterNavData.map(item =>
			<FooterNavItem 
				key={item.id} 
				href={item.href} 
				content={item.content} 
			/>
		)
	
		return (
			<nav className="footer-nav">
				<ul className="footer-navlist">
					Category Name
					{FooterNavItems}
				</ul>
			</nav>
		)
	}
}

export default FooterNav