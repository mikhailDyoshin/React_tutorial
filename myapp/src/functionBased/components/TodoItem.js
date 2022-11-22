import React, { useState, useEffect } from "react";
import styles from "./TodoItem.module.scss"


const TodoItem = props => {

    // Taking state and methods
    const [editing, setEditing] = useState(false)

    // Switching to editing mode
    const handleEditing = () => {
        setEditing(true)
    }

    // Switching back to view mode
    const handleUpdatedDone = (event) => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    // Destructuring
    const { completed, id, title } = props.todo

    // Logic than dinamically hides/display the todo's text field
    // **********************************************************
    let viewMode = {}
    let editMode = {}

    if (editing) { // When editing mode is on, todo will be hidden and text-input will be displayed
        viewMode.display = "none"
    } else { // Otherwise todo will be displayed and text-input will be hidden
        editMode.display = "none"
    }
    // ***********************************************************

    // The method called any time a TodoItem is going to be unmounted
    useEffect(() => {
        return () => {
            console.log("Cleaning up...")
        }
    }, [])

    return (
        <li className={styles.item}>
            {/* double-click event calls handleEditing method described above */}
            <div onDoubleClick={handleEditing} style={viewMode}> 
                <input 
                    type="checkbox"
                    className={styles.checkbox} 
                    checked={completed}
                    onChange={() => props.handleChangeProps(id)}
                />
                <button onClick={() => props.deleteTodoProps(id)}>
                    Delete
                </button>

                {/* If todo-item is completed 
                styles in the completedStyle constant 
                will be applied, else there will be no styles */}
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </div>
            <input 
                type="text" 
                style={editMode} 
                className={styles.textInput}
                value={title}
                onChange={e => {
                    props.setUpdate(e.target.value, id)
                }}
                onKeyDown={handleUpdatedDone} 
            />
        </li>
    )
}


export default TodoItem