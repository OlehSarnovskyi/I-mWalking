import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-settings-nav-bar',
  templateUrl: './settings-nav-bar.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
