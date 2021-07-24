import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SettingsService} from "./services";
import {Select} from "@ngxs/store";
import {LoginState} from "../../../auth";
import {Observable} from "rxjs";
import {filter, take} from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styles: [`
    .container {
      display: flex;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsPageComponent implements OnInit {

  @Select(LoginState.token)
  token$: Observable<string>

  constructor(private jwtHelper: JwtHelperService,
              private settingsService: SettingsService) { }

  ngOnInit(): void {
    // TODO refactor to state management
    this.token$.pipe(
      filter(val => !!val),
      take(1)
    ).subscribe(val => {
      const _id = this.jwtHelper.decodeToken(val).userId
      this.settingsService.getMyData(_id).subscribe()
    })
  }
}
