import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-produto',
    loadChildren: () => import('./add-produto/add-produto.module').then( m => m.AddProdutoPageModule)
  },
  {
    path: 'modal-popup',
    loadChildren: () => import('./pages/modal-popup/modal-popup.module').then( m => m.ModalPopupPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
