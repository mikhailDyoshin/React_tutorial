import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid"

class TodoContainer extends React.Component{
    // Creating dictionary of the todos items
    state = {
        todos: [
          // {
          //   id: uuidv4(),
          //   title: "Setup development environment",
          //   completed: true
          // },
          // {
          //   id: uuidv4(),
          //   title: "Develop website and add content",
          //   completed: false
          // },
          // {
          //   id: uuidv4(),
          //   title: "Deploy to live server",
          //   completed: false
          // }
        ]
    };

    // This method handles changes which occur in his child component and aplly those changes to the state
    handleChange = (id) => {
      this.setState(prevState => ({
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo
        })
      }))
    }

    // This method deletes todo state
    delTodo = (id) => {
      this.setState({
        todos: [
          ...this.state.todos.filter(todo => { //filter function returns a new array with elements which id does't equal input id
            return todo.id !== id
          })
        ]
      })
    }

    // This method creates a new TodoItem component
    addTodoItem = (title) => {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
      }

      this.setState({
        todos: [...this.state.todos, newTodo]
      })
    }

    // The method changes todos state after updates in InputTodo-component while it's in editing mode
    setUpdate = (updatedTitle, id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.title = updatedTitle
          }
          return todo
        }),
      })
    }

    // The method downloads data from the local storage of the browser
    componentDidMount() {
      const temp = localStorage.getItem("todos")
      const loadedTodos = JSON.parse(temp)
      if (loadedTodos) {
        this.setState({
          todos: loadedTodos
        })
      }
    }

    // The method saves the todos state to browser's local storage
    componentDidUpdate(prevProps, prevState) {
      if (prevState !== this.state.todos) {
        const temp = JSON.stringify(this.state.todos)
        localStorage.setItem("todos", temp)
      }
    }

    // Showing all todos titles like a list on the page
    render(){
        return(
          <div className="container">
            <div className="inner">
                <Header />
                <InputTodo addTodoProps={this.addTodoItem}/>
                <TodosList 
                  todos={this.state.todos} 
                  handleChangeProps={this.handleChange}
                  deleteTodoProps={this.delTodo}
                  setUpdate={this.setUpdate}
                />
            </div>
          </div>

        )
    }
}

export default TodoContainer