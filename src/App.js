import React, { useState } from 'react';

import AddTask from './components/AddTask.js';
import TaskList from './components/TaskList.js';

function App() {
	const [taskLists, setTaskList] = useState([]);


	const addTaskHanlder = (taskContent, index) => {
		setTaskList((prevTaksList) => {
			return [
				...prevTaksList,
				{
					key: Math.random().toString(),
					content: taskContent,
					index: index,
					isComplate: false
				},
			];
		});
	};
	

	return (
		<div>
			<AddTask onAddTask={addTaskHanlder}></AddTask>
			<TaskList setTask = {setTaskList} tasks={taskLists} ></TaskList>
		</div>
	);
}

export default App;
