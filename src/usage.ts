import { Item } from './Item';

import { Inventory } from './Inventory';
import { Sword } from './Sword';
import { Pizza } from './Pizza';
import { ItemWeightComparator } from './ItemWeightComparator';
import { Bow } from './Bow';

// Create the inventory
const inventory: Inventory = new Inventory();

// Create a set of items
const a = new Sword(30.4219, 0.7893, 300, 2.032);
const b = new Sword(40, 0.7893, 200, 2);
const c = new Sword(40, 1, 100, 3);
const pizza: Item = new Pizza(12, false);

// Add the items to the inventory
inventory.addItem(a);
inventory.addItem(b);
inventory.addItem(c);
inventory.addItem(pizza);

console.log('Display the inventory');
console.log(inventory.toString());

console.log('Sort by natural order');
inventory.sort();

console.log('Display the inventory');
console.log(inventory.toString());

console.log('Sort by weight');
inventory.sort(new ItemWeightComparator());

console.log('Display the inventory');
console.log(inventory.toString());

// Use the sword
function verifyDurabilityUsage() {
  console.log(a.use());
  console.log(a.getDurability());
  console.log(a.use());
  console.log(a.getDurability());
}

// Verify Sword polish
function verifySwordPolish() {
  const perfectSword = new Sword(100, 1, 1000, 10);
  console.log(perfectSword.toString());
  let lastDmg;
  let newDmg;
  while (true) {
    lastDmg = perfectSword.getDamage();
    perfectSword.polish();
    newDmg = perfectSword.getDamage();

    if (lastDmg === newDmg) {
      console.log('Max damage', lastDmg, newDmg);
      console.log(perfectSword.toString());
      break;
    }
  }
}

// Verify Bow polish
function verifyBowPolish() {
  const bow = new Bow(30.12, 0.3789, 200, 2.005);
  console.log(bow.toString());
  let lastDrb;
  let newDrb;
  while (true) {
    lastDrb = bow.getDurability();
    bow.polish();
    newDrb = bow.getDurability();

    if (lastDrb === newDrb) {
      console.log('Max durability', lastDrb, newDrb);
      console.log(bow.toString());
      break;
    }
  }
}

//  Sword
function verifyBrokenSword() {
  const nearlyBrokenSword = new Sword(100, 0.08, 100, 10);
  console.log(nearlyBrokenSword.use());
  console.log(nearlyBrokenSword.use());
  console.log(nearlyBrokenSword.use());
}
