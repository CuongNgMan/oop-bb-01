import { Weapon } from './Weapon';

const SWORD_DAMAGE_ENHANCEMENT_RATE = 0.25;
export class Sword extends Weapon {
  static readonly defaultName = 'sword';
  private maxEffectiveEnhanceDamage: number = 0;

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(Sword.defaultName, baseDamage, baseDurability, value, weight);

    this.maxEffectiveEnhanceDamage = baseDamage * SWORD_DAMAGE_ENHANCEMENT_RATE;
  }

  polish(): void {
    this.increaseDamage();
  }

  private increaseDamage() {
    const newDamageModifier = this.getDamageModifier() + Weapon.MODIFIER_CHANGE_RATE;
    if (newDamageModifier < this.maxEffectiveEnhanceDamage) {
      this.setDamageModifier(newDamageModifier);
    } else {
      this.setDamageModifier(this.maxEffectiveEnhanceDamage);
    }
  }
}
