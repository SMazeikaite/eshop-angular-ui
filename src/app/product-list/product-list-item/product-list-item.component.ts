import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalConfig } from 'src/app/modal/modal.config';
import { ModalComponent } from 'src/app/modal/modal.component';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit{
  @Input() item: Product;
  @Output() removeItem = new EventEmitter<void>();
  @Output() editItem = new EventEmitter<void>();
  descriptionLength = 120;
  modalConfig: ModalConfig;
  @ViewChild('itemDeleteModal') private modalComponent: ModalComponent;
  @ViewChild('itemEditModal') private editModalComponent: ModalComponent;
  
  ngOnInit(): void {
    this.modalConfig = {
      modalTitle: 'Deleting item from shop',
      saveButtonLabel: 'Confirm',
      closeButtonLabel: 'Cancel'
    }
  }

  async openItemDeleteModal(): Promise<boolean> {
    return await this.modalComponent.open();
  }

  onItemDelete(): void {
    this.removeItem.emit();
  }

  onItemEdit(): void {
    this.editItem.emit();
  }

}
