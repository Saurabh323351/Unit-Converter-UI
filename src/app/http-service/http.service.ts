import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment} from '../../environments/environment'
 
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl=environment.baseUrl
  constructor(private http: HttpClient) { }


  getResult(endpoint,data){ 

    // const httpAuthOptions = {  
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',  
    //     'token': localStorage.getItem('token')
    //   })
    // };

    let url=this.baseUrl+endpoint
    return this.http.post(url,data)
  }
}
