import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  edit: boolean = false;
  errors = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public fb: FormBuilder,
    public itemsService: ItemsService
  ) {
    this.itemForm = this.fb.group({
      title: [''],
      photo: [''],
      description: [''],
    });
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.itemsService.getItem(params.id).subscribe(
        (result) => {
          this.itemForm = this.fb.group(result);
          this.edit = true;
        },
        (error) => {
          this.errors = error.error;
        }
      );
    }
  }

  onSubmit() {
    if (this.edit) {
      this.itemsService.updateItem(this.itemForm.value.id, this.itemForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['items']);
        },
        (error) => {
          this.errors = error.error;
        }
      );
    } else {
      this.itemsService.createItem(this.itemForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['items']);
        },
        (error) => {
          this.errors = error.error;
        }
      );
    }
  }
}
