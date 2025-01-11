import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: `<p>title works!</p>`,
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent { }
