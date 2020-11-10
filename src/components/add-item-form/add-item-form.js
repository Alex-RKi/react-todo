import React, { Component } from 'react';

export default class AddItemForm extends Component {

	state = {
		text: ''
	}
	saveInput = (e) => {
		this.setState({ text: e.target.value })
	}
	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAdd(this.state.text);
		this.setState({text: ''})
	};
	render() {
		const { text } = this.state;
		return (
			<form className='mt-3 d-flex flex-wrap' onSubmit={this.onSubmit}>
				<input onChange={this.saveInput} value={text}
					className='form-control'
					type='text' placeholder='Type new task here' required />
				<button className='btn btn-primary  w-100 mt-1'>Add</button>
			</form>
		);
	}
}
