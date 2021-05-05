import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
