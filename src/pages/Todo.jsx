import { useState } from "react";
import style from './Todo.module.css'
import InputField from './InputField';
import List from './List';
import { NavbarTodo } from "./Navbar";

function Todo() {
    const [data, setData] = useState([])

    const deleteTodo = id => {
        setData((oldData) => oldData.filter((item) => item.id !== id))
    }

    const tambahTodo = (Todo) => {
        const newData = { id: Math.floor(Math.random() * 1000), ...Todo }
        setData((data) => [...data, newData])
    }

    const onChangeCheckBox = (id) => {
        let mapped = data.map(Todo => {
            return Todo.id === Number(id) ? { ...Todo, completed: !Todo.completed } : { ...Todo };
        });
        setData(mapped);
    }

    return (
        <>

            <NavbarTodo />
            <div className="App">
                <h1 className={style.title}>Todos</h1>
                <InputField addTodo={tambahTodo} />
                <List onChangeCheckBox={onChangeCheckBox} data={data} deleteTodo={deleteTodo} />
            </div>

        </>
    )
}

export default Todo;