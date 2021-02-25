import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPopupPageRoutingModule } from './modal-popup-routing.module';

import { ModalPopupPage } from './modal-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModalPopupPageRoutingModule
  ],
  declarations: [ModalPopupPage]
})
export class ModalPopupPageModule { }





