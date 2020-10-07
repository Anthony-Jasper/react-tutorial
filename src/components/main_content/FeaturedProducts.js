import React from 'react'

import ProductBoxBasic from "./lower_tier/ProductBoxBasic"
import ProductBoxBasicData from "../../data/ProductBoxBasicData"

const FeaturedProducts = () => {
	const ProductBoxBasic1 = 
		ProductBoxBasicData.map(box => 
			<ProductBoxBasic 
				key={box.id} 
				src={box.src} 
				alt={box.alt} 
				heart_href={box.heart_href} 
				shop_href={box.shop_href} 
				page_href={box.page_href} 
				heart_icon={box.heart_icon} 
				shop_icon={box.shop_icon} 
				page_icon={box.page_icon}
				product_name={box.product_name} 
			/>
		)

	return (
		<div id="featured-section">
			<h2>featured products</h2>
			{ProductBoxBasic1}
		</div>
	)
}

export default FeaturedProducts