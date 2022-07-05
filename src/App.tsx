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
		
		setTodos(prevTodos => {
			return [...prevTodos, newTodo]
		})
	}
	
	const todoDeleteHandler = (id: string) => {
		setTodos(prevTodos => {
			return prevTodos.filter(todo => todo.id !== id)
		})
	}
	
	return(
		<div>
			<NewTodo getUserInput={getUserInput}/>
			<TodoList items={todos} todoDeleteHandler={todoDeleteHandler}/>
		</div>
	)
}

export default App;
