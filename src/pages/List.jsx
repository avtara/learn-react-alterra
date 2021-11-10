import Item from "./Item"

const List = (props) => {
    const { data} = props;
    return (
        <div>
            {data.map((todo) =>
                <Item key={todo.id} item={todo}/>
            )}
        </div>
    )
}

export default List