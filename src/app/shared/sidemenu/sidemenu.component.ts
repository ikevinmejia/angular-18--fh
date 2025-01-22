import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  imports: [RouterModule],
  templateUrl: './sidemenu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {
  public menuItems = routes
  //* map las rutas configuradas en el app.routes.ts
  .map(route => route.children ?? [])
  // * Se aplana el retorno del arreglo para que solo este un arreglo y no un arreglo de arreglos
  .flat()
  // * Se filtran las rutas que existan, excluye las rutas que tengan path: ''
  .filter(route => route && route.path)
  // * Se excluyen las rutas que funcionen de forma dinamica como la user/:id
  .filter(route => !route.path?.includes(':'))

}
