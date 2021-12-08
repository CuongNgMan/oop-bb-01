// your code goes here
import { Weapon } from './Weapon';

const MAX_EFFECTIVE_DURABILITY = 1;

export class Bow extends Weapon {
  static readonly defaultName = 'bow';

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(Bow.defaultName, baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    this.increaseDurability();
  }
  private increaseDurability() {
    const newModifier = this.getDurabilityModifier() + Weapon.MODIFIER_CHANGE_RATE;
    const newEffectiveDurability = this.getBaseDurability() + newModifier;
    if (newEffectiveDurability > MAX_EFFECTIVE_DURABILITY) {
      // console.log('last', parseFloat((1 - parseFloat(this.getBaseDurability().toFixed(2))).toFixed(2)));
      // console.log('last', 1 - this.getBaseDurability());
      this.setDurabilityModifier(1 - this.getBaseDurability());
    } else {
      this.setDurabilityModifier(newModifier);
    }
  }
}
