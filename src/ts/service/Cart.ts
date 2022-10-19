import Buyable from "../domain/Buyable";

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sumExcludeDiscount(): number {
    	return this._items.reduce((sumExcludeDiscount, item) => sumExcludeDiscount + item.price, 0);
    }

    sumIncludeDiscount(discount: number): number {
    	return this.sumExcludeDiscount() * discount / 100;
    }

    deleteItem(id: number): void {
    	const index = this._items.findIndex(item => item.id === id);
    	this._items.splice(index, 1);
    }
}
