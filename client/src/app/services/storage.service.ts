import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setSchools(school) {
    localStorage.setItem('schools', school);
  }
  getSchools() {
    const schools = JSON.parse(localStorage.getItem('schools'));
    return schools;
  }
}
