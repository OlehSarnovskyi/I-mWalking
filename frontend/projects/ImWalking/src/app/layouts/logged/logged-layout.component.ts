import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-logged-layout',
  templateUrl: './logged-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
