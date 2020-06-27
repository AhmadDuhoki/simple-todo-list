import React from 'react';
import ToDoList from './components/ToDoList'

function App() {
  return (
    <>
      <ToDoList listName="Student" />
      <ToDoList listName="Instructor" />
    </>
  );
}

export default App;
