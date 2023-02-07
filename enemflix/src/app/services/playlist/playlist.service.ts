import { Injectable } from '@angular/core';

import { Response } from 'src/app/interfaces/Response';
import { Playlists } from 'src/app/interfaces/Playlists';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private apiKey = 'AIzaSyB2OTUu5NxxAy6mYxVv3TSkMongJq1YjAY';

  private descomplica_url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCT0JugAtGmqiYkwxFZOwAtg&maxResults=50&key=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getPlaylists(): Observable<Response<Playlists[]>> {
    return this.http.get<Response<Playlists[]>>(this.descomplica_url);
  }
}
