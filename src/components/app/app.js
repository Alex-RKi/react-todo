import React, { Component } from 'react';
import Header from '../header';
import TodoList from '../todo-list';
import AddItemForm from '../add-item-form';

export default class App extends Component {
	maxId = 100;
	state = {
		todoData: [
			this.createTask('Task'),
			this.createTask('Important task'),
			this.createTask('Done task')
		],
		frag: 'Task'
	}

	findIndex = (id) => {
		return this.state.todoData.findIndex((el) => el.id === id);
	}
	createTask(text) {
		return {
			content: text,
			important: false,
			id: this.maxId++,
			done: false
		}
	}
	updateTask(task, param) {
		return { ...task, [param]: !task[param] }
	}
	updateTaskList(id, param, list) {
		const index = this.findIndex(id);
		return [
			...list.slice(0, index),
			this.updateTask(list[index], param),
			...list.slice(index + 1)
		]
	}

	onDelete = (id) => {
		this.setState(({ todoData }) => {
			const index = this.findIndex(id);
			return {
				todoData: [
					...todoData.slice(0, index),
					...todoData.slice(index + 1)
				]
			}
		});
	}
	onAdd = (text) => {
		this.setState(({ todoData }) => {
			return {
				todoData: [
					...todoData,
					this.createTask(text)
				]
			}
		})
	};
	onImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.updateTaskList(id, 'important', todoData)
			}
		})
	};
	onDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.updateTaskList(id, 'done', todoData)
			}
		})

	};
	search(list, frag) {
		if(frag.length === 0) return list;
		return list.filter((item) => {
			return item.content.indexOf(frag) > -1;
		})
	}

	render() {
		const { todoData, frag } = this.state;
		const filteredList = this.search(todoData, frag);
		const complete = todoData.filter((task) => task.done).length;
		const uncomplete = todoData.length - complete;
		return (
			<div className='jumbotron'>
				<Header complete={complete} uncomplete={uncomplete}/>
				<TodoList
					onDelete={this.onDelete}
					onDone={this.onDone}
					onImportant={this.onImportant}
					todoData={filteredList} />
				<AddItemForm onAdd={this.onAdd} />
			</div>
		);
	}
}

