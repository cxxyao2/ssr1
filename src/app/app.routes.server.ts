import { inject } from '@angular/core';
import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { ProductService } from './services/product.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'products/:id',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Server,
    async getPrerenderParams() {
      const prodService = inject(ProductService);
      const ids = await prodService.getIds();
      return ids.map(id => ({ id }));

    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
