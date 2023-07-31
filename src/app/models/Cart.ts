import { CartItem } from "./CartItem";


export class Cart {
    items:CartItem[] = [];

    get totalValue(): number {
        let sum = 0;
        this.items.forEach(item => sum += item.totalPrice);

        return sum;
    }
}