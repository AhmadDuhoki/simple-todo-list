import React, { useState } from 'react';

export default function(props) {
	const [ input, setInput ] = useState('');

	return (
		<>
			<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
			<button onClick={() => props.addItem(input)}>{'Add ' + props.listName}</button>
		</>
	);
}
