import React, { Component } from 'react';

export default class ItemFilter extends Component {

	render() {
		return (
			<div className='btn-group mt-1'>
				<button type='button' className='btn btn-outline-secondary'>All</button>
				<button type='button' className='btn btn-outline-secondary'>Active</button>
				<button type='button' className='btn btn-outline-secondary'>Done</button>
	
			</div>
		);
	}
}
