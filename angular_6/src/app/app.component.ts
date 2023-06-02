import { Component } from '@angular/core';
import {EntriesService} from "./entries.service";
import {Observable} from "rxjs";
import {Entry} from "./models/entry";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6LegacyApp';
  $entries:  Observable<Entry[]>
  public constructor(private entriesService:EntriesService){
    this.$entries = this.entriesService.getEntries()
  }
}
