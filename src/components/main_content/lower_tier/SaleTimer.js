import React from 'react'

class SaleTimer extends React.Component {
	render(){
		return (
			<div id="sale-timer-container">
				<span></span> {/* timer */}
				<p>hours left on sale items</p>
			</div>
		)
	}
}

export default SaleTimer