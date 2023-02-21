import { Injectable } from '@angular/core';

import { Response } from 'src/app/interfaces/Response';
import { Videos } from 'src/app/interfaces/Videos';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class videosService {
  private apiKey = 'AIzaSyDsCWX8NQYQJffzgkI3ljDIz9WYKYWH-VE';
  private baseApiUrl = 'https://www.googleapis.com/youtube/v3/videos';

  private queries = `part=snippet,player&key=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getVideo(videoId: string): Observable<Response<Videos[]>> {
    const url = `${this.baseApiUrl}?${this.queries}&id=${videoId}`;
    return this.http.get<Response<Videos[]>>(url);
  }
}
