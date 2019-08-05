import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledRow = styled.div`
  height: 50px;
  // width: 200px;
  // border: 1px solid green;
  padding-top: 20px;
  text-align: center;
`;

const StyledTask = styled.p`
  font-size: 2rem;
  color: darkblue;
  font-family: "IBM Plex Mono", monospace;
  width: 300px;
`;
const Todo = props => {
  return (
    <div
      className={`task${props.completed ? " completed" : ""}`}
      onClick={() => props.toggleCompleted(props.id)}
    >
      <StyledRow>
        <StyledTask>{props.task}</StyledTask>
      </StyledRow>
    </div>
  );
};

export default Todo;
