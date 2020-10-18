import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/Item';

import { Globals } from '../../shared/globals';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  items: Item[] = [];

  constructor(
    private itemsService: ItemsService,
    public globals: Globals,
    public router: Router
  ) {}

  ngOnInit(): void {
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
}
