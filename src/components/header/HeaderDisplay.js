import React from 'react'

import LandingImage from './lower_tier/LandingImage'
import LandingTitle from './lower_tier/LandingTitle'
import LandingButton from './lower_tier/LandingButton'

class HeaderDisplay extends React.Component {
	render(){
		return (
			<div id="header-display">
				<LandingImage 
					src="#"
					alt="null"
				/>
				<LandingTitle />
				<LandingButton />
			</div>
		)
	}
}

export default HeaderDisplay