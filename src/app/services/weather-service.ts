import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
   private http = inject(HttpClient);   
 
  private apiKey = '32c63b67571eb82a353a00440ad600fa';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
 
  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=fr`);
  }
}
