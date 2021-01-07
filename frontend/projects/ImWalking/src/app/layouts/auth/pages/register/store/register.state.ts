import {Action, Selector, State, StateContext} from "@ngxs/store";
import {REGISTER_DEFAULTS} from "./register.defaults";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Register} from "../models";
import {RegisterService} from "../services";
import {RegisterAction} from "./register.actions";


@State<Register.State>({
  name: 'RegisterState',
  defaults: REGISTER_DEFAULTS,
})
@Injectable()
export class RegisterState {

  constructor(private registerService: RegisterService) {}

  @Selector()
  static formValue({form}: Register.State): Register.Form {
    return form.model;
  }

  @Selector()
  static registered({registered}: Register.State): boolean {
    return registered;
  }


  @Action(RegisterAction)
  register({patchState}: StateContext<Register.State>, { form }: RegisterAction): Observable<Register.SuccessResponse> {
    return this.registerService.register(form)
      .pipe(
        tap(() => {
          patchState({registered: true})
        })
      )
  }
}
