import style from './Todo.module.css'
import InputField from './InputField';
import List from './List';
import { NavbarTodo } from "./Navbar";
import { useSelector, useDispatch} from "react-redux";
import { addTodo } from "../store/todoSlice";


function Todo() {
    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()
    console.log(todos);

    return (
        <>

            <NavbarTodo />
            <div className="App">
                <h1 className={style.title}>Todos</h1>
                <InputField addTodo={()=> {dispatch(addTodo())}} />
                <List data={todos} />
            </div>

        </>
    )
}

export default Todo;