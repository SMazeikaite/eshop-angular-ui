import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent {
  @Output() saveBtnClicked = new EventEmitter<FormGroup>();

  productForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl()
  })

  onSaveClick(): void {
    this.saveBtnClicked.emit();
  }
}
