import React from "react"


// Telling typescript what props we should expect
interface TodoListProps {
	items: {id: string, text: string}[];
}

// Adding TodoListProps inerface to define props
const TodoList: React.FC<TodoListProps> = (props) => {
	
	return (
		<ul>
			{props.items.map(todo => <li key={todo.id}>{todo.text}</li>)}
		</ul>
	)
}


export default TodoList;