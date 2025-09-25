import React, { useState } from 'react';
import './Todolist.css';

const TodoList = () =>{
const [todoList,setTodoList] = useState([]);
const[inputValue,setInputValue] = useState("");

const handleInputChange =(e) => {
    setInputValue (e.target.value);
}
const handleAddButton = () => {
    if(inputValue.trim() !==""){
        setTodoList([...todoList, inputValue]);
        setInputValue("");
    }
}

const handleDelete = (todo) => {
    const newTodoList = todoList.filter((value) => value !== todo);
    setTodoList(newTodoList);
};

    return(
        <div className="todo-container">
        <p>My Todo List !!</p>
        <div>
            <input type="text" placeholder="Add Todo" value={inputValue} onChange={handleInputChange} className="todo-input"/>
            <button onClick={handleAddButton} className="add-button">Add</button>
        </div>

        <ul className="todo-list">
            {todoList.map((todo, index) => (
                <li key={index} className="todo-item">{todo}
                <button onClick={() =>handleDelete(todo)} className="delete-button">{'X'}</button>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default TodoList;