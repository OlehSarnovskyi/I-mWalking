import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<void>()

  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = this.fb.group({
      post: [null, [Validators.minLength(8), Validators.required]]
    })
  }
}
