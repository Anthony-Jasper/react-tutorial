import React from 'react'

class AccountOptions extends React.Component {
	render(){
		return (
			<div id="footer-account">
				<h3>Account</h3>
				<ul id="footer-accountlist">
					<li id="footer-accountlist-item1" className="footer-list-item">
						<a href="" target="">
							<i>clothes_tag</i>
							View Orders
						</a>
					</li>
					<li id="footer-accountlist-item2" className="footer-list-item">
						<a href="" target="">
							<i>Question_mark</i>
							Account Details
						</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default AccountOptions