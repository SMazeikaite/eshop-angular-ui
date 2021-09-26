import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products-toolbar',
  templateUrl: './products-toolbar.component.html',
  styleUrls: ['./products-toolbar.component.scss']
})
export class ProductsToolbarComponent {

  productFormGroup = this.fb.group(
    {
      title: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.min(1)]],
      description: [null, []],
    },
    {
      // validators: [lastNameAgeValidator],
    }
  );

  constructor(private modalService: NgbModal, private storeService: StoreService, private fb: FormBuilder) {}

  get lastName(): FormControl {
    return this.productFormGroup.get('title') as FormControl;
  }

  get age(): FormControl {
    return this.productFormGroup.get('price') as FormControl;
  }

  open(content: TemplateRef<any>): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // TODO: get form and save data
    });
  }

  onSave(modal: NgbActiveModal): void {
    console.log(this.productFormGroup.value);
    this.storeService.addItem(this.productFormGroup.value);
    this.closeModal(modal);
  }

  closeModal(modal: NgbActiveModal): void {
    modal.close();
  }
}

