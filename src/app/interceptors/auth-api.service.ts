import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService  implements HttpInterceptor {

  constructor() { }

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

    let request = req;

    request = req.clone(
      {
        headers : new HttpHeaders(
          {
            "Authorization": "Basic amFzc28yMDg6Z2hwX2RFd1RKMk14d3NYT2prYTNIZGg4S0doVmJJS3lueDM3ZVpSaw==" 
          }
        )
      }      
    );

    return next.handle(request);
  }
}
