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


    render() {
        return (
            <form>
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