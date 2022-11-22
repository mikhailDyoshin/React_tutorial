import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = props => {
    /* Desctucturing the hook 
     (first item is the current state,
     second one - a function that allows to update the current state) 
    */
    const [inputText, setInputText] = useState({
        title: "",
    })

    const onChange = e => {
        setInputText({
            /* 
                without ...inputText a new value
                will overwrite an old one,
                that's why we should copy the last state 
                and only then add to it new values
            */
            ...inputText,
            [e.target.name]: e.target.value, 
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (inputText.title.trim()) {
            props.addTodoProps(inputText.title)
            setInputText({
                title: "",
            })
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
                value={inputText.title}
                /* 
                    The name attribute shoulde be the same
                    as the state name (i.e. title in this case)
                */
                name="title" 
                onChange={onChange}
            />
            <button className="input-submit">
                <FaPlusCircle 
                    style={{ 
                        color: "darkcyan", 
                        fontSize: "20px", 
                        marginTop: "2px" 
                    }}
                />
            </button>
        </form>
    )
}

export default InputTodo