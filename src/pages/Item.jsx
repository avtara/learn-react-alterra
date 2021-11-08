import style from './Item.module.css';

const checkBoxStyle = {
    color: "red",
    marginLeft: 20,
    marginRight: 40,
    marginTop: 15
}

const Item = ({ item, deleteTodo, onChangeCheckBox }) => {
    return (
        // <tr>
        //     <td><input type="checkbox" onClick={() => onChangeCheckBox(item.id)} defaultChecked={item.completed ? true : false} style={checkBoxStyle} /></td>
        //     <td style={{ textDecoration: item.completed ? "line-through" : null }}>{item.todo}</td>
        //     <td><h5 onClick={() => deleteTodo(item.id)} style={deleteButtonStyle}>X</h5></td>
        // </tr>

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