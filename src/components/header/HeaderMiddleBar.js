import React from 'react'

import Logo from './lower_tier/Logo'
import Search from './lower_tier/Search'
import QuickLinks from './lower_tier/QuickLinks'

class HeaderMiddleBar extends React.Component {
	render(){
		return (
			<div id="header-middlebar">
				<Logo 
					src="#"
					alt="null"
				/>
				<Search />
				<QuickLinks 
					favourites_href="#"
					favourites_icon="favorite_border"
					cart_href="#"
					cart_icon="shopping_basket"
				/>
			</div>
		)
	}
}

export default HeaderMiddleBar