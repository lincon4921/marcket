import { Component,} from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.page.html',
  styleUrls: ['./add-produto.page.scss'],
})
export class AddProdutoPage {
  
  constructor(private navCtrl : NavController, private modal: ModalPage) {}

  openHome(){
    this.navCtrl.navigateForward('/home');
  }

  openModal() {
    this.modal.modal();
  }
}

