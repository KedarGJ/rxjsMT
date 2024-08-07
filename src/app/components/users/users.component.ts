import { Component, OnInit } from '@angular/core';

import { Icard } from 'src/app/models/cards.interface';
import { OfService } from 'src/app/service/of.service';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // cardsArr : Array<Icard> = cards
  cardsArr!: Array<Icard>;
  constructor(
    private _ofService : OfService,
    private _postsService : PostsService
  ) { }

  ngOnInit(): void {
    // this._ofService.of$
    // .subscribe(num => {
    //   console.log(num)
    // })

    this._ofService.skills$
    .subscribe(
      (skill)=>{
        console.log(`${skill}`)
      }
    )
    this._postsService.fetchAllposts()
    .subscribe(res=>{
      console.log(res)
      this.cardsArr=res
    }
    
    )
    
  }


}
