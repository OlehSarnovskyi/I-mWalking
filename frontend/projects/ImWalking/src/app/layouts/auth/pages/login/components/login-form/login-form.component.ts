import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

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
      password: [null, [Validators.minLength(8), Validators.required]]
    })
  }
}
