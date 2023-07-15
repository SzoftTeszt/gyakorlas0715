import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-nyaklanc',
  templateUrl: './nyaklanc.component.html',
  styleUrls: ['./nyaklanc.component.css']
})
export class NyaklancComponent {
  nyaklancok:any;
  error=false;
  errorText="";
  constructor(private base:BaseService){
    this.base.getNyaklanc().subscribe(
      {
        next:(a)=>this.nyaklancok=a,
        error:(e)=>{this.error=true, this.errorText=e}
      }
    )
}
vasarlas(ekszer:any){}
}
