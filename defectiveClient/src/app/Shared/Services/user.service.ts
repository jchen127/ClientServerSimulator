import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable, of, Subject} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable()
export class UserService{

 private securityToken: string = "";
 private username: string = "";
 private password: string = "";



  constructor(private http: HttpClient) {
  }

  public getSecurityToken(): string{
    return this.securityToken.slice();
  }

  public getUsername(): string{
    return this.username.slice();
  }

  public getPassword(): string{
    return this.password.slice();
  }

  public setSecurityToken(tokenString: string): void{
    this.securityToken=tokenString;
  }

  public setUserName(username: string): void{
    this.username = username;
  }

  public setPassword(password: string): void{
    this.password = password;
  }

  public clearUserService(){
    this.setSecurityToken("");
    this.setPassword("");
    this.setUserName("");
  }

  /***
   * register user and return security token
   *
   */
  public RegisterUser(email: string, password: string): Observable<any> {

    //do work
   return this.http.post('http://localhost:3000/api/Users', {email: email, password: password});

  }

  public LoginUser(email: string, password: string): Observable<any> {

     return this.http.post("http://localhost:3000/api/Users/login", {email: email, password: password});

  }

}
