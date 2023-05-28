export class LoginUsuario{
    nombreUsuario: string;
    password: string;
    
    //contructor
    constructor(nombreUsuario: string, password: string) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}