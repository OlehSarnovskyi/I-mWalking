import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
