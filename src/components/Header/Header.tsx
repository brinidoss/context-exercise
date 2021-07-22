import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import './Header.css';


function Header() {
    const { order, addItem, removeItem } = useContext(OrderContext);
    return (
        <header className="Header">
            <h1>Sunny Side Up</h1>
            <p>Order Count: { order.length }</p>
        </header>
    )
};

export default Header;