import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productservice: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    // si afegigx error com a segon callback m ix deprecated
    this.productservice.getProducts().subscribe((res) => {
      console.log(res);
    });
  }
}
