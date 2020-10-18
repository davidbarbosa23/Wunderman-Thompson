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
  @HostBinding('class') classes = 'row';

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
      (error) => {
        console.error(error);
      }
    );
  }

  deleteItem(id: Number) {
    this.itemsService.deleteItem(id).subscribe(
      (result) => {
        console.log(result);
        this.getItems();
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        // this.itemForm.reset();
      }
    );
  }
}
