import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      max-width: 90%;
      margin: auto;
    }
  `],
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
      city: [null, Validators.required],
      animal: [null, Validators.required],
      description: [null, [Validators.minLength(8), Validators.required]]
    })
  }
}
