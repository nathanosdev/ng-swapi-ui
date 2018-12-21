import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { ApiService } from './../services/api.service';
import { Organism } from './../shared/models/organism.interface';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
  providers: [ApiService]
})
export class ListComponent implements OnInit {
  private people: Organism[] = [];
  private loaded: boolean = false;

  private querySubject = new Subject<string>();

  constructor(private peopleService: ApiService) {}

  public ngOnInit() {
    /**
     * Subscribe to the peopleService to receive people
     */
    this.peopleService.getAllPeople().subscribe(
      people => {
        this.people = people;

        if (people.length > 0) {
          this.loaded = true;
        }
      },
      error => console.error(error)
    );
  }
}
