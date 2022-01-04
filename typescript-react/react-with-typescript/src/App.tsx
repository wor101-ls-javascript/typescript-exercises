import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import AddToList from './components/AddToList';
import List from "./components/List";

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://ih1.redbubble.net/image.41228969.1708/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg",
      age: 36,
      note: "Allergic to staying on the same team"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to My Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
