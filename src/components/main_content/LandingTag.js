import React from 'react'

import LandingTagBox from "./lower_tier/LandingTagBox"
import LandingTagBoxData from "../../data/LandingTagBoxData"

const LandingTag = () => {
	const LandingTagItem = 
	LandingTagBoxData.map(item =>
		<LandingTagBox 
			key={item.id}
			href={item.href} 
			alt={item.alt} 
			icon={item.icon} 
			content={item.content} 
		/>
		)
	return (
		<div id="landing-tag-section"> 
			{LandingTagItem}
		</div>
	)
}

export default LandingTag