import React from 'react'

class SubMenu extends React.Component {
	render(){
		return (
			<nav id="header-submenu">
			<button id="header-submenu-button" className="button-c2a">start buying</button>
					<ul id="header-submenulist">
					<li className="submenu-item" id="submenu-item-1">
						<a target=""href={this.props.contact_href}>
							contact
							<i className="material-icons">{this.props.contact_icon}</i>
						</a>
					</li>
					<li className="submenu-item" id="submenu-item-2">
						<a href={this.props.login_href} target="">
							login
							<i className="material-icons">{this.props.login_icon}</i>
						</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default SubMenu