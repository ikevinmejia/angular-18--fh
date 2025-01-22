import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';
import { ProductCardComponent } from './ui/product-card/product-card.component';

@Component({
  selector: 'app-input-output',
  imports: [ProductCardComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent {
  public products = signal<Product[]>([
    { id: 1, name: 'Product 1', quantity: 0 },
    { id: 2, name: 'Product 2', quantity: 0 },
  ])

  public updateProduct(product: Product, quantity:number){
    this.products.update(products => (
      products.map(p => p.id === product.id ? { ...p, quantity  } : p)
    ))
  }
}
