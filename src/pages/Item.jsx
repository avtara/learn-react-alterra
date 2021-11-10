import style from './Item.module.css';
import { checkTodo, deleteTodo } from "../store/todoSlice";
import { useDispatch } from "react-redux";

const checkBoxStyle = {
    color: "red",
    marginLeft: 20,
    marginRight: 40,
    marginTop: 15
}



const Item = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className={style.todo}>
                <input type="checkbox" onClick={() => {
                    dispatch(checkTodo(item.id));
                }} defaultChecked={item.completed ? true : false} style={checkBoxStyle} />
                <div style={{ textDecoration: item.completed ? "line-through" : null, alignSelf: "center", flexGrow: "12" }}>{item.id}</div>
                <button onClick={() => {
                    dispatch(deleteTodo(item.id));
                }} className={style.button}>Delete</button>

            </div>
        </>
    )
}

export default Item