import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getAllContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`);
  }

  createContact(contact: Contact):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/contact`, contact,{responseType:"text"});
  }

  deleteContact(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/contact/${id}`, {responseType:"text"});
  }

  public updateContact(Contact: any){
    return this.httpClient.put(this.baseUrl+'/contact',Contact);
  }

  findContact(id:number):Observable<Contact>{
      return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`);
  }
}
