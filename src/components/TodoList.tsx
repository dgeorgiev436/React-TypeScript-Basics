import React, {useState} from "react"
import "./TodoList.css"

// Telling typescript what props we should expect
interface TodoListProps {
	items: {id: string, text: string}[];
	todoDeleteHandler: (id: string) => void
}

// Adding TodoListProps inerface to define props
const TodoList: React.FC<TodoListProps> = (props) => {
	const [todo, setTodo] = useState<{id: string}>("");
	

	return (
		<ul>
			{props.items.map(todo => (
				<li key={todo.id}>
					<span>
						{todo.text}
					</span>
					<button onClick={props.todoDeleteHandler.bind(null, todo.id)}>DELETE TODO</button>
				</li>
			))}
		</ul>
	)
}


export default TodoList;