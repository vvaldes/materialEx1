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
    shipping: string;
    people: number;
    date: Date;
  }

  export interface Companias {
    companias: Compania[]; //usuarios
  }