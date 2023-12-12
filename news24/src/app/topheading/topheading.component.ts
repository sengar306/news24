import { Component, OnInit } from '@angular/core';
import { News24apisevice } from '../service/news24apisevice.service';
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit{
  constructor(private _service:News24apisevice)
  {
  ngOnInit() :void {
      this._services.topheading.suscribe((result)=>{
        console.log(result);
      })
      }
  }}

