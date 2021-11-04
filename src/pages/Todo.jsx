import { v4 as uuidv4 } from 'uuid'
import { Component } from "react";
import style from './Todo.module.css'
import InputField from './InputField';
import List from './List';


class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: uuidv4(),
                    todo: "belajar event handling",
                    completed: true
                },
                {
                    id: uuidv4(),
                    todo: "belajar graphql",
                    completed: false
                }

            ]
        }
    }

    addTodo = (newTodo) => {
        const newTodolist = { id: uuidv4(), ...newTodo }

        this.setState({ data: [...this.state.data, newTodolist] })
    }

    onChangeCheckBox = (id) => {
        const itemChecked = this.state.data.map((item)=> item.id === id ? { ...item, completed: !item.completed} : item) 

        this.setState({data: itemChecked})
    }

    deleteTodo = (id) => {
        const filteredTodo = this.state.data.filter((item) => item.id !== id)

        this.setState({ data: filteredTodo })
    }

    render() {
        return (
            <>
                <h1 className={style.title}>Todos</h1>
                <InputField addTodo={this.addTodo} />
                <List onChangeCheckBox={this.onChangeCheckBox} data={this.state.data} deleteTodo={this.deleteTodo} />
            </>
        )
    }
}

export default Todo;