
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  async getIds(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['1', '2', '3']);
      }, 1000);
    });
  }
}
