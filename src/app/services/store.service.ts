import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  getItem(id: number): Product {
    return this.getData()[id];
  }

  getData(): Product[] {
    return [{
      "title": "NVIDIA GeForce RTX 3090",
      "imageUrl": "https://via.placeholder.com/1280x720",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "price": 1499,
      "category": "N/A",
      "size": "N/A",
      "id": 0
    },
    {
      "title": "GeForce RTX 3080 Ti",
      "imageUrl": "https://via.placeholder.com/1280x720",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
      "price": 1199,
      "category": "N/A",
      "size": "N/A",
      "id": 1
    },
    {
      "title": "AMD Radeon 6900 XT",
      "imageUrl": "https://via.placeholder.com/1280x720",
      "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia...",
      "price": 999,
      "category": "N/A",
      "size": "N/A",
      "id": 2
    },
    {
      "title": "NVIDIA Titan RTX",
      "imageUrl": "https://via.placeholder.com/1280x720",
      "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      "price": 2499,
      "category": "N/A",
      "size": "N/A",
      "id": 3
    },
    {
      "title": "AMD Radeon RX 6800 XT",
      "imageUrl": "https://via.placeholder.com/1280x720",
      "description": "The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ",
      "price": 649,
      "category": "N/A",
      "size": "N/A",
      "id": 4
    },
    {
      "title": "AMD Radeon VII",
      "imageUrl": "https://via.placeholder.com/1280x720",
      "description": "Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      "price": 699,
      "category": "N/A",
      "size": "N/A",
      "id": 5
    }
  ]}
}
