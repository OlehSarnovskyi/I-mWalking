import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {filter, take} from "rxjs/operators";
import {Select} from "@ngxs/store";
import {LoginState} from "../../../../../auth";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {SettingsService} from "../../services";

@Component({
  selector: 'app-settings-my-data',
  templateUrl: './settings-my-data.component.html',
  styles: [`
    .avatar-image {
      height: 100px;
      width: 100px;
      object-fit: cover;
      border: 5px solid #3f51b5;
      border-radius: 50%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsMyDataComponent implements OnInit {

  @Select(LoginState.token)
  token$: Observable<string>

  form: FormGroup

  _id: string

  constructor(private fb: FormBuilder,
              private cdr: ChangeDetectorRef,
              private jwtHelper: JwtHelperService,
              private settingsService: SettingsService) {
  }

  get contactLinks(): FormArray {
    return this.form.get('contactLinks') as FormArray
  }

  ngOnInit(): void {
    this.initForm()

    // TODO refactor to state management
    this.token$.pipe(
      filter(val => !!val),
      take(1)
    ).subscribe(val => {
      this._id = this.jwtHelper.decodeToken(val).userId
      this.settingsService.getMyData(this._id)
        .subscribe(({contactLinks, ...rest}) => {
          if (contactLinks && contactLinks.length) {
            this.addContactLink(contactLinks)
          }
          this.form.patchValue({
            ...rest,
            contactLinks
          })
        })
    })
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      imageSrc: [null],
      telephone: [null],
      contactLinks: this.fb.array([])
    })
  }

  update() {
    // TODO refactor
    this.settingsService.updateMyData({...this.form.value, _id: this._id}).subscribe()
  }

  addContactLink(array = [null]): void {
    array.forEach(str => {
      this.contactLinks.push(this.fb.control(str, Validators.required))
    })
  }

  removeContactLink(ContactLinkIndex: number): void {
    this.contactLinks.removeAt(ContactLinkIndex)
  }

  addImageToUser({target: {files}}): void {
    if (files && files.length) {
      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = ({target: {result}}) => {
        this.form.get('imageSrc').setValue(result)
        this.cdr.detectChanges()
      }
    }
  }
}
