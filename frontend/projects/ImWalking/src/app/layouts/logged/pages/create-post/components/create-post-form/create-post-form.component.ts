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

  // TODO refactor
  @Output() imageSrcEmitter = new EventEmitter<string>()

  form: FormGroup
  imageSrc: string

  constructor(private fb: FormBuilder) {}

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

    this.form.valueChanges.subscribe(val => {
      console.log(val);
    })

    // Observer for quill-editor
    // BUG!!! (quill-editor)
    // this.form.get('description').valueChanges.subscribe(val => {
    //   this.changeDetectorRef.detectChanges()
    // })
  }

  onFileChanged(event) {
    if (event.target.files && event.target.files.length) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event) => {
        this.imageSrc = event.target.result as string;
        this.imageSrcEmitter.emit(this.imageSrc)
      }
    }
  }
}
