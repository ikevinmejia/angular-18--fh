import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [CommonModule],
  template: `
  <section [ngClass]="['w-full', cssClass]">
  <ng-content #name></ng-content>

  </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersfastComponent {
  @Input({required: true}) cssClass!: string;
}
