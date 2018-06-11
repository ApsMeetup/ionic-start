import { TraniningProvider } from './../../providers/tranining/tranining';
import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

/**
 * Generated class for the TraniningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tranining',
  templateUrl: 'tranining.html',
})
export class TraniningPage {

  treinos : any;

  constructor(private traniningProvider: TraniningProvider) {
  }

  ionViewDidLoad() {
    this.traniningProvider.getAll().subscribe(response => {
      this.treinos = response['data'];
    });
  }

}
