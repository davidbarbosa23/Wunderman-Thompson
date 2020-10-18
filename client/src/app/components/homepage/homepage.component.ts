import { Component, HostBinding, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
  @HostBinding('class') classes = 'homePage min-vh-100';

  items: Item[] = [];

  constructor(
    private title: Title,
    private meta: Meta,
    private itemsService: ItemsService,
    public globals: Globals,
    public router: Router
  ) {
    this.title.setTitle('Home | Wunderman Thompson');
    this.meta.updateTag(
      { name: 'description', content: 'Lorem Ipsum | Wunderman Thompson' },
      `name='description'`
    );
  }

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
