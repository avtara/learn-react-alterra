import './item.css';

function Done({title}) {
    return (
        <div className="done">{title}</div>
    );
}

function List({title}) {
    return (
        <div className="list">{title}</div>
    )
}

function Item({title, status}) {
   return status ? <Done title={title}/> : <List title={title}/>;
}

export default Item;