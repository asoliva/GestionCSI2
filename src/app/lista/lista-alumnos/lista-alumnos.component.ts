import {Component, Input, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Alumnos} from "../../interfaces/alumnos";
import {Observable} from "rxjs";
import {AlumnosService} from "../../services/alumnos.service";
import {Falta} from "../../interfaces/faltas";
import {FaltasService} from "../../services/faltas.service";

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Alumnos>;
  items: Observable<Alumnos[]>;

  private itemsCollectionF: AngularFirestoreCollection<Falta>;
  itemsF: Observable<Falta[]>;

  alumnos: any;
  alumn: Alumnos;
  faltas: any;
  closeResult: string;
  private contador: number;
  constructor(db: AngularFirestore, private conexion:AlumnosService,private conexionF:FaltasService) {
    this.conexion.getAlumno().subscribe(alumno1 => {
      this.alumnos = alumno1;
    });
    this.conexionF.getFalta().subscribe(falta1 => {
      this.faltas = falta1;
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

  seleccionarAlumno(alumno) {
    this.alumn = alumno;
  }
}
