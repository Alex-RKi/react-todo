import React, { Component } from 'react';

export default class ItemFilter extends Component {
	buttons = [
		{name: 'all', label: 'All'},
		{name: 'active', label: 'Active'},
		{name: 'done', label: 'Done'},
	]

	render() {
		const { filter, onFilter } = this.props;
		const buttons = this.buttons.map(({name, label}) => {
			const active = filter === name;
			const classes = active ?  'btn btn-primary' : 'btn-outline-secondary';
			return (<button onClick={() => onFilter(name)} key={name} type='button' className={`btn ${classes}`}>{label}</button>);
		})
		return (
			<div className='btn-group mt-1'>
				{buttons}
			</div>
		);
	}
}

