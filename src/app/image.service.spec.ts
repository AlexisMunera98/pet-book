import {ImageService} from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('deberia crear el servicio', () => {
    expect(service).toBeTruthy();
  });

  describe('#getImages', () => {
    it('deberia retornar todas las imagenes', () => {
      const images = service.getImages();
      expect(images.length).toEqual(5);
    });
  });

  describe('#getImage(id)', () => {
    it('deberia retornar indefinido cuando se envia el id indefinido', () => {
      const id = undefined;
      const image = service.getImage(id);
      expect(image).toBeUndefined();
    });

    it('deberia retornar indefinido cuando se envia un id no existente', () => {
      const id = 120;
      const image = service.getImage(id);
      expect(image).toBeUndefined();
    });

    it('deberia retonar un perro cuando se envia el id 1', () => {
      const id = 1;
      const image = service.getImage(id);
      expect(image.type).toEqual('perro');
    });
  });
});
