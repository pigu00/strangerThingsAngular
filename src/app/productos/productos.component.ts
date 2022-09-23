import { Component, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { ProductosService } from '../productos.service';
import { Productos } from '../types';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  public productos: Productos[] = [];
  private productosSubscriber!: Subscription;

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosSubscriber = this.productosService
    .getProducto().pipe(map(productos=>productos.slice(0,4)))
    .subscribe((data) => {
      this.productos = data
    });
  }
  ngOnDestroy():void{
    this.productosSubscriber.unsubscribe()
  }
}
