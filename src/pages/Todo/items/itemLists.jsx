import Item from "./item";

function ItemsList({data}) {
    console.log(data);
    return (
        <div className="wrapper">
            <Item title={data[0].title} status={data[0].completed}/>
            <Item title={data[1].title} status={data[1].completed}/>
            <Item title={data[2].title} status={data[2].completed}/>
            <Item title={data[3].title} status={data[3].completed}/>
        </div>
    );   
}

export default ItemsList;