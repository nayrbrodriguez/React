export function addCart(products) {
	// console.log('Add to Cart',products.name)
	// addCart is an ActionCreator, it needs to return an action, an object with a type property
	return {
		type: 'ADD_CART',
		payload: products
	};
}