import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './settings-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
