import React, { useState } from 'react';

import styled from './TaskList.module.css';

import Card from '../UI/Card';

const TaskList = (props) => {
	const [checked, setChecked] = useState(true);

	
	const handleChecked = (id) => {
		console.log(id);

		const task = props.tasks.filter((el) => {
			if (el.key === id) {
				setChecked(!checked);
			}
		});

		console.log(task);
	};


   

	const deleteTask = (task) => {
		console.log(task);

      
		const newListItem = props.tasks.filter((el) => el.key !== task);
		props.setTask(newListItem);
	};

	const completedTodo = (id) => {
		let updatesTodos = props.tasks.map((el) => {
			console.log(el.key);
			if (el.key === id) {
				el.isComplate = !el.isComplate;
                
				console.log(el.isComplate);
			}
			return el;
		});
		props.setTask(updatesTodos);
		
	};

	return (
		<Card className={`${styled.list}`}>
			<ul>
				{props.tasks.map((task) => {
					console.log(task.isComplate);
					return (
						<li
							className={
								task.isComplate ? styled.completed : ''
							}
							key={task.key}
						>
							{task.index}
							<div
								className={
									task.isComplate ? styled.completed : styled.noncompleted
								}
								key={task.key}
								onClick={() => completedTodo(task.key)}
							>
								{' '}
								{task.content}
							</div>

							<div className={styled.actions}>
								<input
									onChange={() => completedTodo(task.key)}
									checked={task.isComplate ? checked : !checked}
									className={styled.checkbox}
									type='checkbox'
								></input>
								<button onClick={() => deleteTask(task.key)}></button>
							</div>
						</li>
					);
				})}
				
			</ul>
		</Card>
	);
};

export default TaskList;
