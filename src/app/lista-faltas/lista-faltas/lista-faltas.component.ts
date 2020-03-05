import {Component, Input, OnInit} from '@angular/core';
import {FaltasService} from "../../services/faltas.service";
import {AngularFirestoreCollection} from "@angular/fire/firestore";
import {Falta} from "../../interfaces/faltas";
import {Observable} from "rxjs";
import {AlumnosService} from "../../services/alumnos.service";
import {Alumnos} from "../../interfaces/alumnos";
import {AsignaturasService} from "../../services/asignaturas.service";
import {Asignaturas} from "../../interfaces/asignaturas";

@Component({
  selector: 'app-lista-faltas',
  templateUrl: './lista-faltas.component.html',
  styleUrls: ['./lista-faltas.component.css']
})
export class ListaFaltasComponent implements OnInit {
  private itemsCollectionF: AngularFirestoreCollection<Falta>;
  private itemsCollection: AngularFirestoreCollection<Alumnos>;
  private itemsCollectionA: AngularFirestoreCollection<Asignaturas>;
  itemsA: Observable<Asignaturas[]>;
  items: Observable<Alumnos[]>;
  itemsF: Observable<Falta[]>;
  alumnos: any;
  faltas: any;
  asignaturas: any;
  alumn: Alumnos;
  constructor(private conexionF:FaltasService, private conexion:AlumnosService, private conexionA:AsignaturasService) {
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

  calcularFaltas(idAlumno){
    let cont = 0;
    let i = 0;

    for (let i = 0; i < this.faltas.length; i++){
      if(idAlumno == this.faltas[i].idAlumno)
      {
        cont++;
      }
    }
    return cont;
  }

  calcularFaltasDaw(idAlumno, idAsignatura) {
    let cont = 0;
    let i = 0;

    for (let i = 0; i < this.faltas.length; i++){
      if(idAlumno == this.faltas[i].idAlumno && this.faltas[i].idAsignatura == idAsignatura)
      {
        cont++;
      }
    }
    return cont;
  }
}
