import { Component, OnInit } from '@angular/core';
import { IronManService } from '../../services/superhero.service';
import { Superhero } from '../../models/superhero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  standalone: true,
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero!: Superhero;
  crimeMessage!: string;
  powersMessage!: string;
  ageMessage!: string;
  groupMessage!: string;

  constructor(private ironmanService: IronManService) {}

  ngOnInit(): void {
    this.hero = this.ironmanService.getHero();
    this.crimeMessage = this.ironmanService.fightCrime();
    this.powersMessage = this.ironmanService.displayPowers();
    this.ageMessage = this.ironmanService.ageHero();
    this.groupMessage = this.ironmanService.groupSH();
  }
}
