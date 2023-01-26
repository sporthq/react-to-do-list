import React, { useState } from 'react';

import styled from './AddTask.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
const AddTask = (props) => {
	const [enteredTask, setEnteredTask] = useState('');
	

	const [error, setError] = useState('');

	const inputTaskValue = (e) => {
		setEnteredTask(e.target.value);
		
	};
	const addTaskHandler = (e) => {
		e.preventDefault();

		if (enteredTask.trim().length === 0) {
			return setError('You must provide a task.');
		}
		
	
		
		props.onAddTask(enteredTask);
		setEnteredTask('');
		setError('')
	};

	return (
		<Card className={styled.input}>
			<form onSubmit={addTaskHandler} className={styled.form}>
				<input
					value={enteredTask}
					onChange={inputTaskValue}
					type='text'
				></input>
				<Button type='submit'>Add Task</Button>
				{error && <p>{error}</p>}
			</form>
		</Card>
	);
};

export default AddTask;
