import {Injectable} from '@angular/core';

@Injectable()
export class ImageService {
  allImages = [];

  getImages() {
    return this.allImages = Imagesdetails.slice(0);
  }

  getImage(id: number) {
    return Imagesdetails.slice(0).find(Images => Images.id === id);
  }
}

const Imagesdetails = [
  {id: 1, type: 'perro', url: 'assets/images/perro1.jpg'},
  {id: 2, type: 'perro', url: 'assets/images/perro2.jpg'},
  {id: 3, type: 'gato', url: 'assets/images/gato1.jpg'},
  {id: 4, type: 'gato', url: 'assets/images/gato2.jpeg'},
  {id: 5, type: 'perro', url: 'assets/images/perro3.jpg'},
];
