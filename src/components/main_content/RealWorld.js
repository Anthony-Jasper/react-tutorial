import React from 'react'

import RealWorldBox from "./lower_tier/RealWorldBox"
import RealWorldBoxData from "../../data/RealWorldData"

const RealWorld = () => {
	const RealWorldItem = 
	RealWorldBoxData.map(item =>
			<RealWorldBox 
				key={item.id}
				href={item.href} 
				alt={item.alt} 
			/>
		)

	return (
		<div id="real-world-section"> 
			<h2>in the real world</h2>
			<RealWorldBox />
			<RealWorldBox /> {/* DataList */}
			<RealWorldBox />
			<RealWorldBox />
		</div>
	)
}

export default RealWorld