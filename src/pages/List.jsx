import Item from "./Item"

const List = (props) => {
    const { data, deleteTodo, onChangeCheckBox } = props

    return (
        <div>
            {data.map((todo) =>
                <Item key={todo.id} item={todo} deleteTodo={deleteTodo} onChangeCheckBox={onChangeCheckBox}/>
            )}
        </div>
    )
}

export default List