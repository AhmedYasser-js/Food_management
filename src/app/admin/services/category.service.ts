import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient: HttpClient) { }


  getAllCategory(pageSize: number, pageNumber: number): Observable<any> {
    return this._HttpClient.get('Category', { params: { pageSize: pageSize, pageNumber: pageNumber } })
  }


  onAddCategory(data: string): Observable<any> {
    return this._HttpClient.post('Category', { name: data })
  }

  onEditCategory(data: any): Observable<any> {
    return this._HttpClient.put(`Category/${data.id}`, { name: data.name })
  }

  onDeleteCategory(id: number): Observable<any> {
    return this._HttpClient.delete(`Category/${id}`)
  }

}
