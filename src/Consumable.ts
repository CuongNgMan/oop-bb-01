import { Item } from './Item';

// your code goes here
export abstract class Consumable extends Item {
  private consumed: boolean;
  private spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);

    this.spoiled = spoiled;
    this.consumed = false;
  }

  use(): string {
    if (this.isNotConsumed() && this.isNotSpoiled()) {
      return this.eat();
    }

    return `There is nothing left of the ${this.getName()} to consume.`;
  }

  setConsumed(value: boolean) {
    this.consumed = value;
  }

  isNotConsumed = () => !!this.consumed;

  isNotSpoiled = () => !!this.spoiled;

  abstract eat(): string;
}
