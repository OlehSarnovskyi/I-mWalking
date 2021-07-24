import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-settings-my-data',
  templateUrl: './settings-my-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsMyDataComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      imageSrc: [null, Validators.required],
      telephone: [null, Validators.required],
      links: [null, Validators.required]
    })
  }
}
