export interface Compania {
    company: string;
    firstName: string;
    lastName: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    postalCode: string;
    shipping: string;
  }

  export interface Companias {
    companias: Compania[]; //usuarios
  }