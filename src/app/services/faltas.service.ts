import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Falta} from "../interfaces/faltas";
import {Asignaturas} from "../interfaces/asignaturas";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FaltasService {

  faltas: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<Falta>;
  itemsF: Observable<Falta[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Falta>('Falta');
    this.faltas = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Falta;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getFalta(){
    return this.faltas;
  }

  addFalta(falta: Falta){
    this.itemsCollection.add(falta);
  }
}
