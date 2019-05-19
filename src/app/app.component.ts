import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'client';
  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit() {
    // const web3Script = document.createElement('script');
    // web3Script.type = 'text/javascript';
    // web3Script.src = 'assets/js/web3.main.js';
    // this.elementRef.nativeElement.appendChild(web3Script);
  }
}
