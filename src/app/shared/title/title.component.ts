import { booleanAttribute, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: `<h1 class="mb-4 text-3xl">{{title}}</h1>`,
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input({required: true})
  public title!:string
  // * Se usa para usar propiedades booleanas, que se usen así: withShadow y no haya que tener que asignar un valor cuando es true withShadow = true en el template
  @Input({transform: booleanAttribute})
  public withShadow:boolean = false;
}
