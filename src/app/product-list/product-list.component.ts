import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store-grid',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  filteredStoreItems$?: Observable<Product[]>;
  products: Product[];
  editingForm: boolean;
  selectedProduct: Partial<Product> = {};
  productFormGroup: FormGroup;
  expensiveFilterOn = false;
  cheapFilterOn = false;
  lowerThan: number | undefined;
  higherThan: number | undefined;

  constructor(
    private modalService: NgbModal,
    private storeService: StoreService,
    private fb: FormBuilder
  ) {
    this.storeService.items$.subscribe((items) => (this.products = items));
    this.filteredStoreItems$ = this.storeService.items$;

    this.productFormGroup = this.fb.group({
      title: [null, [Validators.required], [this.productNameValidator()]],
      price: [null, [Validators.required, Validators.min(1)]],
      description: [null, []],
    });
  }

  open(content: TemplateRef<any>, selectedProduct?: Product): void {
    this.editingForm = !!selectedProduct;
    this.selectedProduct = selectedProduct ?? {};
    this.modalService.open(content);

    this.productFormGroup.patchValue(this.selectedProduct);
  }

  closeModal(modal: NgbActiveModal): void {
    this.resetFormValidations();
    modal.close();
  }

  resetFormValidations(): void {
    this.productFormGroup.markAsPristine();
    this.productFormGroup.markAsUntouched();
    this.productFormGroup.updateValueAndValidity();
  }

  onItemRemove(product: Product): void {
    this.storeService.removeItem(product);
  }

  onEdit(modal: NgbActiveModal): void {
    if (!this.selectedProduct.id) {
      return;
    }

    const product = this.productFormGroup.value;
    product.imageUrl = 'https://via.placeholder.com/1280x720';
    product.category = 'N/A';
    product.size = 'N/A';
    this.storeService.updateItem(product, this.selectedProduct.id);
    this.closeModal(modal);
    this.resetFormValidations();
  }

  onSave(modal: NgbActiveModal): void {
    const product = this.productFormGroup.value;
    product.imageUrl = 'https://via.placeholder.com/1280x720';
    product.category = 'N/A';
    product.size = 'N/A';
    this.storeService.addItem(this.productFormGroup.value);
    this.closeModal(modal);
    this.resetFormValidations();
  }

  onItemsFiltered(result: Observable<Product[]>): void {
    this.filteredStoreItems$ = result;
  }

  onExpensiveFilterClick(): void {
    this.expensiveFilterOn = !this.expensiveFilterOn;
    this.higherThan = this.expensiveFilterOn ? 1500 : undefined;
  }

  onCheapFilterClick(): void {
    this.cheapFilterOn = !this.cheapFilterOn;
    this.lowerThan = this.cheapFilterOn ? 1000 : undefined;
  }

  // Async validator

  productNameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkIfNameExists(control.value).pipe(
        map((res) => {
          return res ? { nameExists: true } : null;
        })
      );
    };
  }

  checkIfNameExists(title: string): Observable<boolean> {
    const result =
      this.products.filter(
        (d) => d.title === title && title !== this.selectedProduct.title
      ).length > 0;
    return of(result);
  }
}
