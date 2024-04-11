import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Noveny } from '../model/noveny';
import { Megrendeles } from '../model/megrendeles';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  refNovenyek:AngularFireList<Noveny>
  refMegrendeles: AngularFireList<Megrendeles>

  constructor(private db:AngularFireDatabase) {
  this. refNovenyek=this.db.list("/novenyek")
  this. refMegrendeles=this.db.list("/megrendelesek")}

  getPlants(){
    return this.refNovenyek
  }

  updateNoveny(key:any, body:any){
    return this.refNovenyek.update(key, body)
  }

  megrendel(body:any){
    return this.refMegrendeles.push(body)
  }
}
