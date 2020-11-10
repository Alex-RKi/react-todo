import React from 'react';
import './todo-list-item.css';

 const TodolistItem = (props) => {

		const { content, onDelete, onImportant, onDone, done, important } = props;

		let classes = "d-flex";
		if (important) classes += " text-info font-weight-bold";
		if (done) classes += ' done';



		return (
			<span className={classes}>
				

				<button type="button"
					className="btn btn-outline-info btn-sm  mr-2"
					onClick={onImportant}>
					<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-exclamation" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
					</svg>
				</button>
				<button type="button" className="btn btn-outline-danger btn-sm mr-3"
				onClick={onDelete}>
					<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
						<path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
					</svg>
				</button>
				<span className='task' onClick={onDone}>
					{content}
				</span>
			</span>
		);
	
}
export default TodolistItem;