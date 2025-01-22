import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import {
  MatBottomSheet,
  MatBottomSheetModule
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OptionsBottomSheepComponent } from './ui/options-bottom-sheep/options-bottom-sheep.component';

@Component({
  selector: 'app-material',
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatBottomSheetModule,
  ],
  templateUrl: './material.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MaterialComponent {

  private _bottomSheet = inject(MatBottomSheet);
  openBottomSheep() {
    this._bottomSheet.open(OptionsBottomSheepComponent);
  }
}
