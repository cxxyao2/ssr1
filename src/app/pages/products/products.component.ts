import { HttpClient } from '@angular/common/http';
import { afterNextRender, AfterViewInit, Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, AfterViewInit {
  @ViewChild('content') content!: ElementRef;
  divHeight = signal(0);

  constructor() {
    afterNextRender(() => {
      this.divHeight.set(this.content.nativeElement.clientHeight);
    });
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }


  route = inject(ActivatedRoute);
  http = inject(HttpClient);
  product$: Observable<Product> | null = null;


  ngOnInit() {

    // https://jsonplaceholder.typicode.com/users 
    this.product$ = this.route.params.pipe(
      switchMap((params: { [key: string]: string }) => {
        const id = params['id'];
        return this.http.get<{ id: number; name: string }>(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
          map((user: any) => ({ id: user.id, name: user.name, price: Math.round(Math.random() * 100) } as Product))
        );
  }));
}

}
