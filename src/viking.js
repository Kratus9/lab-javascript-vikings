// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this. strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(dmg) {
        this.health = this.health - dmg
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(dmg) {
        this.health = this.health - dmg
        if (this.health > 0) {
            return `${this.name} has received ${dmg} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(dmg) {
        this.health = this.health - dmg
        if ( this.health > 0) {
            return `A Saxon has received ${dmg} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        let vikingArmy = []
        let saxonArmy = []
    }
    addViking(Viking) {
        // vikingArmy.push(Viking)
        vikingArmy++
    }
    addSaxon(Saxon) {
        // saxonArmy.push(Saxon)
        saxonArmy++
    }
    vikingAttack() {
        Saxon.receiveDamage = Viking.strength
        if (Saxon.health <= 0) {
            saxonArmy--
        }
        return `${Saxon.health} - ${this.vikingAttack()}`
    }
    saxonAttack() {
        Viking.receiveDamage = Saxon.strength
        if (Viking.health <= 0) {
            vikingArmy--
        }
        return `${Viking.health} - ${this.saxonAttack()}`
    }
    showStatus() {
        if (saxonArmy === 0) {
            return `Vikings have won the war of the century!`
        }
        else if (vikingArmy === 0) {
            return `Saxons have fought for their lives and survived another day ...`
        }
        else if (saxonArmy >= 1 && vikingArmy >= 1) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}