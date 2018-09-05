import React, {Component} from 'react';
import CardList from '../Components/CardList';
import {robots} from '../robots';
import SearchBox from '../Components/SearchBox.js';
import Scroll  from '../Components/Scroll';
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}
	onSearchChange =(event) =>{
		this.setState({searchfield:event.target.value});
	}
	componentDidMount(){
		fetch ('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json(); 
		}) .then (users=>{
			this.setState({robots:users});
		})
	}

	render(){
			const {robots, searchfield} = this.state;
			const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase()); 
		})
		return !robots.length ? //if length 0 then display loading , else render robots
		<h1> Loading . . . </h1> 
		:
		(
			<div className = 'tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots = {filteredRobots}/>
				</Scroll>
			</div>
		)
	}
}

export default App;