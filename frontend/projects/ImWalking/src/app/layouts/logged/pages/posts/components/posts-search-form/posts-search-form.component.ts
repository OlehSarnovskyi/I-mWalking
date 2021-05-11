import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Actions, ofActionDispatched, ofActionSuccessful} from "@ngxs/store";
import {SearchPostsAction} from "../../store";
import {BehaviorSubject, Subscription} from "rxjs";

@Component({
  selector: 'app-posts-search-form',
  templateUrl: './posts-search-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsSearchFormComponent implements OnInit, OnDestroy {

  @Output() submitted = new EventEmitter<void>()

  pendingSearch$ = new BehaviorSubject(false)
  subscription = new Subscription()

  form: FormGroup

  constructor(private fb: FormBuilder, private actions$: Actions) {}

  ngOnInit(): void {
    this.initForm()
    this.listenSearchAction()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  initForm(): void {
    this.form = this.fb.group({
      city: [null, Validators.required],
      animal: [null, Validators.required],
      description: ['']
    })
  }

  listenSearchAction() {
    const sub1 = this.actions$.pipe(
      ofActionDispatched(SearchPostsAction)
    ).subscribe(() => {
      this.pendingSearch$.next(true)
    })
    const sub2 = this.actions$.pipe(
        ofActionSuccessful(SearchPostsAction)
    ).subscribe(() => {
      this.pendingSearch$.next(false)
    })

    this.subscription.add(sub1)
    this.subscription.add(sub2)
  }
}
