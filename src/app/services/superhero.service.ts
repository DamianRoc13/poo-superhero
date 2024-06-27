import { Injectable } from '@angular/core';
import { Superhero } from '../models/superhero.model';

@Injectable({
  providedIn: 'root'
})
export class IronManService {
  private hero: Superhero;

  constructor() {
    this.hero = new Superhero(
      'Tony Stark',
      'IronMan',
      ['Tencology skills', 'Armor resistance', 'Supersonic flight'],
      'New York',
      '40',
      'Avengers'
    );
  }

  getHero(): Superhero {
    return this.hero;
  }

  fightCrime(): string {
    return this.hero.fightCrime();
  }

  displayPowers(): string {
    return this.hero.displayPowers();
  }

  ageHero(): string {
    return this.hero.ageHero();
  }

  groupSH(): string {
    return this.hero.groupSH();
  }
}