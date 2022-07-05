import React, {useState} from 'react';
import TodoList from "./components/TodoList"
import NewTodo from "./components/NewTodo"

// Interface defining the structure of a todo object
import {Todo} from "./todo.model";

const App: React.FC = () => {
	
// 	Defining the struccture of the array
	const [todos, setTodos] = useState<{Todo}>([]);
	
	const getUserInput = (input: string) => {
		const id = Math.random().toString();
		
		const newTodo = {id: id, text: input}
		
		setTodos([...todos, newTodo])
	}
	
	return(
		<div>
			<NewTodo getUserInput={getUserInput}/>
			<TodoList items={todos}/>
		</div>
	)
}

export default App;
