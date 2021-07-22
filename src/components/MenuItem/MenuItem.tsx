import Item from "../../models/Item";


interface Props {
        item: Item;
        onAdd: () => void;
        onRemove: () => void;
    }


function MenuItem({item, onAdd, onRemove}: Props) {

    return (
        <ul className="MenuItem">
            <li>
                <p>Name: {item.name}</p>
                <p>Description: {item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Calories: {item.calories}</p>
                <p>{item.vegetarian ? "Vegetarian" : "Not Vegetarian" }</p>
                <button type="button" onClick={ onAdd } >Add To Order</button>
                <button type="button" onClick={ onRemove }>Remove From Order</button>
            </li>
        </ul>
    )
}

export default MenuItem;