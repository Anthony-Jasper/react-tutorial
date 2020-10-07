import React from 'react'

import DesignContest from "./main_content/lower_tier/DesignContest"
import DeliveryBar from "./main_content/DeliveryBar"
import FeaturedProducts from "./main_content/FeaturedProducts"
import LandingCategory from "./main_content/LandingCategory"
import LandingTag from "./main_content/LandingTag"
import RealWorld from "./main_content/RealWorld"

class MainContent extends React.Component {
	render(){
		return (
			<main id="main-content"> 
				<DesignContest />
				<DeliveryBar />
				<FeaturedProducts />
				<LandingCategory />
				<LandingTag />
				<RealWorld />
			</main>
		)
	}
}

export default MainContent