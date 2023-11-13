import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  title = 'Товары';
  products: IProduct[] = [];
  loading: boolean = false;
  term: string = '';

  constructor(
    public productsServuce: ProductService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.productsServuce.getAll().subscribe(() => {
      this.loading = false;
    })
  }
}
