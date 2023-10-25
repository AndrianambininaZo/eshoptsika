import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../model/client.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http:HttpClient) { }

  public inscription(client:Client):Observable<Client>{
    return this.http.post<Client>(environment.backEndHost+"/e_shop/client",client);
  }
}
