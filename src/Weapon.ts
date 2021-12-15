import { Item } from './Item';

export abstract class Weapon extends Item {
  static readonly MODIFIER_CHANGE_RATE = 0.05;

  private baseDamage: number;
  private damageModifier: number;
  private baseDurability: number;
  private durabilityModifier: number;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight);

    this.validateDurability(baseDurability);

    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.damageModifier = 0;
    this.durabilityModifier = 0;
  }

  private validateDurability(value: number) {
    if (value < 0 || value > 1) {
      throw new Error('Invalid baseDurability. Value should be in range [0,1]');
    }
  }

  use(): string {
    if (this.isWeaponBreak()) {
      return `You can't use the ${this.getName()}, it is broken.`;
    }

    this.decreaseDurabilityBy(Weapon.MODIFIER_CHANGE_RATE);

    const status = this.getWeaponStatus(this.getName());
    const weaponName = this.getName();
    const weaponDamage = this.getDamage().toFixed(2);

    return `You use the ${weaponName}, dealing ${weaponDamage} points of damage. ${status}`;
  }

  private isWeaponBreak() {
    return this.getDurability() <= 0;
  }

  private decreaseDurabilityBy(value: number) {
    const newDurabilityModifier = this.durabilityModifier - value;
    this.setDurabilityModifier(newDurabilityModifier);
  }

  private getWeaponStatus(weaponName: string) {
    return this.isWeaponBreak() ? `The ${weaponName} breaks.` : '';
  }

  localToString() {
    return `, Damage: ${this.getDamage().toFixed(2)}, Durability: ${(this.getDurability() * 100).toFixed(2)}%`;
  }

  getBaseDamage = () => this.baseDamage;
  getBaseDurability = () => this.baseDurability;
  getDamageModifier = () => this.damageModifier;
  getDurabilityModifier = () => this.durabilityModifier;

  setBaseDamage(baseDamage: number) {
    this.baseDamage = baseDamage;
  }
  setBaseDurability(baseDurability: number) {
    this.baseDurability = baseDurability;
  }
  setDamageModifier(dmgModifier: number) {
    this.damageModifier = dmgModifier;
  }
  setDurabilityModifier(drbModifier: number) {
    this.durabilityModifier = drbModifier;
  }

  getDamage = () => this.baseDamage + this.damageModifier;

  getDurability = () => this.baseDurability + this.durabilityModifier;

  abstract polish(): void;
}
