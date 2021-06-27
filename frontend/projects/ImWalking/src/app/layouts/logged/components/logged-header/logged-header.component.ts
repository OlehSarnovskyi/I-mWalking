import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-logged-header',
  templateUrl: './logged-header.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedHeaderComponent {
  @Output() logout = new EventEmitter<void>()
}
