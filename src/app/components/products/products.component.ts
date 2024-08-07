import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnDestroy {
  interval$ = interval(1000);
  intervalSubscription !: Subscription
  constructor() { }

  ngOnInit(): void {

    this.intervalSubscription = this.interval$
    .subscribe(res=>{
      console.log(res)
    })
  }

  ngOnDestroy(): void {
  this.intervalSubscription.unsubscribe();
  }

}
