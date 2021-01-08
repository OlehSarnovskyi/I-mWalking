import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {CreatePostAction, CreatePostState} from "./store";

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePostPageComponent implements OnInit {

  constructor(private store$: Store) {}

  ngOnInit(): void {}

  create(): void {
    this.store$.dispatch(new CreatePostAction(this.store$.selectSnapshot(CreatePostState.formValue)))
  }
}
