export class UserModel {
  email: string;
  password: string;
  nome: string;
  rol: string; 

  constructor(email: string = '', password: string = '', nome: string = '', rol:string ='') {
    this.email = email;
    this.password = password;
    this.nome = nome;
    this.rol = 'user';
  }
}
