import { useState } from "react";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import styled from "@emotion/styled";
import TaskProvider from "./contexts/TaskProvider";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

//요구사항
//1. Emoji 리스트를 보여준다.
//2. 검색을 통해 필터링한다.
//3.
function App() {
  return (
    <TaskProvider>
      <Container>
        <NewTaskForm />
        <TaskList css={{ marginTop: "16px" }} />
      </Container>
    </TaskProvider>
  );
}

export default App;
