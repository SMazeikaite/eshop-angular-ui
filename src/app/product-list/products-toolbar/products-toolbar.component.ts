import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products-toolbar',
  templateUrl: './products-toolbar.component.html',
  styleUrls: ['./products-toolbar.component.scss']
})
export class ProductsToolbarComponent {
  productForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl()
  })

  constructor(private modalService: NgbModal) {}

  open(content: TemplateRef<any>): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // TODO: get form and save data
    });
  }
}

