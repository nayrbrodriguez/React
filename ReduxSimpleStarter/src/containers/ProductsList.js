import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsReducer from '../reducers/ProductsReducer';
import { addCart } from '../actions/index';
import { bindActionCreators } from 'redux';

class ProductsList extends Component{
	renderList(){
		return this.props.products.map((products) => {
			return (
				<li 
				onClick={() => this.props.addCart(products)}
				key={products.name} 
				className= "list-group-item"> {products.name}</li>
			);
		});
	}
	
	render() {
		return(
			<ul className="list-group col-md-3">
			{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state){
	//Whatever is returned will show up as props inside of ProductsList
	return {
		products: state.products
	};
}

//anything returned from this function will end up as props on the productList container
function mapDispatchToProps(dispatch) {
	//Whenever addCart is called the result should be passed to all of our reducer

	return bindActionCreators({ addCart:addCart }, dispatch)
}

//promote productslist from a Component to a container it need to know
//about this new dispatch method, selectbook make it available as a prop 
export default connect (mapStateToProps,mapDispatchToProps)(ProductsList);