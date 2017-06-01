import React from 'react';

const listTodos = ({dataListTodos}) => (
	<ul className="listTodos">
		{dataListTodos.map((item, key) => (
			<li key={key}><a href="javascript:;">{item}</a></li>
		))}
	</ul>
)

export default listTodos;