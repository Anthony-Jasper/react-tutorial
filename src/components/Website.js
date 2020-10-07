import React from 'react'

import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

class Website extends React.Component {
	render(){
		return (
			<div id="page-content">
				<Header />
				<MainContent />
				<Footer />
			</div>
		)
	}
}

export default Website