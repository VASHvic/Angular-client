import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducFormComponent } from './components/produc-form/produc-form.component';

import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'product',
    component: ProductListComponent,
  },
  {
    path: 'product/create',
    component: ProducFormComponent,
  },
  {
    path: 'product/edit/:id',
    component: ProducFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
