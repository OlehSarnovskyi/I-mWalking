import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {CreatePostAction} from "./crud-post.actions";
import {Observable} from "rxjs";
import {CrudPost} from "../models";
import {CRUD_POST_DEFAULTS} from "./crud-post.defaults";
import {CrudPostService} from "../services";


@State<CrudPost.State>({
  name: 'CrudPostState',
  defaults: CRUD_POST_DEFAULTS,
})
@Injectable()
export class CrudPostState {

  constructor(private crudPostService: CrudPostService) {}

  @Selector()
  static formValue({form}: CrudPost.State): CrudPost.Form {
    return form.model;
  }


  @Action(CreatePostAction)
  create({patchState}: StateContext<CrudPost.State>, {form}: CreatePostAction): Observable<{ message: string }> {
    return this.crudPostService.create(form)
  }
}
