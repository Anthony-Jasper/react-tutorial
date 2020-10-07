import React from 'react'

import FooterNavigation from "./footer/FooterNavigation"
import SatisfactionBar from "./footer/SatisfactionBar"
import FooterContent from "./footer/FooterContent"

class Footer extends React.Component {
	render(){
		return (
			<footer id="main-footer">
				<FooterNavigation />
				<SatisfactionBar />
				<FooterContent />
			</footer>
		)
	}
}

export default Footer