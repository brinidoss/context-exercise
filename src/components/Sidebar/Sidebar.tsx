import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

function Sidebar() {
    const { order, addItem, removeItem } = useContext(OrderContext);

    let total = 0;

    for (const item of order) {
        total += item.price;
    }

    return(
        <aside className="Sidebar">
              { order.map((item, id) => 
                    <p>{item.name} - {item.price}</p>
                ) }
            <p>Total: { total } </p>
        </aside>
    );
};


export default Sidebar;