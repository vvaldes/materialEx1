export interface Compania {
    id: number;
    company: string;
    firstName: string;
    lastName: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    postalCode: string;
    shipping: number;
    people: number;
    date: Date;
    phone?: string;
  }

  
export interface estado { 
  name: string,
  abbreviation: string;
}

export interface estados {
  states: estado [];
}

export const shippings = [
  {activo: "Free Shipping", valor: 0},
  {activo: "Priority Shipping", valor: 1},
  {activo: "Next Day Shipping", valor: 2},
];

// TODO: replace this with real data from your application
export const Companias: Compania[] = [
  {id: 1, company: 'Hydrogen',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AL",postalCode:"12312",shipping:0,people:0,date:new Date(Date.now())},
  {id: 2, company: 'Helium',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AK",postalCode:"12312",shipping:1,people:0,date:new Date(Date.now())},
  {id: 3, company: 'Lithium',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AS",postalCode:"12312",shipping:3,people:0,date:new Date(Date.now())},
  {id: 4, company: 'Beryllium',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AZ",postalCode:"12312",shipping:1,people:0,date:new Date(Date.now())},
  {id: 5, company: 'Boron',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AL",postalCode:"12312",shipping:0,people:0,date:new Date(Date.now())},
  {id: 6, company: 'Carbon',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AK",postalCode:"12312",shipping:1,people:0,date:new Date(Date.now())},
  {id: 7, company: 'Nitrogen',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AZ",postalCode:"12312",shipping:2,people:0,date:new Date(Date.now())},
  {id: 8, company: 'Oxygen',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AK",postalCode:"12312",shipping:3,people:0,date:new Date(Date.now())},
  {id: 9, company: 'Fluorine',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AZ",postalCode:"12312",shipping:1,people:0,date:new Date(Date.now())},
  {id: 10, company: 'Neon',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AS",postalCode:"12312",shipping:2,people:0,date:new Date(Date.now())},
  {id: 11, company: 'Sodium',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AZ",postalCode:"12323",shipping:1,people:0,date:new Date(Date.now())},
  {id: 12, company: 'Magnesium',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AK",postalCode:"12123",shipping:0,people:0,date:new Date(Date.now())},
  {id: 13, company: 'Aluminum',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AL",postalCode:"12323",shipping:2,people:0,date:new Date(Date.now())},
  {id: 14, company: 'Silicon',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AL",postalCode:"12313",shipping:3,people:0,date:new Date(Date.now())},
  {id: 15, company: 'Phosphorus',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AL",postalCode:"13123",shipping:1,people:0,date:new Date(Date.now())},
  {id: 16, company: 'Sulfur',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AK",postalCode:"12313",shipping:2,people:0,date:new Date(Date.now())},
  {id: 17, company: 'Chlorine',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AS",postalCode:"12123",shipping:1,people:0,date:new Date(Date.now())},
  {id: 18, company: 'Argon',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AL",postalCode:"12313",shipping:0,people:0,date:new Date(Date.now())},
  {id: 19, company: 'Potassium',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AK",postalCode:"13123",shipping:0,people:0,date:new Date(Date.now())},
  {id: 20, company: 'Calcium',firstName:"Primer Apellido",lastName:"Segundo Apellido",address:"Direccion1",address2:"Direccion2",city:"Ciudad",state:"AL",postalCode:"12323",shipping:0,people:0,date:new Date(Date.now())},
];
