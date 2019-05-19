import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public schoolName: String = '';
  public address: String = '';
  public currency: String = 'PESO';
  public amount: String = '';
  public schools: any = [];
  public createdSchool: any = [];
  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.getAllSchools();
  }
  createSchool() {
    this.schools = (this.storageService.getSchools());
    this.schools.push({ school: this.schoolName, address: this.address, currency: this.currency, amount: this.amount });
    this.storageService.setSchools(JSON.stringify(this.schools));
    this.getAllSchools();
  }
  getAllSchools() {
    this.schools = (this.storageService.getSchools());
  }
}
