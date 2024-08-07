import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icard } from '../models/cards.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
postsUrl : string = `${environment.baseUrl}/posts`
  constructor(
    private http : HttpClient
  ) { }


  fetchAllposts(): Observable<Array<Icard>>{
   return this.http.get<Array<Icard>>(this.postsUrl)
  }
}
