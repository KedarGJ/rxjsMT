import { Component, OnInit } from '@angular/core';
import { OfService } from 'src/app/service/of.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _ofservice : OfService
  ) { }

  ngOnInit(): void {
    this._ofservice.ourInterval$
    .subscribe(
      (num)=>{console.log(num)},
      (err)=>{console.log(err)},
      ()=>{console.log(`observable is completed`)}
    )
  }

}
