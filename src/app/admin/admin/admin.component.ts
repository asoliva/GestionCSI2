import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../login/login/login-service.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Alumnos} from "./alumnos";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {AlumnosService} from "./alumnos.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [LoginServiceService],
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Alumnos>;
  items: Observable<Alumnos[]>;

  alumnos: any;
  closeResult: string;
  numero: number;
  constructor(private _service:LoginServiceService, private modalService: NgbModal, db: AngularFirestore, private conexion:AlumnosService) {
    this.conexion.getAlumno().subscribe(alumno1 => {
      this.alumnos = alumno1;
    });
  }

  ngOnInit(): void {
    this._service.checkCredentials();
  }

  logout() {
    this._service.logout();
  }

  open(content, numero) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
