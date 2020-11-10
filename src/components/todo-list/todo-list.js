import React from 'react';
import TodoListItem from '../todo-list-item';


const TodoList = ({ todoData, onDelete, onDone, onImportant }) => {
	const tasks = todoData.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<li key={id} className='list-group-item list-group-item-action mt-1'>
				<TodoListItem
					{...itemProps}
					onDelete={() => onDelete(id)}
					onDone={() => onDone(id)}
					onImportant={() => onImportant(id)} />
			</li>
		);
	});

	return (
		<ul className="list-group">
			{tasks}
		</ul>
	);
}

export default TodoList;