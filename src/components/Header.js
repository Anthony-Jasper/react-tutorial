import React from 'react'

import HeaderTopBar from '../components/header/HeaderTopBar'
import HeaderMiddleBar from '../components/header/HeaderMiddleBar'
import Menu from '../components/header/Menu'
import HeaderDisplay from '../components/header/HeaderDisplay'

class Header extends React.Component {
	render(){
		return (
			<header id='main-header'>
				<HeaderTopBar />
				<HeaderMiddleBar />
				<Menu />
				<HeaderDisplay />
			</header>
		)
	}
}

export default Header