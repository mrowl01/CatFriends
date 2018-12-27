import React, {Component} from 'react';

class Card extends Component {
	render() {
		const {name,email,id} = this.props;
		return (
			<div className = 'tc bg-light-blue br3 pa3 ma2 b--solid b--red grow dib bw2 shadow-5'>
				<img alt = '' src ={`https://robohash.org/${id}?size=200x200`} />
				<div>
					<h2> {name} </h2>
					<p>  {email}  </p>
				</div>
			</div>
		) 
	}
}

export default Card; 