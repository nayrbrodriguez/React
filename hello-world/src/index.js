import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './style/index.css';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyA5xV-D0yhO_yymrZyouzYTVcc_pt0YuOw';

const App = () => {
	return (
		<div>bry
			<SearchBar />
		</div>
	); 
}

ReactDOM.render(<App />,document.getElementById('root'));
