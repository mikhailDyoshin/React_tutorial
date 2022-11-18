import React from "react";

class InputTodo extends React.Component {

    // The state that InputTodo component holds
    state = {
        title: ""
    }

    // onChange method logs a "hello" word in the console when form's input changes
    onChange = (e) => {
        console.log("hello")
    }


    render() {
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default InputTodo