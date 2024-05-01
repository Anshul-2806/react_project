// import logo from './logo.svg';
import './App.css';

// rfc use kiya isliye 
import Header from "./myComponents/Header";
import Todos from "./myComponents/Todos";
// import Todo from "./myComponents/TodoItem";
// import TodoItem from "./myComponents/TodoItem";
// rafc use kiya isliye { } ka use kiya gya
import { Footer } from "./myComponents/Footer";


function App() {
  // let myVar = 28;

  const onDelete = ()=>{
    console.log("ondel");
  }

  let todos = [
    {
      sno: 1,
      title: "Go to the ofc",
      desc: "You need to go the ofc to complete work!"
    },
    {
      sno: 2,
      title: "Go to the market",
      desc: "You need to go the market to buy the vegies!"
    },
    {
      sno: 3,
      title: "Go to the ofc",
      desc: "You need to go the ofc to complete work!"
    },
    {
      sno: 4,
      title: "Go to the market",
      desc: "You need to go the market to buy the vegies!"
    },
    {
      sno: 5,
      title: "Go to the ofc",
      desc: "You need to go the ofc to complete work!"
    },
    {
      sno: 6,
      title: "Go to the market",
      desc: "You need to go the market to buy the vegies!"
    }
  ]
  return (
    <>
      <Header title="Todos List" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
