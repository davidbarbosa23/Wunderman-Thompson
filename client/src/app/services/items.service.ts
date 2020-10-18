import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Globals } from '../shared/globals';

import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient, private globals: Globals) {}

  getItems() {
    return this.http.get(this.globals.API_URI + '/items');
  }

  getItem(id: String): Observable<Item> {
    return this.http.get(`${this.globals.API_URI}/items/${id}`);
  }

  updateItem(id: String, updatedItem: Item): Observable<Item> {
    return this.http.put(`${this.globals.API_URI}/items/${id}`, updatedItem);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post(`${this.globals.API_URI}/items`, item);
  }

  deleteItem(id: Number) {
    return this.http.delete(`${this.globals.API_URI}/items/${id}`);
  }
}
