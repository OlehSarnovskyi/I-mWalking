import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
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
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<void>()

  form: FormGroup

  constructor(private fb: FormBuilder,
              private cdr: ChangeDetectorRef) {}

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
  }

  onFileChanged(event) {
    if (event.target.files && event.target.files.length) {
      const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (e) => {
        this.form.get('imageSrc').setValue(e.target.result)
        this.cdr.detectChanges();
      }
    }
  }
}
