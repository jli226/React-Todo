import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import styled from "styled-components";

const FlexCenterContainer = styled.div`
  display: flex;
  // width: 90vw;
  // max-width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
const StyledTitle = styled.h1`
  font-size: 3rem;
  color: darkblue;
  font-family: "IBM Plex Mono", monospace;
  margin: 0 auto 0 auto;
`;

const tasks = [
  {}
  // {
  //   task: 'Organize Garage',
  //   id: 1528817077286,
  //   completed: false
  // },
  // {
  //   task: 'Bake Cookies',
  //   id: 1528817084358,
  //   completed: false
  // }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  addTodo = newTask => {
    const newTodo = {
      task: newTask,
      id: Date.now(),
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTodo]
    });
  };

  toggleCompleted = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  removeCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };

  render() {
    return (
      <FlexCenterContainer>
        <StyledTitle>Todo!</StyledTitle>
        <TodoForm
          addTodo={this.addTodo}
          removeCompleted={this.removeCompleted}
        />
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
        />
      </FlexCenterContainer>
    );
  }
}

export default App;
