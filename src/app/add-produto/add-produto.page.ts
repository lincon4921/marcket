import { Component,} from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalPopupPage } from '../pages/modal-popup/modal-popup.page';


@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.page.html',
  styleUrls: ['./add-produto.page.scss'],
})
export class AddProdutoPage {
  
  constructor(private navCtrl : NavController, public modalcontroller : ModalController) {}

  openHome(){
    this.navCtrl.navigateForward('/home');
  }
async showModal(){
  const modal = await this.modalcontroller.create({

    component: ModalPopupPage,
    componentProps: {
      'name': " .."
    }
  });
  return await modal.present();
  }
}

 


