import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePostFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
