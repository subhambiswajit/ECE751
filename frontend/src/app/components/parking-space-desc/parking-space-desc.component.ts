import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-parking-space-desc',
  templateUrl: './parking-space-desc.component.html',
  styleUrls: ['./parking-space-desc.component.scss']
})
export class ParkingSpaceDescComponent{

  modalDataResponse: any;
  @Input()
  parkingSpace: any = {};

  constructor(public modalCtrl: ModalController) { }

  async initModal() {
    const modal = await this.modalCtrl.create({
      component: BookingComponent,
      componentProps: {
        "tpk_parkingspace": "2",
        "tpk_book_start_datetime" : new Date(),
        "tpk_book_end_datetime" : new Date(),
        "tpk_firebaseid" : "4"
      },
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop() 
    });

     modal.onDidDismiss().then((modalDataResponse) => {
       if (modalDataResponse !== null) {
         this.modalDataResponse = modalDataResponse.data;
         console.log('Modal Sent Data : '+ modalDataResponse.data);
       }
     });

    return await modal.present();
  }

}
