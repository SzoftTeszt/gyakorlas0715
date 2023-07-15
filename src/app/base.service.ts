import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { SzallodaAr } from './szallodaArakModel';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  nyaklancUrl="http://localhost:3000/ekszerek/"
  private refSzallodaArak: AngularFireList<SzallodaAr>;
  constructor(private http: HttpClient,
    private db:AngularFireDatabase) {
      this.refSzallodaArak=db.list('/szallodaarak')
     }

getSzallodaArak(){
  return this.refSzallodaArak;
}

addSzallodaArak(body:any){
  return this.refSzallodaArak.push(body)
}

deleteSzallodaArak(body:any){
  return this.refSzallodaArak.remove(body.key)
}
updateSzallodaArak(body:any){
  return this.refSzallodaArak.update(body.key,body)
}

  getNyaklanc(){
    return this.http.get(this.nyaklancUrl)
  }
  addNyaklanc(body:any){
    return this.http.post(this.nyaklancUrl, body)
  }
  updateNyaklanc(body:any){
    this.http.put(this.nyaklancUrl+body.id,body)
  }
  deleteNyaklanc(body:any){
    this.http.delete(this.nyaklancUrl+body.id)
  }
}
