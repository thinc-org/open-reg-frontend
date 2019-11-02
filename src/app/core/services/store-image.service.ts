import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

interface Image {
  name: string;
  key: string;
  data?: string;
  url?: string;
}
const STORAGE_KEY = 'local_images';

@Injectable({
  providedIn: 'root',
})
export class StoreImageService {
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}

  saveImage(file: Blob, _key: string, url?: string) {
    if (url) {
      const name = url.split(',')[1];
      this.saveToStorage(_key, url, name);
    } else {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.saveToStorage(_key, event.target.result, (file as any).name);
      };
      reader.readAsDataURL(file);
    }
  }

  private saveToStorage(_key: string, data: string, name: string) {
    let images = this.getImages();
    if (!images) {
      images = [];
    }
    const index = images.findIndex(({ key }) => key === _key);
    const imageData: Image = { key: _key, data, name };
    if (index >= 0) {
      images[index] = imageData;
    } else {
      images.push(imageData);
    }
    this.storage.set(STORAGE_KEY, images);
  }

  getImages(): Image[] {
    return this.storage.get(STORAGE_KEY);
  }

  getImage(_key: string): Image {
    let images = this.getImages();
    if (!images) {
      images = [];
    }
    return images ? images.find(({ key }) => key === _key) : null;
  }

  getImageName(_key: string): string {
    const image = this.getImage(_key);
    return image ? image.name : null;
  }

  clear() {
    this.storage.remove(STORAGE_KEY);
  }
}
