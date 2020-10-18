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

  getAllItems() {
    return this.http.get(this.globals.API_URI + '/items/all');
  }

  getTrashItems() {
    return this.http.get(this.globals.API_URI + '/items/trash');
  }

  getItem(id: String): Observable<Item> {
    return this.http.get(`${this.globals.API_URI}/items/${id}`);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post(`${this.globals.API_URI}/items`, item);
  }

  updateItem(id: String, updatedItem: Item): Observable<Item> {
    return this.http.put(`${this.globals.API_URI}/items/${id}`, updatedItem);
  }

  deleteItem(id: Number) {
    return this.http.delete(`${this.globals.API_URI}/items/${id}`);
  }

  deleteHardItem(id: Number) {
    return this.http.delete(`${this.globals.API_URI}/items/${id}/force`);
  }

  restoreItem(id: String) {
    return this.http.patch(`${this.globals.API_URI}/items/${id}`, {});
  }
}
