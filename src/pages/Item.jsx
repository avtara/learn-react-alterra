import style from './Item.module.css';

const checkBoxStyle = {
    color: "red",
    marginLeft: 20,
    marginRight: 40,
    marginTop: 15
}

const Item = ({ item, deleteTodo, onChangeCheckBox }) => {
    return (
        <>
            <div className={style.todo}>
                <input type="checkbox" onClick={() => onChangeCheckBox(item.id)} defaultChecked={item.completed ? true : false} style={checkBoxStyle} />
                <div style={{ textDecoration: item.completed ? "line-through" : null, alignSelf: "center", flexGrow: "12" }}>{item.todo}</div>
                <button onClick={() => { deleteTodo(item.id) }} className={style.button}>Delete</button>

            </div>
        </>
    )
}

export default Item