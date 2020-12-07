import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-city-and-posts-page',
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit {

  searchFC: FormControl;

  cities = ['Lvov', 'Kiev'];

  posts = [];

  get hasPosts(): boolean {
    return !!this.posts.length
  }

  ngOnInit(): void {
    this.searchFC = new FormControl();
  }

  callAndShowPosts(event) {
    this.posts = ['blabla', 'go to walk bla bla'];
    console.log(event.option._value);
  }

  like() {
    console.log('callback for set as like');
  }
}
