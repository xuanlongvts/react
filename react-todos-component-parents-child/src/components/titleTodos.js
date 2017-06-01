import React from 'react';

const titleTodo = ({dataListTodos}) => (
	<div className="title">
		<h3>Number todo: {dataListTodos.length}</h3>
	</div>
)

export default titleTodo;