import React from 'react';
import SearchPanel from '../search-panel';
import ItemFilter from '../item-filter'
const Header = ({complete, uncomplete, onSearch, filter, onFilter}) => {
	return (
		<header>
			<h1>Todo list</h1>
			<div >{`${complete} tasks done, ${uncomplete} more to do.`}</div>
			<nav className='mb-3'>
				<SearchPanel onSearch={onSearch}/>
				<ItemFilter filter={filter} onFilter={onFilter}/>

			</nav>
		</header>
	);
}
export default Header;