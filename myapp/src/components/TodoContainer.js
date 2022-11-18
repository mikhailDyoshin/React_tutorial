import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";


class TodoContainer extends React.Component{
    // Creating dictionary of the todos items
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
    };

    // This method handles changes which occur in his child component
    handleChange = (id) => {
      console.log("clicked", id)
    }

    // Showing all todos titles like a list on the page
    render(){
        return(
            <div>
                <Header />
                <TodosList todos={this.state.todos} handleChangeProps={this.handleChange}/>
            </div>
        )
    }
}

export default TodoContainer