import React, {useRef} from "react"


const NewTodo: React.FC = () => {
	
// 	Use ref is assigned to an HTMLInputElement and its initial value is null
	const todoTextRef = useRef<HTMLInputElement>(null);
	
	const onSubmithandler = (e) => {
		e.preventDefault();
		const enteredText = todoTextRef.current!.value;
		console.log(enteredText)
		
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

