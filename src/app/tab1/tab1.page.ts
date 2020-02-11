import { Component } from '@angular/core';
// Importation des composants pour ma requête à l'API et pour recharger ma page
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
  async getUsersList() {
    // création d'un message lors du rechargement de la page
    const loading = await this.loadingController.create({
      message: 'Hello world !',
      duration: 2000
    });
    await loading.present();
    // je fais une requête pour qu'il ne m'affiche que 10 utilisateurs 
    this.http.get('https://randomuser.me/api/?results=10').subscribe(data=>{
      this.usersList=data["results"]
      loading.dismiss()
    })
  }
}
