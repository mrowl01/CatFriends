import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component {

	render() {
		const {searchfield, searchChange} = this.props;
		return (
			<div className ='pa2'>
				<input className = "pa3 ba b--blue bg-lightest-blue searchBar"
				aria-label = 'Search Robots'
				type =' search' 
				placeholder = "Search" 
				onChange = {searchChange}
				/>

			</div>
		)
	}
}

export default SearchBox;