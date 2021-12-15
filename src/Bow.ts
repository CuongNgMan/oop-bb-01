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
      this.setDurabilityModifier(1 - this.getBaseDurability());
    } else {
      this.setDurabilityModifier(newModifier);
    }
  }
}
