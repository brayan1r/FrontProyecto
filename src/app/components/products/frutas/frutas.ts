import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frutas',
  imports: [CommonModule],
  templateUrl: './frutas.html',
  styleUrl: './frutas.scss'
})
export class FrutasComponent {

  frutas = [
    {
      name: 'Manzana',
      price: 5000,
      image: 'assets/images/manzana.jpg',
      description: 'Manzanas frescas y crujientes, perfectas para un snack saludable.'
    },

    {      name: 'Mango',
      price: 1500,
      image: 'assets/images/banana.jpg',
      description: 'Mangos frescos, ideales para batidos y postres.'
    }
  ];
}


