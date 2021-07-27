import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router'
import {Observable} from 'rxjs'
import {Store} from "@ngxs/store"
import {SettingsState} from '../pages/settings/store'
import {UpdateFormValue} from "@ngxs/form-plugin";
import {take} from "rxjs/operators";
import {LoggedLayoutState} from "../store";

@Injectable()
export class UnsavedFormGuard implements CanDeactivate<any> {

  constructor(private store$: Store,
              private router: Router) {}

  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const {_id, __v, posts, password, ...myRestData} = this.store$.selectSnapshot(LoggedLayoutState.myData)

    const result = this.deepEqual(this.store$.selectSnapshot(SettingsState.formValue), myRestData)

    if (!result) {
      const confirmState = confirm('You have some differences in the form. Please, update or cancel your changes')
      if (!confirmState) {
        this.store$.dispatch(new UpdateFormValue({
          value: {
            ...myRestData
          },
          path: 'SettingsState.form'
        })).pipe(take(1)).subscribe(() => {
          this.router.navigateByUrl(nextState.url)
        })
      }
    }

    return result
  }

  deepEqual(object1, object2) {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if (keys1.length !== keys2.length) {
      return false
    }

    for (const key of keys1) {
      const val1 = object1[key]
      const val2 = object2[key]
      const areObjects = this.isObject(val1) && this.isObject(val2)
      if (
        areObjects && !this.deepEqual(val1, val2) ||
        !areObjects && val1 !== val2
      ) {
        return false
      }
    }
    return true
  }

  isObject(object) {
    return object != null && typeof object === 'object'
  }
}
