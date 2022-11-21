import React, { useState } from "react";

const InputTodo = props => {
    /* Desctucturing the hook 
     (first item is the current value,
     second one - a function that allows to update the current value) 
    */
    const [title, setTitle] = useState("")

    const onChange = e => {
        setTitle(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (title.trim()) {
            props.addTodoProps(title)
            setTitle("")
        } else {
            alert("Please write item")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input 
                type="text"
                className="input-text"
                placeholder="Add todo..."
                value={title}
                onChange={onChange}
            />
            <button className="input-submit">Submit</button>
        </form>
    )
}

export default InputTodo