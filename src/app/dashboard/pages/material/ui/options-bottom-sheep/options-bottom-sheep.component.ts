import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import MaterialComponent from '../../material.component';
@Component({
  selector: 'app-options-bottom-sheep',
  imports: [MatListModule],
  templateUrl: './options-bottom-sheep.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsBottomSheepComponent {
  private _bottomSheetRef =
  inject<MatBottomSheetRef<MaterialComponent>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
