import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  properties = [
  {'image':'1.jpg', 'price':510000, 'description':'Longwood Towers', 'size':280, 'units':'m', 'n':'NY'},
  {'image':'2.jpg', 'price': 120000, 'description':'St Vincet Place',  'size':640,'units':'m','n':'LA'},
  {'image':'3.jpg', 'price': 240000, 'description':'8857 Mill Road',  'size': 480,'units':'m', 'n':'NY'},
  {'image':'5.jpg', 'price': 750000, 'description':'8901 Marmora Road', 'size': 480, 'units':'m','n':'LA'}]
 
  constructor() { }

  ngOnInit(): void {
  }

}
