import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

type Grade = 'A' | 'B' | 'C' | 'D'

@Component({
  selector: 'app-control-flow',
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {
  public showContent = signal<boolean>(false);

  public grade = signal<Grade>('B');
  public nota = signal<number>(30);

  public frameworks = signal<string[]>(['Angular', 'View', 'Svelte', 'Qwik', 'React'])
  public frameworks2 = signal<string[]>([])

  public toggleContent(){
    this.showContent.update(value => !value)
  }
  public toggleGrade(){
    const calcularNota:number = Math.round(Math.random() * 100);
    this.nota.update(v => v = calcularNota)
    this.grade.update(value => {
      switch (true) {
      case (calcularNota > 75):
        value = 'A';
        break;
      case (calcularNota > 50):
        value = 'B';
        break;
      case (calcularNota > 25):
        value = 'C';
        break;
      default:
        value = 'D';
      }
      return value;
    })
  }
}
