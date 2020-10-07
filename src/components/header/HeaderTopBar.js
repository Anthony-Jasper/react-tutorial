import React from 'react'

import Coupon from './lower_tier/Coupon'
import SubMenu from './lower_tier/SubMenu'

class HeaderTopBar extends React.Component {
	render(){
		return (
			<div id="header-topbar">
				<Coupon 
					value="£5"
					href="#"
					icon="chevron_right"
				/>
				<SubMenu 
					contact_href="#"
					contact_icon="help"
					login_href="#"
					login_icon="chevron_right"
				/>
			</div>
		)
	}
}

export default HeaderTopBar