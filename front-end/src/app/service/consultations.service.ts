import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewPost } from '../model/newPost';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class ConsultationsService {

  public API = '/api';


  constructor(private http: HttpClient) { }
  
  getAllPosts(): Observable<any> {
    return this.http.get(`${this.API}/consultations`);
  }

  getAllMySubject(username: string): Observable<any> {
    return this.http.get(`${this.API}/my-subject/${username}`);
  }

  getAllSpecialization(): Observable<any> {
    return this.http.get(`${this.API}/specialization`);
  }

  getAllType(): Observable<any> {
    return this.http.get(`${this.API}/type`);
  }

  addNewPost(newPost: NewPost): Observable<any> {
    return this.http.post(`${this.API}/post/add`, newPost, httpOptions);
  }
}
