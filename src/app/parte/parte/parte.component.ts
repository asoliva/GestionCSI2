import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {AlumnosService} from "../../services/alumnos.service";
import {Alumnos} from "../../interfaces/alumnos";
import {Observable} from "rxjs";
import {Asignaturas} from "../../interfaces/asignaturas";
import {Falta} from "../../interfaces/faltas";
import {FaltasService} from "../../services/faltas.service";
import {AsignaturasService} from "../../services/asignaturas.service";

@Component({
  selector: 'app-parte',
  templateUrl: './parte.component.html',
  styleUrls: ['./parte.component.css']
})
export class ParteComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Alumnos>;
  items: Observable<Alumnos[]>;

  private itemsCollectionA: AngularFirestoreCollection<Asignaturas>;
  itemsA: Observable<Asignaturas[]>;

  private itemsCollectionF: AngularFirestoreCollection<Falta>;
  itemsF: Observable<Falta[]>;



  nuevoAlumno: any = {
    Nombre: '',
    Apellidos: '',
    fechaNacimiento: null,
    Equipo: ''
  }

  nuevaFalta: any = {
    idAlumno: -1,
    idAsignatura: -1,
    fecha: null
  }

  alumnos: any;
  asignaturas: any;
  faltas: any;
  closeResult: string;
  fecha = Date.now();
  isChecked: any;
  select: any;
  asign: any;
  constructor( db: AngularFirestore, private conexion:AlumnosService, private conexionA:AsignaturasService, private conexionF:FaltasService) {
    this.conexion.getAlumno().subscribe(alumno1 => {
      this.alumnos = alumno1;
    });
    this.conexionF.getFalta().subscribe(falta1 => {
      this.faltas = falta1;
    });
    this.conexionA.getAsignatura().subscribe(asignatura1 => {
      this.asignaturas = asignatura1;
    });
  }

  ngOnInit(): void {
  }

  seleccionar(idAlumno) {

    this.alumnos[idAlumno].Seleccionado = !this.alumnos[idAlumno].Seleccionado;

  }

  addFalta() {
    console.log(this.asign);
    for (let i = 0; i < this.alumnos.length; i++){
      if(this.alumnos[i].Seleccionado) {
        this.nuevaFalta.fecha = this.fecha;
        this.nuevaFalta.idAsignatura = this.asign;
        this.nuevaFalta.idAlumno = this.alumnos[i].id;
        this.conexionF.addFalta(this.nuevaFalta);
      }
    }
  }
}
