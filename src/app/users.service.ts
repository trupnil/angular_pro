import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersInterface,Useradd } from './Usersinterface';
import { Observable } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient) {}
  baseUrl:string = "http://localhost/angular_new/read.php";     

  getUsers():Observable<Useradd>
  {
  	  return this._http.get<Useradd>(this.baseUrl);
  }

  create(f)
  {
  	return this._http.post("http://localhost/angular_new/create.php",f);
  }
  delete(id)
  {
    
    return this._http.delete("http://localhost/angular_new/delete.php?id="+id);

  }
  update(f):Observable<Useradd>
  {
    return this._http.put<Useradd>("http://localhost/angular_new/update.php",f);
  }



}
