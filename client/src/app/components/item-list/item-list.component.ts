import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/Item';

import { Globals } from '../../shared/globals';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @HostBinding('class') classes = 'itemList row';

  items: Item[] = [];
  errors = null;

  constructor(
    private itemsService: ItemsService,
    public globals: Globals,
    public router: Router
  ) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemsService.getItems().subscribe(
      (result: []) => {
        this.items = result;
      },
      (error) => this.handleError(error)
    );
  }

  getAllItems() {
    this.itemsService.getAllItems().subscribe(
      (result: []) => {
        this.items = result;
      },
      (error) => this.handleError(error)
    );
  }

  getTrashItems() {
    this.itemsService.getTrashItems().subscribe(
      (result: []) => {
        this.items = result;
      },
      (error) => this.handleError(error)
    );
  }

  deleteItem(id: Number) {
    this.itemsService.deleteItem(id).subscribe(
      (result) => {
        console.log(result);
        this.getItems();
      },
      (error) => this.handleError(error)
    );
  }

  deleteHardItem(id: Number) {
    this.itemsService.deleteHardItem(id).subscribe(
      (result) => {
        console.log(result);
        this.getTrashItems();
      },
      (error) => this.handleError(error)
    );
  }

  restoreItem(id: Number) {
    this.itemsService.restoreItem(id).subscribe(
      (result) => {
        console.log(result);
        this.getItems();
      },
      (error) => this.handleError(error)
    );
  }

  handleError(error) {
    if (error.status == 401) {
    } else {
      console.log(error);
    }
  }
}
