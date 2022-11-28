import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Succulent } from '../interface/succulent.interface';

@Injectable({
  providedIn: 'root'
})
export class SucculentService {

  public succulentUrl: string = 'http://localhost:8080/succulents'

  constructor(private http: HttpClient) { }

  findAll() : Observable<Succulent[]> {
    return this.http.get<Succulent[]>(this.succulentUrl)
  }

  findById(id: number) : Observable<Succulent> {
    return this.http.get<Succulent>(`${this.succulentUrl}/${id}`)
  }

  save(succulent: Succulent) : Observable<Succulent> {
    return this.http.post<Succulent>(`${this.succulentUrl}/`, succulent)
  }

}
