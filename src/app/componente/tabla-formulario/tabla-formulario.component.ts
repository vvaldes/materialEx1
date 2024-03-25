import { Component, inject,ViewChild,OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import {Compania,Companias} from '../interface/compania';
import {EstadosService} from '../../servicio/estados.service';

@Component({
  selector: 'app-tabla-formulario',
  templateUrl: './tabla-formulario.component.html',
  styleUrl: './tabla-formulario.component.css'
})
export class TablaFormularioComponent implements OnInit  {
  //Binding del formulario
  compa : Compania = {id:0,company:"",firstName:"",lastName:"",address:"",address2:"",city:"",state:"",postalCode:"",shipping:"",people:0,date:new Date(Date.now())};
  compa1 : Compania = this.compa;
  compas: Compania[]=[];   //Array de compañias
  nombre = '';
  modificar = false;

  //Control del formulario
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    datecreated: null,
    people: null,
    shipping: ['free', Validators.required]
  });

  //tabla
  columnas: string[] = ['id', 'company','firstName', 'lastName', 'operaciones'];
  dataSource = new MatTableDataSource<Compania>();
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  hasUnitNumber = false;
  datecreated = Date();
  people=0;

  constructor(
    public stat:EstadosService 
  )
  {}
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Compania>(this.compas);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  onSubmit(): void {
     //Añadimos indice
     this.compa.id = this.compas.length + 1;
     const data = this.dataSource.data;
     //this.dataSource.data.push(this.compa);
     this.compas.push(this.compa);
     

     this.dataSource.data = this.compas;
     console.log("compas:" + this.compas);

    alert('Thanks! Añadida ciudad'  + this.compa.company);
  }

  selectPolicy(compa: Compania){
    this.compa=compa;

    /*const data = this.dataSource.data;
    for (let index=0;index<data.length;index++) {
      if (data[index].id === compa.id) {
         this.nombre = data[index].company;
         this.compa = data[index];
      }
    }*/
    this.modificar = true;
  }


  deletePolicy(compania: Compania,borrar:boolean) {
  }  
}

