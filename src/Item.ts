import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
  private id: number;
  private value: number;
  private name: string;
  private weight: number;

  constructor(name: string, value: number, weight: number) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.weight = weight;

    this.postInit();
  }

  static reset() {
    id = 0;
  }

  private postInit() {
    id += 1;
  }

  toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}` + this.localToString();
  }

  compareTo(other: Item): number {
    if (this.value > other.value) return 1;
    if (this.value < other.value) return -1;

    return this.compareByName(other.name);
  }

  private compareByName(name: string) {
    return this.name.toLowerCase().localeCompare(name.toLowerCase());
  }

  getId = () => this.id;
  getValue = () => this.value;
  getName = () => this.name;
  getWeight = () => this.weight;

  setValue = (price: number): void => {
    this.value = price;
  };

  setName = (name: string): void => {
    this.name = name;
  };

  setWeight = (weight: number): void => {
    this.weight = weight;
  };
  abstract use(): string;
  abstract localToString(): string;
}
