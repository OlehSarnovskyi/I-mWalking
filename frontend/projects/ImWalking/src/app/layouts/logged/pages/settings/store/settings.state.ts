import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {SearchMyPostsAction} from "./settings.actions";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Settings} from "../models";
import {SETTINGS_DEFAULTS} from "./settings.defaults";
import {SettingsService} from "../services";
import {Posts} from "../../posts";


@State<Settings.State>({
  name: 'SettingsState',
  defaults: SETTINGS_DEFAULTS,
})
@Injectable()
export class SettingsState {

  constructor(private settingsService: SettingsService) {}


  @Selector()
  static myPosts({posts}: Settings.State): Posts.PostsList {
    return posts;
  }


  @Action(SearchMyPostsAction)
  search({patchState}: StateContext<Settings.State>, { id }: SearchMyPostsAction): Observable<Posts.PostsList> {
    return this.settingsService.getMyPosts(id)
      .pipe(
        tap(posts => {
          patchState({posts})
        })
      )
  }
}
