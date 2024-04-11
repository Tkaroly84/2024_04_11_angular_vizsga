import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KosarService {
  kosar:any
  kosarSub=new BehaviorSubject<any>(null)

  constructor() {
    this.kosar=[]
   }

   getKosar(){
    return this.kosarSub
   }

   addTetel(plant:any, db:any){
    let i= this.kosar.findIndex(
      (e:any)=>e.key==plant.key
    )

    if(i==-1) this.kosar.push({key:plant.key, ar:plant.ar, db:db})
    else this.kosar[i].db=db

    this.kosarSub.next(this.kosar)
      console.log(this.kosar)
   }

   deleteTetel(key:any){
    this.kosar=this.kosar.filter(
      (elem:any)=>elem.key!=key
    )
    this.kosarSub.next(this.kosar)
   }

   deleteKosar(){
    this.kosar=[]
   }
}