import { Consumable } from './Consumable';

export class Pizza extends Consumable {
  static readonly defaultName = 'pizza';
  static readonly defaultValue = 1;
  static readonly defaultWeight = 0.3;

  private numberOfSlices: number;
  private sliceEaten: number;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super(Pizza.defaultName, Pizza.defaultValue, Pizza.defaultWeight, spoiled);

    this.numberOfSlices = numberOfSlices;
    this.sliceEaten = 0;
  }

  eat(): string {
    if (this.isHavingSlicesToEat()) {
      this.consumeASlice();
      return this.constructLog();
    }

    return '';
  }

  private constructLog() {
    const log = `You eat the ${this.getName()}.`;
    if (this.isNotSpoiled()) {
      return log;
    } else {
      return `${log}\nYou feel sick.`;
    }
  }

  private isHavingSlicesToEat() {
    return this.sliceEaten < this.numberOfSlices;
  }

  private consumeASlice() {
    this.sliceEaten++;
    if (this.sliceEaten >= this.numberOfSlices) {
      this.setConsumed(true);
    }
  }

  localToString(): string {
    return '';
  }
}
