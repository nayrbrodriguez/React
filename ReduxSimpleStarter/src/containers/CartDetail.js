import React, { Component } from 'react'; 
// import CartReducer from '../reducer/CartReducer';
import { connect } from 'react-redux';

class  CartPanel extends Component{


	render(){

		if (!this.prop.products) {
		return <div>Select a product to get started</div>;
		}

		return(
		<div>
			<h3>Cart</h3>
			<div>{this.props.products.name}</div>
		</div>
		);
	}
}

function mapStateToProps(state) {
	return{
		products: state.cart
	};
} 

export default connect (mapStateToProps)(CartPanel);