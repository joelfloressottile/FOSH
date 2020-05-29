import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PatientViewComponent } from '../patient-view/patient-view.component';


export interface Paciente {
  name: string;
  rut: string;
  age: number;
}

const PACIENTES: Paciente[] = [
  {name: 'Felipe Balbontín Gallegos', rut: '8201000-2', age: 24},
  {name: 'Christopher Nicolás Catalán Atton', rut: '19153579-0', age: 78},
  {name: 'Denisse Alejandra Soto', rut: '13999122-1', age: 42},
  {name: 'Joel Iván Flores Sottile', rut: '12151253-K', age: 15},
  {name: 'Susana Elizabeth Sottile Daneri', rut: '1201926-1', age: 35},
  {name: 'Patricio San Martín', rut: '919827-2', age: 65},
  {name: 'Bambina Flores Sottile', rut: '11921995-6', age: 35},
  {name: 'Joaquín Vásquez Pérez', rut: '16871828-0', age: 24},
  {name: 'Elías Daniel Araya Díaz', rut: '9115344-K', age: 48},
  {name: 'Fernanda Belén Andreani', rut: '15142248-3', age: 39},
];


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'rut','whatever','whateverTwo'];
  dataSource = new MatTableDataSource(PACIENTES);
  value: string = "";
  
  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(rowFromTable){
    console.log(rowFromTable);
    this.dialog.open(PatientViewComponent, {
      data: rowFromTable,
      panelClass:'dialog-container'
    });
  }

}
