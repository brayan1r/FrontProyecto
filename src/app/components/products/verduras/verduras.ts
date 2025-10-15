import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-verduras',
  imports: [CommonModule],
  templateUrl: './verduras.html',
  styleUrl: './verduras.scss'
})
export class VerdurasComponent {
  verduras = [
    {
      name: 'Zanahoria',
      price: 3000,
      image: 'https://agrosemval.com/wp-content/uploads/2020/05/zanahoria-royal-chantenay-ipc-01.jpg',
      description: 'Zanahorias frescas y crujientes, perfectas para un snack saludable.'
    },
    {
      name: 'Lechuga',
      price: 3700,
      image: 'https://images.ecestaticos.com/FePXtzbesikhacQU8WNQTborPlw=/0x109:2121x1301/1200x675/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F5cc%2Fef6%2F068%2F5ccef6068a457cdae460a5469d4af804.jpg',
      description: 'Lechuga fresca para ensalada.'
    },
    {
      name: 'Pepino',
      price: 1800,
      image: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-06/Type%20of%20cucumber.jpg?itok=WEuXomjV',
      description: 'pepino fresco y nutritivo.'
    },
    {
      name: 'Cebolla Larga',
      price: 2200,
      image: 'https://ecommerce.surtifamiliar.com/backend/admin/backend/web/archivosDelCliente/items/images/Verduras-Verduras-a-Granel-CEBOLLA-LARGA-SUCIA-A-GRANEL-316720201112180103.webp',
      description: 'cebolla larga fresca y crujiente.'
    },
    {
      name: 'Tomate Chonto',
      price: 2500,
      image: 'https://carnesoasis.com/wp-content/uploads/2020/09/Tomate.png',
      description: 'tomate fresco y jugoso.'
    
    },{
      name: 'Cebolla cabezona',
      price: 1700,
      image: 'https://comercho.com/web/image/product.template/189/image_1024?unique=7d09413',
      description: 'cebolla cabezona fresca y jugosa.'
    },{
      name: 'Papa pastusa',
      price: 1200,
      image: 'https://plazamercado.shop/wp-content/uploads/2020/07/Papa-pastusa-lb-paloquemao.jpg',
      description: 'papa pastusa fresca y nutritiva.'
    },{
      name: 'Repollo',
      price: 2100,
      image: 'https://agrosemval.com/wp-content/uploads/2020/05/repollo-mercado-copenhagen-ipc-01.jpg',
      description: 'repollo fresco.'
    },{
      name: 'Apio',
      price: 2400,
      image: 'https://static.elnortedecastilla.es/www/multimedia/201905/10/media/cortadas/apio-ku1E-U80167073400sK-624x385@El%20Norte.jpg',
      description: 'apio fresco'
    },{
      name: 'Ajo',
      price: 2600,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3xUS3_fO2z3unxrb26nntoGSJ-kDDznefA&s',
      description: 'ajo fresco y saludable.'
    },{
      name: 'Remolacha',
      price: 1900,
      image: 'https://www.herbazest.com/imgs/3/0/9/853521/remolacha.jpg',
      description: 'remolacha fresca y dulce.'
    },{
      name: 'Cilantro',
      price: 1700,
      image: 'https://tienda.comersano.co/51-large_default/cilantro-manojo.jpg',
      description: 'cilantro fresco y aromático.'
    },

  ];

}
