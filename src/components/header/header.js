import React from 'react';
import SearchPanel from '../search-panel';
import ItemFilter from '../item-filter'
const Header = ({complete, uncomplete}) => {
	return (
		<header>
			<h1>Todo list</h1>
			<div >{`${complete} tasks done, ${uncomplete} more to do.`}</div>
			<nav className='mb-3'>
				<SearchPanel />
				<ItemFilter />

			</nav>
		</header>
	);
}
export default Header;