import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component{
	render(){
		const {robots} = this.props;
		const cardsArray = robots.map ((items,i) => {
			return <Card key = {robots[i].id} id = { robots[i].id} name= {robots[i].name} email = {robots[i].email} />
		})
		return(
			<div>
				{cardsArray}
			</div>
		)
	}
}

export default CardList ;