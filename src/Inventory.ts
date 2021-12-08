import { ItemComparator } from './ItemComparator';
import { Item } from './Item';

export class Inventory {
  private items: Item[] = [];

  constructor() {}

  addItem(item: Item) {
    this.items.push(item);
  }

  sort(comparator?: ItemComparator) {
    if (!comparator) {
      this.items = this.sortItemByValue();
    } else {
      this.items = this.sortItemByWeight(comparator);
    }
  }

  private sortItemByValue(): Item[] {
    return this.items.sort((a, b) => a.compareTo(b));
  }

  private sortItemByWeight(comparator: ItemComparator): Item[] {
    return this.items.sort((a, b) => comparator.compare(a, b));
  }

  toString(): string {
    return this.items.map((i) => i.toString()).join('\n');
  }
}
