import React from 'react';

export default function(props) {
	return (
		<div>
			<h1>{props.listName + 's list'}</h1>
			<ul>{props.list.map((elem) => <li>{elem}</li>)}</ul>
		</div>
	);
}
