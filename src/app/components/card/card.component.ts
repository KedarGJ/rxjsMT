import { Component, Input, OnInit } from '@angular/core';
import { Icard } from 'src/app/models/cards.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() cardobj !: any
  constructor() { }

  ngOnInit(): void {
  }

}
