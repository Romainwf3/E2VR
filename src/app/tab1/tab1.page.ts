import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public http: HttpClient,public loadingController: LoadingController) {
    this.getUsersList()
    
  }
  usersList:any[]=[]
  async getUsersList()
  {
    const loading = await this.loadingController.create({
      message: 'Hello world !',
      duration: 2000
    });
    await loading.present();
    
    this.http.get('https://randomuser.me/api/?results=10').subscribe(data=>{
      this.usersList=data["results"]
      loading.dismiss()
    })
  }
}
