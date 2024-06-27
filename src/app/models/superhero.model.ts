export class Superhero {
    constructor(
      public name: string,
      public alias: string,
      public powers: string[],
      public city: string,
      public age: string,
      public groupSuperHero: string
    ) {}
  
    fightCrime(): string {
      return `${this.alias} is fighting crime in ${this.city}!`;
    }
  
    displayPowers(): string {
      return `${this.alias} has the following powers: ${this.powers.join(', ')}.`;
    }

    ageHero(): string {
      return `${this.alias} is ${this.age} years old`;
    }

    groupSH(): string {
      return `${this.alias} is in the group of superheros: ${this.groupSuperHero}`;
    }
  }
  