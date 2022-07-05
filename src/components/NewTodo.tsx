import React, {useRef} from "react"

// Defines the expected props
type NewTodosProps = {
	getUserInput: (input: string) => void;
}

const NewTodo: React.FC<NewTodosProps> = (props) => {
	
// 	Use ref is assigned to an HTMLInputElement and its initial value is null
	const todoTextRef = useRef<HTMLInputElement>(null);
	
	const onSubmithandler = (event) => {
		event.preventDefault();
		const enteredText = todoTextRef.current!.value;
		console.log(enteredText)
		
		props.getUserInput(enteredText);
	}
	
	return(
		<form onSubmit={onSubmithandler}>
			<div>
				<label htmlFor="todo">Enter Todo</label>
				<input ref={todoTextRef} type="text" id="todo"></input>
			</div>
			<button type="submit">Add Todo</button>
		</form>
	)
}


export default NewTodo;

