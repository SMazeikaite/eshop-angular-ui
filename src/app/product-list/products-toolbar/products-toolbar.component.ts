import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products-toolbar',
  templateUrl: './products-toolbar.component.html',
  styleUrls: ['./products-toolbar.component.scss']
})
export class ProductsToolbarComponent {

  productForm = new FormGroup({
    'name': new FormControl({value: ''}, [
      Validators.required
    ]),
    'description': new FormControl(),
    'price': new FormControl(),
  })

  constructor(private modalService: NgbModal, private storeService: StoreService) {}

  open(content: TemplateRef<any>): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // TODO: get form and save data
    });
  }

  onSave(modal: NgbActiveModal): void {
    console.log(this.productForm.value);
    this.storeService.addItem(this.productForm.value);
    this.closeModal(modal);
  }

  closeModal(modal: NgbActiveModal): void {
    modal.close();
  }
}

