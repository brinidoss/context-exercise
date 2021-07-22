import { createContext } from "react";
import Item from "../models/Item";

export interface OrderContextModel {
    order: Item[];
    addItem: (item: Item) => void;
    removeItem: (id: number) => void;
}

const defaultValue: OrderContextModel = {
    order: [],
    addItem: () => {},
    removeItem: () => {}, 
}

export const OrderContext = createContext(defaultValue);