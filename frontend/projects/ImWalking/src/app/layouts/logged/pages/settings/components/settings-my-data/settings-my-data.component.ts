import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Settings} from "../../models";
import {filter, take} from "rxjs/operators";

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

  @Input() myData$: Observable<Settings.User>

  @Output() submitted = new EventEmitter<void>()

  form: FormGroup

  constructor(private fb: FormBuilder,
              private store$: Store,
              private jwtHelper: JwtHelperService,
              private cdr: ChangeDetectorRef) {
  }

  get contactLinks(): FormArray {
    return this.form.get('contactLinks') as FormArray
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      imageSrc: [null],
      telephone: [null],
      contactLinks: this.fb.array([])
    })

    this.myData$
      .pipe(filter(val => !!val), take(1))
      .subscribe(({contactLinks, ...rest}) => {
      if (contactLinks && contactLinks.length) {
        this.addContactLink(contactLinks)
        this.form.patchValue({
          ...rest,
          contactLinks
        })
      }
    })
  }

  addContactLink(array = [null]): void {
    array.forEach(el => {
      this.contactLinks.push(this.fb.control(el, Validators.required))
    })
  }

  removeContactLink(ContactLinkIndex: number): void {
    this.contactLinks.removeAt(ContactLinkIndex)
  }

  addImageToUser({target: {files}}: any): void {
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
