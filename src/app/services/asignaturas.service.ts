import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {map} from "rxjs/operators";
import {Asignaturas} from "../interfaces/asignaturas";

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  asignaturas: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<Asignaturas>;
  itemsA: Observable<Asignaturas[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Asignaturas>('Asignaturas');
    this.asignaturas = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Asignaturas;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }
  getAsignatura(){
    return this.asignaturas;
  }
}
