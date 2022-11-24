import React from "react";
import TodoItem from "./TodoItem";
import "./TodosList.css"


const TodosList = props => {

    return (
        <ul className="todos-list">
            {props.todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    deleteTodoProps={props.deleteTodoProps}
                    setUpdate={props.setUpdate}
                />
            ))}
        </ul>
    )
}

export default TodosList