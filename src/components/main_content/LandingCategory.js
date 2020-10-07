import React from 'react'

import LandingCategoryBox from "./lower_tier/LandingTagBox"
import LandingCategoryBoxData from "../../data/LandingCategoryBoxData"

const LandingCategory = () => {
	const LandingCategoryItem = 
	LandingCategoryBoxData.map(item =>
			<LandingCategoryBox
				key={item.id} 
				href={item.href} 
				alt={item.alt} 
				content={item.content} 
			/>
		)

	return (
		<div id="landing-category-section">
			<h2>T-shirts or hoodies</h2>
			{LandingCategoryItem}
		</div>
	)
}

export default LandingCategory