import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-produc-form',
  templateUrl: './produc-form.component.html',
  styleUrls: ['./produc-form.component.css'],
})
export class ProducFormComponent implements OnInit {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    imageURL: '',
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  submitProduct() {
    this.productService.createProducts(this.product).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => console.log(err),
    });
  }
}
