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
        this.props.addTodoProps(this.state.title)
        this.setState({ //Clears text input after form submission
            title: ""
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add Todo..."
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default InputTodo