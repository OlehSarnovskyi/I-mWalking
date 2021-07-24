import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {filter, take} from "rxjs/operators";
import {Select} from "@ngxs/store";
import {LoginState} from "../../../../../auth";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {SettingsService} from "../../services";

@Component({
  selector: 'app-settings-my-data',
  templateUrl: './settings-my-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsMyDataComponent implements OnInit {

  @Select(LoginState.token)
  token$: Observable<string>

  form: FormGroup

  constructor(private fb: FormBuilder,
              private jwtHelper: JwtHelperService,
              private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.initForm()

    // TODO refactor to state management
    this.token$.pipe(
      filter(val => !!val),
      take(1)
    ).subscribe(val => {
      const _id = this.jwtHelper.decodeToken(val).userId
      this.settingsService.getMyData(_id).subscribe(({name, email, telephone}) => {
        this.form.patchValue({
          name,
          email,
          telephone
        })
      })
    })
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
