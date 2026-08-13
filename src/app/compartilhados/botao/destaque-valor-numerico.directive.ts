import { afterRender, Directive, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appDestaqueValorNumerico]',
})
export class DestaqueValorNumericoDirective {
  appDestaqueValorNumerico = input.required<number>();

  corPositiva = input<string>('var(--destaque-receita)');
  corNegativa = input<string>('var(--destaque-despesa)');

  constructor(elemento: ElementRef<HTMLElement>) {
    afterRender(() => {
      if (this.appDestaqueValorNumerico() > 0) {
        elemento.nativeElement.style.color = this.corPositiva();
      } else if (this.appDestaqueValorNumerico() < 0) {
        elemento.nativeElement.style.color = this.corNegativa();
      }
    });
  }
}
