import React, { useState } from 'react';
import Input from './components/Input'
import List from './components/List'

function App() {
  const [list, setList] = useState([])
  const addItem = (item) => {
    setList([...list, item])
  }
  return (
    <>
      <Input listName="Student" addItem={addItem} />
      <List list={list} listName="Student" />
    </>
  );
}

export default App;
