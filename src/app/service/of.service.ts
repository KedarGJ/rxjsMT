import { Injectable } from '@angular/core';
import { filter, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfService {

  of$ = of(1,2,3,4,5,6,7,8,9,10)
        .pipe(
          filter((num:number)=>{
            return num % 2 === 0
          })
        )

    skills$ = of("HTML","JS","CSS","Angular")
    .pipe(
      tap(skill=>{
        console.log(`Before Map ${skill}`)
      }),
      map(skill=>{
        return `Frontend Development Depends on ${skill}`
      }),
      tap(skill=>{
        console.log(`after map ${skill}`)
      })
    )

    ourInterval$ = new Observable((observer)=>{
      let count = 0;
      setInterval(()=>{
        observer.next(count)
        count++;
        // if(count === 5){
        //   observer.complete()
        // }
        if(count >10){
          observer.error(`The End`)
        }
      })
    })
  constructor() { }
}
