import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalcontroller: ModalController) { }

  async modal() {
    const modal = await this.modalcontroller.create({
      component: ModalPage //,
      //cssClass: 'modal.page.scss'
    });
    return await modal.present();
  }

  ngOnInit() {
  }
  

}
