import React from 'react'

class ProductBoxBasic extends React.Component {
	render(){
		return (
			<div className="featured-product-box">
				<img src={this.props.src} alt={this.props.alt}></img>
				<div className="featured-product-quicklinks">
					<a href={this.props.heart_href} target="">
						<i className="icon">{this.props.heart_icon}</i>
					</a>
					<a href={this.props.shop_href} target="">
						<i className="icon">{this.props.shop_icon}</i>
					</a>
					<a href={this.props.page_href} target="">
						<i className="icon">{this.props.page_icon}</i>
					</a>
				</div>
				<p>{this.props.product_name}</p>
			</div>
		)
	}
}

export default ProductBoxBasic