import { ReactNode, useState } from "react";
import Item from "../models/Item";
import { OrderContext } from "./OrderContext";

export function OrderContextProvider({children} : {children: ReactNode}) {
    const [order, setOrder] = useState<Item[]>([
        
            // {
            //   id: 1,
            //   name: "Chicken and Waffles",
            //   description:
            //     "Fluffy waffles topped with lightly breaded chicken and maple syrup",
            //   price: 7.5,
            //   vegetarian: false,
            //   calories: 1100,
            // },
            // {
            //   id: 2,
            //   name: "Eggs benedict",
            //   description:
            //     "English muffin, each topped with Canadian bacon, a poached egg, and hollandaise sauce.",
            //   price: 6.75,
            //   vegetarian: false,
            //   calories: 550,
            // },
            // {
            //   id: 3,
            //   name: "Avocado Toast",
            //   description:
            //     "Smashed avocado, cojita cheese, shaved veg, cilantro, green chilli, watercress",
            //   price: 10.75,
            //   vegetarian: true,
            //   calories: 640,
            // },
            // {
            //   id: 4,
            //   name: "Beans on Toast",
            //   description:
            //     "Roasted mushrooms, poached egg, sweet peppers, pistachios, cashew butter",
            //   price: 9.25,
            //   vegetarian: false,
            //   calories: 800,
            // },
            // {
            //   id: 4,
            //   name: "Hash wrap",
            //   description:
            //     "Potato hash, smoked pork belly, egg, kale salad, bagna cauda sauce",
            //   price: 10.0,
            //   vegetarian: false,
            //   calories: 875,
            // },
            // {
            //   id: 5,
            //   name: "Cinnamon Roll",
            //   description:
            //     "Freshly baked rolls made from scratch topped with vanilla frosting",
            //   price: 4.5,
            //   vegetarian: true,
            //   calories: 970,
            // },
            // {
            //   id: 6,
            //   name: "Lox Bagel",
            //   description:
            //     "Smoked salmon, cream cheese and capers on top of a freshly baked sesame seed bagel",
            //   price: 8.5,
            //   vegetarian: false,
            //   calories: 1050,
            // },
    ]);

    function addItem(item: Item): void {
      setOrder(prevOrder => [...prevOrder, item]);
    }

    function removeItem(id: number) {
      setOrder(prevOrder => [...prevOrder.slice(0, id), ...prevOrder.slice(id+1)]);
    }

    return (
        <OrderContext.Provider value={{ order, addItem, removeItem }}>
            {children}
        </OrderContext.Provider>
    );

}