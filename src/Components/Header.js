import React, { Component } from 'react';

class Header extends Component {
	shouldComponentUpdate(nextProps, nextState){
			return false
		}
	render(){
		return (
			<div>
			{console.log('header')}
			<h1> Friend Finder </h1>
			</div>
		)
	}
}

export default Header;