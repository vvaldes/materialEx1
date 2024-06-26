import { Component, inject,ViewChild,OnInit } from '@angular/core';

import { FormBuilder, Validators , AbstractControl} from '@angular/forms';


import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import {Compania,Companias,shippings} from '../interface/compania';
import {EstadosService} from '../../servicio/estados.service';


/////////   EJEMPLO : https://stackblitz.com/edit/angular13-reactive-form-validation?file=src%2Fapp%2Fapp.component.html

@Component({
  selector: 'app-tabla-formulario',
  templateUrl: './tabla-formulario.component.html',
  styleUrl: './tabla-formulario.component.css'
})


export class TablaFormularioComponent implements OnInit  {
  //Binding del formulario
  compa : Compania = {id:0,company:"",firstName:"",lastName:"",address:"",address2:"",city:"",state:"",postalCode:"",shipping:0,people:0,date:new Date(Date.now()),phone:""};
  //compas: Compania[]=[];   //Array de compañias
  compas = Companias;
  nombre = '';
  modificar = false;
  submit = false;
  shippings1 = shippings;

  //Control del formulario
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([  //numerico de longitud 5
       Validators.required, Validators.minLength(5), Validators.maxLength(5),
       CustomValidator.numeric])
     ],
    // postalCode: ["", [Validators.required,Validators.minLength(5), Validators.maxLength(5)]],

    datecreated: null,
    people: null,
    shipping: ['free', Validators.required],
    //email: new FormControl ('', [Validators.required, Validators.email,Validators.pattern(this.emailPattern)])
  
    phone: [null, Validators.compose([
      Validators.minLength(9), Validators.maxLength(10),
      Validators.pattern(/^\d{9}$/)])
    ]});
    

  //tabla
  columnas: string[] = ['id', 'company','firstName', 'operaciones']; //asdf
  dataSource = new MatTableDataSource<Compania>();
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //matcher = new MyErrorStateMatcher();

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
    

    this.inicializar();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  onSubmit(): void {

    if (!this.submit) {
      return;
    }

     //Añadimos indice
     this.compa.id = this.compas.length + 1;
     let compa1 = this.compa;
     const data = this.dataSource.data;
     //this.dataSource.data.push(this.compa);
     this.compas.push(compa1);
     this.compa.phone = this.addressForm.value.phone || '';
     //data.push(this.compa);
     //if (this.dataSource) {
     //   delete this.dataSource;
     //}
     
     
     this.dataSource.data = data;
     //this.dataSource = new MatTableDataSource<Compania>(this.compas);
     console.log("compas:" + this.compas.toString);

     this.submit       = false;

    alert('Thanks! Añadida ciudad'  + this.compa.company);
  }

  selectPolicy(compa: Compania){
    this.compa=compa;

    this.modificar = true;
  }


  deletePolicy(compania: Compania,borrar:boolean) {

        var resultado = window.confirm('Estas seguro?');
        if (resultado) {      
          const data = this.dataSource.data;
          //this.consolelog.log(data);
          for (let index=0;index<data.length;index++) {
            if (data[index].id==compania.id) {
              data.splice(index, 1);
            }
          }
    
        this.dataSource.data = data;
        console.log(" borrado:" );
        this.inicializar();
      }
    }    


    inicializar() {
      this.compa  = {id:0,company:"",firstName:"",lastName:"",address:"",address2:"",city:"",state:"",postalCode:"",shipping:0,people:0,date:new Date(Date.now()),phone:""};
      this.modificar = false;
    }

    filtrar(event: Event) {
      const filtro = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filtro.trim().toLowerCase();
    }
  
  //Leer campo formulario
  get firstName() {
      return this.addressForm.get('firstName');
   }

  get lastName() {
    return this.addressForm.get('lastName');
  }

  get postalCode() {
    return this.addressForm.controls['postalCode'];    
  }
  get email() {
    return this.addressForm.get('email');
  }

 

  getErrorMessage() {
    return this.postalCode.hasError('patterm') ? 'Sólo numérico' :
      this.postalCode.hasError('maxlength') ? 'Mucha Longitud' : 
        this.postalCode.hasError('minlength') ? 'Poca longitud' : 
          this.postalCode.hasError('required') ? 'Código postal requerido' : '';
          
  }
}

export class CustomValidator{
  // Number only validation
  static numeric(control: AbstractControl) {
    let val = control.value;

    if (val === null || val === '') return null;

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'patterm': true };

    return null;
  }
}

