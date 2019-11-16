import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  setData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
