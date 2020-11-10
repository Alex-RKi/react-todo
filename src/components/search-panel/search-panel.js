import React, { Component } from 'react';

export default class SearchPanel extends Component {
	state = {
		text: ""
	}
	onSearch = (e) => {
		const frag = e.target.value;
		this.setState({text: frag})
		this.props.onSearch(frag)
	}


	render() {
		return (
			<input onChange={this.onSearch} 
			type='text' className="form-control mt-2" 
			placeholder='Filter'
			value={this.state.text} />
	);
	}
}

