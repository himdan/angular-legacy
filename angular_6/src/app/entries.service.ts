import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Entry, PageInfo} from "./models/entry";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  constructor(private httpClient: HttpClient) {
  }

  public getEntries(): Observable<Entry[]> {
    return this
      .httpClient
      .get('/api/entries')
      .pipe(map((page: PageInfo<Entry>) => {
        return page.entries
      }))
  }
}

