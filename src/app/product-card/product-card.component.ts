import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push({
        filled: i <= rating,
      });
    }
    return stars;
  }

  productDetailsNavigation(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
