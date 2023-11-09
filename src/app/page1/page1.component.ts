import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

  afficher: boolean = true;

  afficheElement: boolean = true;

  fruits:string[]=['banane' , 'fraise' , 'pomme' , 'ananas' , 'melon'];
  age=23;
  name="chiheb";

  message="cliquer sur la button"
  changermsg(){
    this.message="le msg est changer";
  }
  produits: any[] = [
    {
      nom: 'Téléviseur',
      prix: 699.99,
      stock: 15,

    },
    {
      nom: 'Smartphone',
      prix: 399.99,
      stock: 10,

    },
    {
      nom: 'Ordinateur portable',
      prix: 1099.99,
      stock: 5,
    },
    {
      nom: 'Ordinateur 2',
      prix: 1099.99,
      stock: 66,
    },
    {
      nom: 'Ordinateur3',
      prix: 1099.99,
      stock: 85,
    }
  ];
}
