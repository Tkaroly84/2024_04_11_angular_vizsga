import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { KosarService } from 'src/app/services/kosar.service';

@Component({
  selector: 'app-rendeles',
  templateUrl: './rendeles.component.html',
  styleUrls: ['./rendeles.component.css']
})
export class RendelesComponent {
  nev: any
  cim: any
  kosar: any
  novenyek: any
  osszesen: any

  constructor(private kosarService: KosarService, private base: BaseService, private router: Router) {

    this.kosarService.getKosar().subscribe(
      (res) => this.kosar = res
    )
    this.base.getPlants().snapshotChanges().pipe(
      map(
        (ch) => ch.map(
          (c) => ({ key: c.payload.key, ...c.payload.val() })
        )))
      .subscribe(
        (res) => this.novenyek = res
      )
  }

  nevKereses(key: any) {
    let i = this.novenyek.findIndex(
      (elem: any) => elem.key == key
    )
    return this.novenyek[i].megnevezes
  }

  tetelTorol(key: any) {
    this.kosarService.deleteTetel(key)
  }

  megrendelesLeadas() {
    let body = {
      nev: this.nev,
      cim: this.cim,
      datum: new Date().toLocaleString(),
      statusz: "Rendelés leadva",
      tetelek: this.kosar
    }
    this.base.megrendel(body).then(
      () => {
        this.kosarService.deleteKosar()
        this.router.navigate(["/rolunk"])
      }
    ).catch(
      () =>
        console.log("Hiba történt a leadáskor!")
    )
  }
  updateNoveny(key: any, body: any) {
    this.base.updateNoveny(key, body).then(
      () => console.log('sikeres update')
    ).catch(
      () => console.log('hiba történt')
    )
  }
}
