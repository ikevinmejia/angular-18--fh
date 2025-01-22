import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersfastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  imports: [HeavyLoadersfastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class  DeferOptionsComponent { }
