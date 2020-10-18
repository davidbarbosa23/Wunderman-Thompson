import { Component, OnInit } from '@angular/core';
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
  items: Item[] = [];

  constructor(
    private itemService: ItemsService,
    private globals: Globals,
    public router: Router
  ) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(
      (result: []) => {
        this.items = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
