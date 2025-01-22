import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  imports: [
    TitleComponent,
    RouterModule,
    CommonModule
  ],
  templateUrl: './users.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {
  public userServive = inject(UsersService);

}
