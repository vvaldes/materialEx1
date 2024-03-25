import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import {Compania,Companias} from '../interface/compania';
import {EstadosService} from '../../servicio/estados.service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})



export class FormularioComponent {

  //Binding del formulario
  compa : Compania = {id:0,company:"",firstName:"",lastName:"",address:"",address2:"",city:"",state:"",postalCode:"",shipping:"",people:0,date:new Date(Date.now())};
  compas: Compania[]=[];   //Array de compañias

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

  hasUnitNumber = false;
  datecreated = Date();
  people=0;
  
  constructor(
    public stat:EstadosService
  )
  {}

  onSubmit(): void {
    this.compas.push(this.compa);
    alert('Thanks! Añadida ciudad'  + this.compa.company);
  }
}
