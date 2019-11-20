import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/domain/usuario';
import { REST_SERVER_URL } from '../configuration';
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public userLooged: Usuario = new Usuario
  constructor(private httpCLient: HttpClient) { }

  async authenticate(username: string, password: string) {
    const user = await this.httpCLient.post<Usuario>(REST_SERVER_URL + "/login", [username, password]).toPromise()
    this.userLooged = Usuario.fromJson(user[0])
  }

  isAuthenticated() {
    return !isUndefined(this.userLooged.nombre)
  }

}
