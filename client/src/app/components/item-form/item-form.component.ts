import { Component, HostBinding, OnInit } from '@angular/core';
import { ItemsService } from './../../services/items.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  itemForm: FormGroup;
  errors = null;

  constructor(public fb: FormBuilder, public itemsService: ItemsService) {
    this.itemForm = this.fb.group({
      title: [''],
      photo: [''],
      description: [''],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.itemsService.createItem(this.itemForm.value).subscribe(
      (result) => {
        console.log(result);
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
