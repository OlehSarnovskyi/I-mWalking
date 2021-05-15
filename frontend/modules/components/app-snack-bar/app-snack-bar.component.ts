import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from "@angular/material/snack-bar";

@Component({
  template: `
    <span class="example-pizza-party">
      {{message}}
    </span>
  `,
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public message: any) {}
}
