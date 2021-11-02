import Navbar from './navbar/index';
import ItemsList from './items/itemLists';

export default function TodoPage({todos}) {
    return (
        <>
            <Navbar />
            <ItemsList data={todos}/>
        </>
    )
}