export class Persona {
  id?: number;
  nombre: string;
  apellido: string;
  img: string;
  fechanac: string;
  email: string;
  acercademi: string;

  constructor(
    nombre: string,
    apellido: string,
    img: string,
    fechanac: string,
    email: string,
    acercademi: string
  ) {
    this.nombre = nombre;
    this.apellido=apellido;
    this.img=img;
    this.fechanac=fechanac;
    this.email=email;
    this.acercademi=acercademi;
  }
}
