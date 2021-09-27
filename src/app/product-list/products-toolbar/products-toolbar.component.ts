import { Component, TemplateRef } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products-toolbar',
  templateUrl: './products-toolbar.component.html',
  styleUrls: ['./products-toolbar.component.scss']
})
export class ProductsToolbarComponent {

  products: Product[] = [] as Product[];
  productFormGroup = this.fb.group(
    {
      title: [null, [Validators.required], [this.productNameValidator()]],
      price: [null, [Validators.required, Validators.min(1)]],
      description: [null, []],
    },
  );

  constructor(private modalService: NgbModal, private storeService: StoreService, private fb: FormBuilder) {
    this.storeService.items$.subscribe(items => this.products = items);
  }

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

  // Async validator

  productNameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return this.checkIfNameExists(control.value).pipe(
          map(res => {
            // if res is true, username exists, return true
            return res ? { usernameExists: true } : null;
            // NB: Return null if there is no error
          })
        );
      };
  }

  checkIfNameExists(name: string): Observable<boolean> {
    const result = this.products.filter(d => d.title === name).length > 0;
    return of(result).pipe(delay(1000));
  }
}

