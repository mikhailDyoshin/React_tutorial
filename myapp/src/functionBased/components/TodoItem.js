import React, { useState, useEffect, useRef } from "react";
import { FaTrash } from "react-icons/fa"
import classNames from "classnames"
import "./TodoItem.css"


const TodoItem = props => {

    // Taking state and methods
    const [editing, setEditing] = useState(false)

    const [deleting, setDeleting] = useState(false)

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

    const deletingStyle = classNames("item", {
        "deleting" : deleting},
        "", !deleting)

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

    const deleteOnClick = (id) => {
        handleDelete()
        props.deleteTodoProps(id)
    }

    let deletingMode = {}

    if (deleting) {
        deletingMode.textDecoration = "underline"
    }

    const handleDelete = () => {
        setDeleting(true)
    }


    useEffect( () => console.log("Mounted/Updated"), [title, completed] );

    const componentWillUnmount = useRef(false)

    useEffect(() => {
        return () => {
            componentWillUnmount.current = true
        }
    }, [])

    useEffect(() => {
        const deleted = componentWillUnmount.current
        
        return () => {
            if (deleted) {
                console.log("Unmounted")
            }
        }
    }, [])

    return (
        <li className={deletingStyle}>
            {/* double-click event calls handleEditing method described above */}
            <div onDoubleClick={handleEditing} style={viewMode}> 
                <input 
                    type="checkbox"
                    className="checkbox" 
                    checked={completed}
                    onChange={() => props.handleChangeProps(id)}
                />
                <button onClick={() => {deleteOnClick(id)}}>
                    <FaTrash 
                        style={{ 
                            color: "orangered", 
                            fontSize: "16px" 
                        }}
                    />
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
                className="textInput"
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