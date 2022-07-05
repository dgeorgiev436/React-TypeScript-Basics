import React, {useState} from 'react';
import TodoList from "./components/TodoList"
import NewTodo from "./components/NewTodo"

const App: React.FC = () => {
	
	const [todos, setTodos] = useState([{id: "t1", text: "Finish the course"}]);
	
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
