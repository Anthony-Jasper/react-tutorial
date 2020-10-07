import React from 'react'

import SocialData from "../../../data/SocialData"
import SocialItem from "./SocialItem"

class Social extends React.Component {
	render(){
		const SocialDataItem = 
		SocialData.map(item =>
			<SocialItem 
				key={item.id} 
				href={item.href} 
				icon={item.icon}
				content={item.content} 
			/>
		)
	
		return (
			<ul id="footer-socialcontainer">
				{SocialDataItem}
			</ul>
		)
	}
}

export default Social