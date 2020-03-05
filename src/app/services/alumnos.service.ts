import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Alumnos} from "../interfaces/alumnos";
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  alumnos: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<Alumnos>;
  items: Observable<Alumnos[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Alumnos>('Alumnos');
    this.alumnos = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Alumnos;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }
  getAlumno(){
    return this.alumnos;
  }
  addAlumno(alumno: Alumnos) {
    this.itemsCollection.add(alumno);
  }
}

