import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<void>()

  hide = true
  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.minLength(8), Validators.required]],
      name: [null, [Validators.minLength(2), Validators.required]],
    })
  }
}
