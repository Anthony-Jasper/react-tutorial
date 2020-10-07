import React from 'react'

class Menu extends React.Component {
	render(){
		return (
			<nav className="primary-nav">
				<ul className="primary-navlist">
					<li className="primary-navlist-item" id="list-item-1">
						<a href="" target="">home</a>
					</li>
					<li className="primary-navlist-item" id="list-item-2">
						<a href="" target="">shop</a>
					</li>
					<li className="primary-navlist-item" id="list-item-3">
						<a href="" target="">new</a>
					</li>
					<li className="primary-navlist-item" id="list-item-4">
						<a href="" target="">sale</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Menu