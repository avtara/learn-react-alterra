import { Component } from "react";
import style from './InputField.module.css'

class InputField extends Component {
    state = {
        todo: "",
        completed: false
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        const fieldIsFulFilled = this.state.todo
        if (fieldIsFulFilled) {
            const newData = {
                todo: this.state.todo,
                completed: this.state.completed
            }
            this.props.addTodo(newData)
            this.setState({
                todo: "",
                completed: false
            })
        }
        else {

        }
    }

    render() {
        return (
            <>
                <input className={style.textField} type="text" placeholder="Adding Todo" value={this.state.todo} name="todo" onChange={this.onChange}></input>
                <button onClick={this.onSubmit} className={style.button} disabled={this.state.todo.length < 1}>submit</button>
            </>
        )

    }
}

export default InputField