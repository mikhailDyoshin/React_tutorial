import React from "react";
import styles from "./TodoItem.module.scss"

class TodoItem extends React.Component{

    // State contents information about TodoItem mode: edit or view
    state = {
        editing: false,
    }

    // The method change switch editing state from false to true
    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }

    // The method exits editing mode
    handleUpdatedDone = (event) => {
        if (event.key === "Enter") {
            this.setState({editing: false})
        }
    }

    render() {

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }

        // Destructuring
        const { completed, id, title } = this.props.todo

        // Logic than dinamically hides/display the todo's text field
        let viewMode = {}
        let editMode = {}

        if (this.state.editing) { // When editing mode is on, todo will be hidden and text-input will be displayed
            viewMode.display = "none"
        } else { // Otherwise todo will be displayed and text-input will be hidden
            editMode.display = "none"
        }
        // ***********************************************************

        return (
            <li className={styles.item}>
                {/* double-click event calls handleEditing method described above */}
                <div onDoubleClick={this.handleEditing} style={viewMode}> 
                    <input 
                        type="checkbox"
                        className={styles.checkbox} 
                        checked={completed}
                        onChange={() => this.props.handleChangeProps(id)}
                    />
                    <button onClick={() => this.props.deleteTodoProps(id)}>
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
                        this.props.setUpdate(e.target.value, id)
                    }}
                    onKeyDown={this.handleUpdatedDone} 
                />
            </li>
        )
    } 
}

export default TodoItem