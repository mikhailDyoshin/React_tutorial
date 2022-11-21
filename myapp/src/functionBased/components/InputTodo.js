import React from "react";

class InputTodo extends React.Component {

    // The state that InputTodo component holds
    state = {
        title: ""
    }

    // onChange method can change the state of the component
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // The method handles form-submit event
    handleSubmit = (e) => {
        e.preventDefault() //prevents page reload after for submission (default behavior)
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title)
            this.setState({ //Clears text input after form submission
            title: ""
            })
        } else {
            alert("Please write item")
        }

        
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    type="text"
                    className="input-text" 
                    placeholder="Add Todo..."
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange}
                />
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputTodo