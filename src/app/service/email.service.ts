import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
   private baseurl:string="https://serv-production-8262.up.railway.app"
  constructor(private http:HttpClient) { }

  sendEmail(data:any){
    return this.http.post(`${this.baseurl}/send`,data)
  }
  

}
