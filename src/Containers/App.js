import React, {Component} from 'react';
import CardList from '../Components/CardList';
import {robots} from '../robots';
import SearchBox from '../Components/SearchBox.js';
import Scroll  from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import Header from '../Components/Header.js';
import {setSearchField,requestRobots} from '../actions';
import {connect} from 'react-redux';

import './App.css'



const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}
class App extends Component {

	componentDidMount(){
		this.props.onRequestRobots();
	}

	render(){
			const {searchField, onSearchChange, robots, isPending} = this.props;
			const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase()); 
		})
		return isPending ? //if length 0 then display loading , else render robots
		<h1> Loading . . . </h1> 
		:
		(
			<div className = 'tc'>
				<Header/>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots = {filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);