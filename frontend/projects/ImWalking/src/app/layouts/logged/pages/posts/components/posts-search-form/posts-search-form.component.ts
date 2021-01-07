import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-posts-search-form',
  templateUrl: './posts-search-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsSearchFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<void>()

  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = this.fb.group({
      city: [null, Validators.required],
      description: [null, Validators.required]
    })
  }
}
