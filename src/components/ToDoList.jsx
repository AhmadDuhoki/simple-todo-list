import React, { useState } from 'react';

const ToDoList = (props) => {
	const [ userInput, setUserInput ] = useState('');
	const [ list, setList ] = useState([]);

	const addItem = () => {
        setList([ ...list, userInput ]);
        setUserInput('');
	};

	return (
		<>
		<h1>{props.listName + 's list'}</h1>
		<input
			type="text"
			value={userInput}
			onChange={(e) => setUserInput(e.target.value)}
		/>
		<button onClick={() => addItem()}>{'Add ' + props.listName}</button>
		<ul>{list.map((elem) => <li>{elem}</li>)}</ul>
	</>
	);
};

export default ToDoList;