import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';
import { fromEvent, scan } from 'rxjs';

@Component({
  selector: 'app-szallodaarak',
  templateUrl: './szallodaarak.component.html',
  styleUrls: ['./szallodaarak.component.css']
})
export class SzallodaarakComponent {
 szallodaarak:any;
 oszlopok=[
  {key:'nev',text:'Név',type:'text'},
  {key:'Gyerekekszáma',text:'Gyerekek Száma',type:'number'},
  {key:'VendegekSzama',text:'Vendégek Száma',type:'number'},
  {key:'Alapar',text:'Ár',type:'number'}]
  



 constructor(private base:BaseService){

  this.base.getSzallodaArak().snapshotChanges().pipe(
    map(
      (ch:any)=> ch.map((c:any)=>({key:c.payload.key, ...c.payload.val()}))
    )
  ).subscribe(
    (adat)=> this.szallodaarak=adat
  )
 }

 save(szalloda:any){
  this.base.updateSzallodaArak(szalloda)
 }

 delete(szalloda:any){
  this.base.deleteSzallodaArak(szalloda)
 }

}
