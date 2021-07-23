import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, switchMap, take} from "rxjs/operators";

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
  imageSrc: string

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = this.fb.group({
      city: [null, Validators.required],
      animal: [null, Validators.required],
      description: [null, [Validators.minLength(8), Validators.required]],
      imageSrc: [null, Validators.required]
    })

    // Observer for quill-editor
    // BUG!!! (quill-editor)
    // this.form.get('description').valueChanges.subscribe(val => {
    //   this.changeDetectorRef.detectChanges()
    // })
    this.form.valueChanges
      .pipe(
        switchMap(() => this.activatedRoute.queryParams),
        take(1),
        filter(({update}) => !!update))
      .subscribe(() => {
        this.imageSrc = this.form.value.imageSrc
    })
  }

  onFileChanged(event) {
    if (event.target.files && event.target.files.length) {
      const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event) => {
        this.imageSrc = event.target.result as string
        this.form.get('imageSrc').setValue(this.imageSrc)
      }
    }
  }
}
