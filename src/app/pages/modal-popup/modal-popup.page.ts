import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { CorreiosService } from 'src/app/services/correios.service';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.page.html',
  styleUrls: ['./modal-popup.page.scss'],
})
export class ModalPopupPage {

  private cep: string;
  private cidade: string;
  private bairro: string;
  private logradouro: string;
  private estado: string;

  constructor(private navParams: NavParams, private modalCtrl: ModalController, private correioService: CorreiosService) { }

  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  public buscaEndereco() {

    this.correioService.getEndereco(this.cep).subscribe(
      (retorno: any) => {

        this.logradouro = retorno.logradouro;
        this.bairro = retorno.bairro;
        this.cidade = retorno.localidade;
        this.estado = retorno.uf;
      },

      (error) => {
        console.log(error);
      }
    );
  }
}
