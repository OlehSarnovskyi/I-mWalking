import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-settings-my-posts',
  templateUrl: './settings-my-posts.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsMyPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
