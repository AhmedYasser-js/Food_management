import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private _HttpClient: HttpClient) { }


  getAllRecipe(data: any): Observable<any> {
    return this._HttpClient.get('Recipe', { params: data });
    // return this._HttpClient.get(`https://upskilling-egypt.com:443/api/v1/Recipe/?name=pasta%202&tagId=0&categoryId=579&pageSize=5&pageNumber=1`);
  }


}
