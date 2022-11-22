import React, { useState, useEffect } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid"


// Creating TodoContainer-component function based
const TodoContainer = () => {

  // Using useState-hook
  const [todos, setTodos] = useState(getInitialTodos())

  /* 
    This handleChange-method handles changes
    which occur in his child component
    and aplly those changes to the state
  */
    const handleChange = id => {
      setTodos(prevState => 
        prevState.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        }))
    }

    // The delTodo method deletes todo 
    const delTodo = id => {
      setTodos([
        ...todos.filter(todo => {
          return todo.id !== id
        }),
      ])
    }

    // The addTodoItem creates a new todo
    const addTodoItem = title => {

      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
      }

      setTodos([...todos, newTodo])
    }

    // The setUpdate method updates a state when todo-item takes changes while in editing mode
    const setUpdate = (updatedTitle, id) => {
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            todo.title = updatedTitle
          }
          return todo
        })
      )
    }

    // This method get saved todos from the local storage
    function getInitialTodos() {
      //getting stored items
      const temp = localStorage.getItem("todos")
      const savedTodos = JSON.parse(temp)
      return savedTodos || []
    }

    // This method stores todos whenever they are updated
    useEffect(() => {
      const temp = JSON.stringify(todos)
      localStorage.setItem("todos", temp)
    }, [todos])

    // Showing all todos like a list on the page
    return(
      <div className="container">
        <div className="inner">
            <Header />
            <InputTodo addTodoProps={addTodoItem}/>
            <TodosList 
              todos={todos} 
              handleChangeProps={handleChange}
              deleteTodoProps={delTodo}
              setUpdate={setUpdate}
            />
        </div>
      </div>

    )
}

export default TodoContainer